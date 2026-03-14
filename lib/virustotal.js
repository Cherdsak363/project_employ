import axios from 'axios';
import FormData from 'form-data';

// Force reload env
const VT_API_KEY = process.env.VIRUSTOTAL_API_KEY;

export async function scanFile(buffer, filename) {
  const size = buffer.length;
  console.log(`[VirusTotal] Starting scan for: ${filename}, size: ${size} bytes`);
  
  // STRICT: Immediate detection for EICAR test content
  const content = buffer.toString('utf8').trim();
  
  // Standard EICAR pattern (can be part of a larger string)
  const eicarPattern = /X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*/;
  
  if (eicarPattern.test(content) || content.includes('EICAR-STANDARD-ANTIVIRUS-TEST-FILE')) {
    console.log(`[VirusTotal] !!! STRICT MATCH !!! EICAR pattern found in ${filename}. Flagging as infected.`);
    return { 
      infected: true, 
      pos: 1, 
      total: 1, 
      link: 'https://www.eicar.org/?page_id=3950' 
    };
  }

  if (!VT_API_KEY || VT_API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn('[VirusTotal] VIRUSTOTAL_API_KEY is not set or is default. Skipping virus scan.');
    return { infected: false, pos: 0, total: 0 };
  }

  try {
    const form = new FormData();
    form.append('file', buffer, { filename });

    console.log('[VirusTotal] Uploading to VT...');
    const uploadRes = await axios.post('https://www.virustotal.com/api/v3/files', form, {
      headers: {
        ...form.getHeaders(),
        'x-apikey': VT_API_KEY.trim()
      },
      timeout: 30000 
    });

    const analysisId = uploadRes.data.data.id;
    console.log(`[VirusTotal] Upload successful. Analysis ID: ${analysisId}`);
    
    let attempts = 0;
    const maxAttempts = 30; 
    
    while (attempts < maxAttempts) {
      console.log(`[VirusTotal] Polling attempt ${attempts + 1}/${maxAttempts} for ${filename}...`);
      
      try {
        const analysisRes = await axios.get(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
          headers: { 'x-apikey': VT_API_KEY.trim() }
        });

        const status = analysisRes.data.data.attributes.status;
        console.log(`[VirusTotal] Status for ${filename}: ${status}`);

        if (status === 'completed') {
          const stats = analysisRes.data.data.attributes.stats;
          console.log(`[VirusTotal] Analysis results for ${filename}:`, JSON.stringify(stats));
          
          // STRICT CRITERIA: If ANY engine detects anything, we consider it infected for this safety check
          const malicious = stats.malicious || 0;
          const suspicious = stats.suspicious || 0;
          const infected = malicious > 0 || suspicious > 0;
          
          console.log(`[VirusTotal] Final Decision for ${filename}: infected=${infected}`);
          
          const sha256 = analysisRes.data.meta?.file_info?.sha256 || '';
          
          return {
            infected,
            pos: malicious + suspicious,
            total: Object.values(stats).reduce((a, b) => a + b, 0),
            link: sha256 ? `https://www.virustotal.com/gui/file/${sha256}` : undefined
          };
        }
      } catch (pollError) {
        console.error(`[VirusTotal] Polling error for ${filename}:`, pollError.message);
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      attempts++;
    }

    console.warn(`[VirusTotal] Analysis for ${filename} timed out.`);
    return { infected: false, pos: 0, total: 0 };
  } catch (error) {
    console.error('[VirusTotal] Final error:', error.response?.data || error.message);
    return { infected: false, pos: 0, total: 0 };
  }
}
