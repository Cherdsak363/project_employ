'use client'



import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Avatar from '../../components/Avatar'
import ToastContainer, { toast } from '../../components/Toast'
import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid, SearchBar, SearchContext, SearchContextManager } from '@giphy/react-components'

// Giphy API Key from Environment
const GIPHY_API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY || 'sXpYse9LInpUfD9uPNoOhYInz2f3EwXU'
const gf = new GiphyFetch(GIPHY_API_KEY)

const GifPickerContent = ({ onGifClick }) => {
  const { fetchGifs, searchKey } = React.useContext(SearchContext)
  return (
    <>
      <SearchBar className="giphy-search-bar" />
      <div className="giphy-grid-wrapper">
        <Grid
          key={searchKey}
          columns={2}
          width={460}
          fetchGifs={fetchGifs}
          onGifClick={onGifClick}
          noLink={true}
          hideAttribution={true}
        />
      </div>
    </>
  )
}

const resolvePath = (raw) => {
  if (!raw || typeof raw !== 'string') return ''
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw
  return raw.startsWith('/') ? raw : `/${raw}`
}

export default function MessagesPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MessagesPageContent />
    </React.Suspense>
  )
}

function MessagesPageContent() {
  const searchParams = useSearchParams()
  const [conversations, setConversations] = useState([])
  const [activeId, setActiveId] = useState('')
  const [messages, setMessages] = useState([])
  const [draft, setDraft] = useState('')
  const [meId, setMeId] = useState('')
  const [unreadIds, setUnreadIds] = useState(new Set())
  const [loadingConversations, setLoadingConversations] = useState(true)
  const [loadingMessages, setLoadingMessages] = useState(false)
  const [sending, setSending] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [previewUrls, setPreviewUrls] = useState([])
  const fileInputRef = useRef(null)

  const looksLikeEicar = (text) => {
    if (!text || typeof text !== 'string') return false
    const s = text.trim()
    if (!s) return false
    if (s.includes('EICAR-STANDARD-ANTIVIRUS-TEST-FILE')) return true
    const eicarPattern = /X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*/
    return eicarPattern.test(s)
  }

  const precheckFilesForEicar = async (files) => {
    const infected = []
    for (const file of files) {
      try {
        const bytes = await file.arrayBuffer()
        const view = new Uint8Array(bytes.slice(0, 4096))
        const text = new TextDecoder('utf-8', { fatal: false }).decode(view)
        if (looksLikeEicar(text)) infected.push(file.name)
      } catch {
        // ignore
      }
    }
    return infected
  }

  const handleInfectedError = (err) => {
    console.log('[Frontend] handleInfectedError called with error:', err);
    
    // รีเซ็ตสถานะการโหลดทั้งหมด
    setUploading(false);
    setIsScanning(false);
    setSending(false);
    setUploadProgress(0);
    setScanProgress(0);

    const fileList = err.files?.map(f => f.filename).join(', ') || 'ไฟล์แนบ';
    
    setConfirmConfig({
      title: 'ตรวจพบความเสี่ยง!',
      message: `ไฟล์ของคุณอาจจะเป็นไวรัส (${fileList}) คุณจะดำเนินการต่อไหม?`,
      onConfirm: () => {
        console.log('[Frontend] User confirmed. Retrying with confirmInfected...');
        setShowConfirmModal(false);
        // ส่งไฟล์เดิมอีกครั้งพร้อมแนบ flag ยืนยัน
        setTimeout(() => {
          handleSend(true);
        }, 200);
      },
      onCancel: () => {
        console.log('[Frontend] User canceled. Clearing selected files.');
        setShowConfirmModal(false);
        setSelectedFiles([]);
        setUploadProgress(0);
        setScanProgress(0);
        setUploading(false);
        setIsScanning(false);
        setSending(false);
      },
    });
    
    // บังคับแสดง Modal ทันที
    setShowConfirmModal(true);
  };

  const [showPlusMenu, setShowPlusMenu] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showGifPicker, setShowGifPicker] = useState(false)
  const plusMenuRef = useRef(null)
  const emojiPickerRef = useRef(null)
  const gifPickerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close plus menu
      if (plusMenuRef.current && !plusMenuRef.current.contains(event.target)) {
        setShowPlusMenu(false)
      }
      // Close emoji picker
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target) && !event.target.closest('.plus-menu-item')) {
        setShowEmojiPicker(false)
      }
      // Close gif picker
      if (gifPickerRef.current && !gifPickerRef.current.contains(event.target) && !event.target.closest('.plus-menu-item')) {
        setShowGifPicker(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const onEmojiClick = (emojiData) => {
    setDraft(prev => prev + emojiData.emoji)
    // setShowEmojiPicker(false) // Commented out to keep open after selection
  }

  const handleGifSelect = (gifUrl) => {
    // Send GIF as a message
    handleSendGif(gifUrl)
    setShowGifPicker(false)
  }

  const handleSendGif = async (url) => {
    if (!activeId) return
    setSending(true)
    try {
      const res = await fetch(`/api/conversations/${activeId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: url }), // For now, send GIF URL as text
      })
      if (res.ok) {
        const created = await res.json()
        setMessages(prev => [...prev, created])
        await loadConversations()
      }
    } catch (err) {
      toast.error('ไม่สามารถส่ง GIF ได้')
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    if (selectedFiles.length === 0) {

      setPreviewUrls([])

      return

    }



    const urls = selectedFiles.map(file => URL.createObjectURL(file))

    setPreviewUrls(urls)



    return () => urls.forEach(url => URL.revokeObjectURL(url))

  }, [selectedFiles])



  const lastCursorRef = useRef(null)

  const pollTimerRef = useRef(null)

  const threadRef = useRef(null)



  const scrollToBottom = (behavior = 'smooth') => {

    if (threadRef.current) {

      threadRef.current.scrollTo({

        top: threadRef.current.scrollHeight,

        behavior,

      })

    }

  }



  useEffect(() => {

    if (messages.length > 0) {

      scrollToBottom('smooth')

    }

  }, [messages])



  const activeConversation = useMemo(

    () => conversations.find((c) => c.id === activeId) || null,

    [conversations, activeId],

  )



  const formatTime = (d) => {

    const date = d instanceof Date ? d : new Date(d)

    if (Number.isNaN(date.getTime())) return ''

    return date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })

  }



  const formatFileSize = (bytes) => {

    if (!bytes) return '0 B'

    const k = 1024

    const sizes = ['B', 'KB', 'MB', 'GB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]

  }



  const loadConversations = async () => {

    const res = await fetch('/api/conversations', { cache: 'no-store' })

    if (!res.ok) {

      throw new Error('Failed to load conversations')

    }

    const data = await res.json().catch(() => [])

    const list = Array.isArray(data) ? data : []

    // Fetch blocks to determine status
    const blocksRes = await fetch('/api/conversations/blocks', { cache: 'no-store' })
    const blocksData = blocksRes.ok ? await blocksRes.json() : { blockedByMe: [], blockingMe: [] }

    setConversations(list.map(c => {
      const isBlockedByMe = blocksData.blockedByMe?.includes(c.otherUser?.id)
      const isBlockingMe = blocksData.blockingMe?.includes(c.otherUser?.id)
      return { ...c, isBlockedByMe, isBlockingMe }
    }))

    return list

  }



  const loadInitialMessages = async (conversationId) => {

    setLoadingMessages(true)

    try {

      const res = await fetch(`/api/conversations/${conversationId}/messages?take=50`, { cache: 'no-store' })

      if (!res.ok) {

        throw new Error('Failed to load messages')

      }

      const data = await res.json().catch(() => [])

      const list = Array.isArray(data) ? data : []

      setMessages(list)

      lastCursorRef.current = list.length ? new Date(list[list.length - 1].createdAt).toISOString() : null

    } finally {

      setLoadingMessages(false)

    }

  }



  const pollNewMessages = async (conversationId) => {

    const cursor = lastCursorRef.current

    const qs = cursor ? `?cursor=${encodeURIComponent(cursor)}&take=50` : '?take=50'

    const res = await fetch(`/api/conversations/${conversationId}/messages${qs}`, { cache: 'no-store' })

    if (!res.ok) return

    const data = await res.json().catch(() => [])

    const incoming = Array.isArray(data) ? data : []

    

    // Also check for 'Seen' updates for my messages

    const seenRes = await fetch(`/api/conversations/${conversationId}/messages?checkSeen=true`, { cache: 'no-store' })

    if (seenRes.ok) {

      const seenData = await seenRes.json().catch(() => [])

      if (Array.isArray(seenData) && seenData.length > 0) {

        setMessages(prev => {

          const next = [...prev]

          let changed = false

          seenData.forEach(s => {

            const idx = next.findIndex(m => m.id === s.id)

            if (idx !== -1 && !next[idx].readAt) {

              next[idx] = { ...next[idx], readAt: s.readAt }

              changed = true

            }

          })

          return changed ? next : prev

        })

      }

    }



    if (!incoming.length) return



    setMessages((prev) => {

      const seen = new Set(prev.map((m) => m.id))

      const merged = [...prev]

      for (const m of incoming) {

        if (!seen.has(m.id)) merged.push(m)

      }

      return merged

    })



    lastCursorRef.current = new Date(incoming[incoming.length - 1].createdAt).toISOString()

  }



  useEffect(() => {

    const timer = setInterval(() => {

      loadConversations().catch(() => {})

    }, 5000)

    return () => clearInterval(timer)

  }, [activeId, meId])



  useEffect(() => {

    let cancelled = false



    const run = async () => {

      setLoadingConversations(true)

      try {

        const list = await loadConversations()

        if (cancelled) return



        const requested = searchParams?.get('c')

        if (requested && list.some((c) => c.id === requested)) {

          setActiveId(requested)

          return

        }



        if (!activeId && list.length) setActiveId(list[0].id)

      } catch {

        // ignore

      } finally {

        if (!cancelled) setLoadingConversations(false)

      }

    }



    run()



    return () => {

      cancelled = true

    }

  }, [searchParams])



  useEffect(() => {

    let cancelled = false



    const loadMe = async () => {

      try {

        const res = await fetch('/api/profile', { cache: 'no-store' })

        if (!res.ok) return

        const data = await res.json().catch(() => null)

        const id = data?.user?.id

        if (!cancelled && typeof id === 'string') setMeId(id)

      } catch {

        // ignore

      }

    }



    loadMe()



    return () => {

      cancelled = true

    }

  }, [])



  useEffect(() => {

    if (!activeId) return

    setUnreadIds(prev => {

      if (prev.has(activeId)) {

        const next = new Set(prev)

        next.delete(activeId)

        return next

      }

      return prev

    })

    

    let stopped = false

    lastCursorRef.current = null

    setMessages([])



    const start = async () => {

      try {

        await loadInitialMessages(activeId)

      } catch {

        // ignore

      }



      if (stopped) return



      if (pollTimerRef.current) {

        clearInterval(pollTimerRef.current)

        pollTimerRef.current = null

      }



      pollTimerRef.current = setInterval(() => {

        pollNewMessages(activeId)

      }, 1500)

    }



    start()



    return () => {

      stopped = true

      if (pollTimerRef.current) {

        clearInterval(pollTimerRef.current)

        pollTimerRef.current = null

      }

    }

  }, [activeId])



  const [uploadProgress, setUploadProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (isScanning && scanProgress < 95) {
        setScanProgress(prev => {
          const step = Math.random() * 5
          return Math.min(95, prev + step)
        })
      }
    }, 800)
    return () => clearInterval(timer)
  }, [isScanning, scanProgress])

  const handleSend = async (confirmInfected = false) => {
    if (!draft.trim() && selectedFiles.length === 0) return
    if (!activeId) return
    if (sending || uploading) return

    const maxSize = 10 * 1024 * 1024 // 10MB
    for (const file of selectedFiles) {
      if (file.size > maxSize) {
        toast.error(`ไฟล์ "${file.name}" มีขนาดใหญ่เกินไป (จำกัด 10MB)`)
        return
      }
    }

    const body = draft.trim()
    setSending(true)

    try {
      if (selectedFiles.length > 0) {
        if (!confirmInfected) {
          console.log('[Frontend] Running EICAR precheck for files:', selectedFiles.map(f => f?.name))
          const infectedNames = await precheckFilesForEicar(selectedFiles)
          console.log('[Frontend] EICAR precheck infectedNames:', infectedNames)
          if (infectedNames.length > 0) {
            handleInfectedError({ files: infectedNames.map((n) => ({ filename: n })) })
            return
          }
        }

        setUploading(true)
        setUploadProgress(0)
        setIsScanning(false)
        
        const fd = new FormData()
        selectedFiles.forEach(f => fd.append('files', f))
        if (body) fd.append('body', body)
        if (confirmInfected) fd.append('confirmInfected', 'true')

        console.log('[Frontend] Starting upload to API...');
        const isConfirm = Boolean(confirmInfected);
        
        // Wrap XHR in a promise for awaitable execution
        let responseData;
        try {
          responseData = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            
            xhr.upload.addEventListener('progress', (e) => {
              if (e.lengthComputable) {
                const percent = Math.round((e.loaded / e.total) * 100)
                setUploadProgress(percent)
                if (percent === 100) {
                  console.log('[Frontend] Upload finished, waiting for server scan...');
                  setUploading(false)
                  setIsScanning(true)
                  setScanProgress(0)
                  setUploadProgress(100)
                }
              }
            })

            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                console.log('[Frontend] XHR ReadyState 4, status:', xhr.status);
                let payload = { error: 'Unknown error' };
                try {
                  if (xhr.responseText) {
                    payload = JSON.parse(xhr.responseText);
                  }
                } catch (e) {
                  console.error('[Frontend] Could not parse JSON response:', xhr.responseText);
                  // ถ้า parse JSON ไม่ได้ ให้เช็คคำว่า INFECTED_FILES ใน text ดิบ
                  if (xhr.responseText && xhr.responseText.includes('INFECTED_FILES')) {
                    payload = { code: 'INFECTED_FILES', error: 'ตรวจพบไวรัส' };
                  } else {
                    payload = { error: xhr.responseText || 'Server error' };
                  }
                }

                if (xhr.status >= 200 && xhr.status < 300) {
                  resolve(payload);
                } else {
                  console.log('[Frontend] XHR Error payload:', payload);
                  // ตรวจสอบ INFECTED_FILES จากทุกลู่ทาง
                  const isVirus = (payload && payload.code === 'INFECTED_FILES') || 
                                 (xhr.responseText && xhr.responseText.includes('INFECTED_FILES'));
                  
                  if (isVirus) {
                    payload.code = 'INFECTED_FILES';
                    reject(payload);
                  } else {
                    reject(payload);
                  }
                }
              }
            };

            xhr.addEventListener('error', () => {
              console.error('[Frontend] XHR Network Error');
              reject({ error: 'Network error' });
            });
            
            xhr.open('POST', `/api/conversations/${activeId}/messages/attachments`)
            xhr.send(fd)
          })
        } catch (errPayload) {
          console.log('[Frontend] Catch Block - Received Error Payload:', JSON.stringify(errPayload));
          
          // Force reset states before handling error
          setUploading(false);
          setIsScanning(false);
          setSending(false);

          // ตรวจสอบทั้งกรณีเป็น Object หรือเป็น String ที่มีคำว่า INFECTED_FILES
          const isVirus = (errPayload && errPayload.code === 'INFECTED_FILES') || 
                          (errPayload && errPayload.error && errPayload.error.includes('INFECTED_FILES')) ||
                          (typeof errPayload === 'string' && errPayload.includes('INFECTED_FILES')) ||
                          (typeof errPayload === 'object' && JSON.stringify(errPayload).includes('INFECTED_FILES'));

          if (isVirus) {
            console.log('[Frontend] Virus detected in catch block, calling handleInfectedError');
            handleInfectedError(errPayload || { code: 'INFECTED_FILES' });
            return; 
          }
          throw errPayload;
        }

        console.log('[Frontend] Success response:', responseData);

        setUploading(false)
        setIsScanning(false)
        setScanProgress(100)
        
        setDraft('')
        setSelectedFiles([])
        await pollNewMessages(activeId)
        await loadConversations()
        
      } else {
        const res = await fetch(`/api/conversations/${activeId}/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ body }),
        })

        if (res.ok) {
          const created = await res.json().catch(() => null)
          if (created?.id) {
            setDraft('')
            setMessages((prev) => [...prev, created])
            lastCursorRef.current = new Date(created.createdAt).toISOString()
            await loadConversations()
          }
        }
      }
    } catch (err) {
      console.error('[Frontend] Send error caught:', err)
      setIsScanning(false)
      setUploading(false)
      setUploadProgress(0)

      if (err && ((err.code === 'INFECTED_FILES') || 
                  (err.error && err.error.includes('INFECTED_FILES')) ||
                  (typeof err === 'object' && JSON.stringify(err).includes('INFECTED_FILES')) || 
                  (typeof err === 'string' && err.includes('INFECTED_FILES')))) {
        handleInfectedError(err);
        return;
      }
      
      console.log('[Frontend] Non-virus error occurred:', err);
      toast.error(`ไม่สามารถส่งข้อความได้: ${err?.error || err?.message || 'เกิดข้อผิดพลาด'}`)
    } finally {
      setSending(false)
      setUploading(false)
      setUploadProgress(0)
    }
  }



  const handleFileSelect = (e) => {

    const files = Array.from(e.target.files || [])

    if (!files.length) return

    setSelectedFiles(prev => [...prev, ...files])

    if (fileInputRef.current) fileInputRef.current.value = ''

  }



  const removeFile = (index) => {

    setSelectedFiles(prev => prev.filter((_, i) => i !== index))

  }



  const [showNicknameModal, setShowNicknameModal] = useState(false)
  const [nicknameDraft, setNicknameDraft] = useState('')

  const handleNickname = async () => {
    if (!activeConversation?.otherUser?.id) return
    const currentNickname = activeConversation.nickname || ''
    setNicknameDraft(currentNickname)
    setShowNicknameModal(true)
  }

  const submitNickname = async (nameToSet) => {
    try {
      const res = await fetch(`/api/conversations/${activeId}/nickname`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetUserId: activeConversation.otherUser.id,
          nickname: nameToSet
        })
      })
      if (res.ok) {
        setShowNicknameModal(false)
        await loadConversations()
        toast.success('เปลี่ยนชื่อเล่นเรียบร้อยแล้ว')
      } else {
        toast.error('ไม่สามารถเปลี่ยนชื่อเล่นได้')
      }
    } catch (error) {
      console.error(error)
    }
  }



  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState({ title: '', message: '', onConfirm: () => {} })

  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  const openImageModal = (url) => {
    setSelectedImageUrl(url)
    setShowImageModal(true)
  }

  const downloadFile = async (path, filename) => {
    try {
      const response = await fetch(resolvePath(path))
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download error:', error)
      toast.error('ไม่สามารถดาวน์โหลดไฟล์ได้')
    }
  }

  const handleBlock = async () => {
    if (!activeConversation?.otherUser?.id) return
    const isCurrentlyBlocked = activeConversation.isBlockedByMe
    
    setConfirmConfig({
      title: isCurrentlyBlocked ? 'เลิกบล็อกผู้ใช้' : 'บล็อกผู้ใช้',
      message: isCurrentlyBlocked ? 'คุณแน่ใจหรือไม่ที่จะเลิกบล็อกผู้ใช้นี้?' : 'คุณแน่ใจหรือไม่ที่จะบล็อกผู้ใช้นี้?',
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/conversations/${activeId}/block`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetUserId: activeConversation.otherUser.id })
          })

          if (res.ok) {
            await loadConversations()
            setShowConfirmModal(false)
            toast.success(isCurrentlyBlocked ? 'เลิกบล็อกเรียบร้อยแล้ว' : 'บล็อกเรียบร้อยแล้ว')
          } else {
            toast.error('เกิดข้อผิดพลาดในการดำเนินการ')
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
    setShowConfirmModal(true)
  }

  const handleReport = async () => {
    if (!activeConversation?.otherUser?.id) return
    const reason = prompt('ระบุเหตุผลในการรายงาน:', 'พฤติกรรมไม่เหมาะสม')
    if (!reason) return

    try {
      const res = await fetch(`/api/conversations/${activeId}/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          targetUserId: activeConversation.otherUser.id,
          reason 
        })
      })
      if (res.ok) {
        toast.success('ส่งรายงานเรียบร้อยแล้ว ขอบคุณที่ช่วยดูแลชุมชนของเรา')
      } else {
        toast.error('เกิดข้อผิดพลาดในการส่งรายงาน')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteChat = async () => {
    if (!activeId) return
    
    setConfirmConfig({
      title: 'ลบแชท',
      message: 'คุณแน่ใจหรือไม่ที่จะลบแชทนี้? การลบจะมีผลกับทั้งสองฝ่ายและไม่สามารถกู้คืนได้',
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/conversations/${activeId}`, {
            method: 'DELETE'
          })
          if (res.ok) {
            setActiveId(null)
            loadConversations()
            setShowConfirmModal(false)
            toast.success('ลบแชทเรียบร้อยแล้ว')
          } else {
            toast.error('เกิดข้อผิดพลาดในการลบแชท')
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
    setShowConfirmModal(true)
  }



  return (
    <div className="messages-wrap">
      <ToastContainer />
      <div className="messages-shell liquid-glass">
        <div className="messages-grid">
          <aside className="messages-left">
            <div className="messages-brand">
              <div className="messages-brand-icon">...</div>
              <div className="messages-brand-title">QuickChat</div>
              <button className="messages-brand-more" type="button" aria-label="More">
                <i className="bi bi-three-dots-vertical"></i>
              </button>
            </div>

            <div className="messages-search">
              <i className="bi bi-search"></i>
              <input placeholder="Search User..." value={''} onChange={() => {}} />
            </div>

            <div className="messages-list">
              {loadingConversations ? null : conversations.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`messages-item ${c.id === activeId ? 'active' : ''} ${c.unreadCount > 0 ? 'unread' : ''}`}
                  onClick={() => setActiveId(c.id)}
                >
                  <div className="messages-avatar-wrapper">
                    <div className={`avatar-container ${(c.isBlockedByMe || c.isBlockingMe) ? 'blocked' : ''}`}>
                      <Avatar 
                        src={c.otherUser?.avatarPath} 
                        name={c.otherUser?.name || c.otherUser?.email} 
                        size={42} 
                        className="messages-avatar" 
                      />
                      {(c.isBlockedByMe || c.isBlockingMe) && (
                        <div className="blocked-overlay">
                          <i className="bi bi-slash-circle"></i>
                        </div>
                      )}
                    </div>
                    {c.unreadCount > 0 && <span className="messages-new-badge">{c.unreadCount}</span>}
                  </div>
                  <div className="messages-item-meta">
                    <div className="messages-item-name">{c.otherUser?.name || c.otherUser?.email || '-'}</div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="messages-center">
            <div className="messages-topbar">
              <div className="messages-topbar-left">
                <Avatar 
                  src={activeConversation?.otherUser?.avatarPath} 
                  name={activeConversation?.otherUser?.name || activeConversation?.otherUser?.email} 
                  size={42} 
                  className={`messages-avatar ${(activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe) ? 'blocked' : ''}`} 
                />
                <div>
                  <div className="messages-topbar-name">{activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'}</div>
                  <div className="messages-topbar-sub"> </div>
                </div>
              </div>

              <div className="messages-topbar-right">
                {activeConversation?.otherUser && (
                  <div className="messages-topbar-actions">
                    <button className="topbar-icon-btn" onClick={handleNickname} title="เปลี่ยนชื่อเล่น">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    {!activeConversation.isBlockingMe && (
                      <button 
                        className={`topbar-icon-btn ${activeConversation.isBlockedByMe ? 'active-blocked' : ''}`} 
                        onClick={handleBlock} 
                        title={activeConversation.isBlockedByMe ? "เลิกบล็อก" : "บล็อก"}
                      >
                        <i className={`bi ${activeConversation.isBlockedByMe ? 'bi-check-circle' : 'bi-slash-circle'}`}></i>
                      </button>
                    )}
                    <button className="topbar-icon-btn" onClick={handleReport} title="รายงาน">
                      <i className="bi bi-flag"></i>
                    </button>
                    <button className="topbar-icon-btn btn-danger" onClick={handleDeleteChat} title="ลบแชท">
                      <i className="bi bi-trash"></i>
                    </button>
                    <a 
                      href={`/profile/${activeConversation.otherUser.id}`} 
                      className="topbar-icon-btn" 
                      title="View Profile"
                    >
                      <i className="bi bi-person-circle"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="messages-thread" ref={threadRef}>

              {loadingMessages

                ? null

                : messages.map((m) => {

                    const fromMe = !!meId && m.senderId === meId

                    return (
                      <div key={m.id} className={`messages-bubble-row ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'}`}>
                        <div className={`messages-bubble ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'} ${m.attachments && m.attachments.length > 0 && !m.body ? 'attachment-only' : ''} ${m.isError ? 'error' : ''}`}>
                          {m.attachments && m.attachments.length > 0 && (
                            <div className="messages-bubble-attachments">
                              {m.attachments.map((att) => {
                                const isImage = (att.mimeType && att.mimeType.startsWith('image/')) || 
                                               (att.filename && (
                                                 att.filename.toLowerCase().endsWith('.jpg') || 
                                                 att.filename.toLowerCase().endsWith('.jpeg') || 
                                                 att.filename.toLowerCase().endsWith('.png') || 
                                                 att.filename.toLowerCase().endsWith('.gif') || 
                                                 att.filename.toLowerCase().endsWith('.webp')
                                               ));
                                
                                const isVideo = (att.mimeType && att.mimeType === 'video/mp4') || 
                                               (att.filename && att.filename.toLowerCase().endsWith('.mp4'));
                                 
                                return (
                                  <div key={att.id} className="messages-attachment-item">
                                    {isImage ? (
                                      <div className="messages-attachment-container discord-style image-type">
                                        <div 
                                          className="messages-attachment-img-wrapper"
                                          onClick={() => openImageModal(resolvePath(att.path))}
                                        >
                                          <img src={resolvePath(att.path)} alt={att.filename || 'image'} className="messages-attachment-img" />
                                        </div>
                                        <button 
                                          className="attachment-download-btn visible" 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            downloadFile(att.path, att.filename || 'image.jpg');
                                          }}
                                          title="Download"
                                        >
                                          <i className="bi bi-download"></i>
                                        </button>
                                      </div>
                                    ) : isVideo ? (
                                      <div className="messages-attachment-container discord-style video-type">
                                        <video 
                                          src={resolvePath(att.path)} 
                                          controls 
                                          className="messages-attachment-video"
                                          preload="metadata"
                                        >
                                          Your browser does not support the video tag.
                                        </video>
                                        <button 
                                          className="attachment-download-btn visible" 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            downloadFile(att.path, att.filename || 'video.mp4');
                                          }}
                                          title="Download"
                                        >
                                          <i className="bi bi-download"></i>
                                        </button>
                                      </div>
                                    ) : (
                                      <div className="messages-attachment-container discord-style">
                                        <div 
                                          className="messages-attachment-discord"
                                          onClick={() => downloadFile(att.path, att.filename || 'file')}
                                        >
                                          <div className="discord-file-icon">
                                            {att.filename && (att.filename.toLowerCase().endsWith('.zip') || att.filename.toLowerCase().endsWith('.rar') || att.filename.toLowerCase().endsWith('.7z')) ? (
                                              <i className="bi bi-file-earmark-zip-fill"></i>
                                            ) : (
                                              <i className="bi bi-file-earmark-text-fill"></i>
                                            )}
                                          </div>
                                          <div className="discord-file-info">
                                            <div className="discord-file-name">{att.filename || 'ไฟล์แนบ'}</div>
                                            <div className="discord-file-size">{formatFileSize(att.size || 0)}</div>
                                          </div>
                                        </div>
                                        <button 
                                          className="attachment-download-btn visible" 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            downloadFile(att.path, att.filename || 'file');
                                          }}
                                          title="Download"
                                        >
                                          <i className="bi bi-download"></i>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {m.body && (
                            <div className="messages-bubble-text">
                              {m.body.startsWith('https://media') && m.body.includes('giphy.com') ? (
                                <div className="giphy-message-wrapper">
                                  <img 
                                    src={m.body} 
                                    alt="GIF" 
                                    className="giphy-message-img" 
                                    onClick={() => openImageModal(m.body)}
                                  />
                                </div>
                              ) : (
                                m.body
                              )}
                            </div>
                          )}

                          <div className="messages-bubble-footer">

                            <span className="messages-bubble-time">{formatTime(m.createdAt)}</span>

                            {fromMe && m.readAt && (

                              <span className="messages-seen-status">

                                <i className="bi bi-check2-all"></i> อ่านแล้ว

                              </span>

                            )}

                          </div>

                        </div>

                      </div>

                    )

                  })}



              {loadingMessages ? null : !messages.length ? <div className="messages-empty">ยังไม่มีข้อความ</div> : null}

            </div>



            <div className="messages-composer">
              {activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe ? (
                <div className="blocked-composer-notice liquid-glass">
                  <i className="bi bi-exclamation-circle"></i>
                  <span>
                    {activeConversation.isBlockedByMe 
                      ? 'คุณได้บล็อกผู้ใช้นี้ไว้ ไม่สามารถส่งข้อความได้' 
                      : 'คุณไม่สามารถส่งข้อความถึงผู้ใช้นี้ได้'}
                  </span>
                  {activeConversation.isBlockedByMe && (
                    <button className="unblock-link-btn" onClick={handleBlock}>เลิกบล็อก</button>
                  )}
                </div>
              ) : (
                <>
                  {previewUrls.length > 0 && (
                    <div className="messages-previews">
                      {previewUrls.map((url, idx) => (
                        <div key={url} className="messages-preview-item">
                          {selectedFiles[idx]?.type?.startsWith('image/') ? (
                            <img src={url} alt="" />
                          ) : (
                            <div className="file-preview-icon">
                              <i className="bi bi-file-earmark-text"></i>
                              <span className="file-preview-name">{selectedFiles[idx]?.name}</span>
                            </div>
                          )}
                          <button type="button" onClick={() => removeFile(idx)}>
                            <i className="bi bi-x"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="messages-composer-inner">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      multiple
                      style={{ display: 'none' }}
                    />
                    {(uploading || isScanning) && (
                      <div 
                        className={`upload-progress-bar ${isScanning ? 'scanning' : ''}`} 
                        style={{ width: `${isScanning ? scanProgress : uploadProgress}%` }}
                      ></div>
                    )}
                    <div className="plus-menu-wrapper" ref={plusMenuRef}>
                      <button 
                        className={`messages-icon-btn ${showPlusMenu ? 'active' : ''}`} 
                        type="button" 
                        aria-label="Plus Menu"
                        onClick={() => setShowPlusMenu(!showPlusMenu)}
                        disabled={uploading || isScanning}
                      >
                        <i className={`bi ${uploading || isScanning ? 'bi-hourglass-split' : 'bi-plus-lg'}`}></i>
                      </button>
                      
                      {showPlusMenu && (
                        <div className="plus-menu liquid-glass">
                          <button className="plus-menu-item" onClick={() => { fileInputRef.current?.click(); setShowPlusMenu(false); }}>
                            <i className="bi bi-file-earmark-arrow-up"></i>
                            <span>อัปโหลดไฟล์</span>
                          </button>
                          <button className="plus-menu-item" onClick={() => { setShowEmojiPicker(true); setShowPlusMenu(false); }}>
                            <i className="bi bi-emoji-smile"></i>
                            <span>อิโมจิ</span>
                          </button>
                          <button className="plus-menu-item" onClick={() => { setShowGifPicker(true); setShowPlusMenu(false); }}>
                            <i className="bi bi-filetype-gif"></i>
                            <span>GIF</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {showEmojiPicker && (
                      <div className="emoji-picker-container" ref={emojiPickerRef}>
                        <div className="emoji-picker-inner">
                          <EmojiPicker onEmojiClick={onEmojiClick} theme="dark" />
                        </div>
                      </div>
                    )}

                    {showGifPicker && (
                      <div className="gif-picker-container" ref={gifPickerRef}>
                        <div className="gif-picker-inner liquid-glass">
                          <div className="gif-picker-header">
                            <span>GIPHY</span>
                            <button className="gif-picker-close" onClick={() => setShowGifPicker(false)}>
                              <i className="bi bi-x"></i>
                            </button>
                          </div>
                          <SearchContextManager apiKey={GIPHY_API_KEY}>
                            <GifPickerContent onGifClick={(gif, e) => {
                              e.preventDefault()
                              handleGifSelect(gif.images.fixed_height.url)
                            }} />
                          </SearchContextManager>
                        </div>
                      </div>
                    )}
                    <textarea
                      className="messages-input"
                      placeholder={isScanning ? `กำลังตรวจสอบไวรัส... ${Math.round(scanProgress)}%` : uploading ? `กำลังอัปโหลด... ${uploadProgress}%` : "พิมพ์ข้อความ..."}
                      value={draft}
                      onChange={(e) => {
                        setDraft(e.target.value)
                        e.target.style.height = 'auto'
                        e.target.style.height = `${e.target.scrollHeight}px`
                      }}
                      disabled={uploading || isScanning}
                      rows={1}
                      style={{ height: 'auto', overflow: 'hidden' }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                          e.target.style.height = 'auto'
                        }
                      }}
                    />
                    <button className="messages-send" type="button" onClick={() => handleSend()} aria-label="Send" disabled={sending || uploading || (!draft.trim() && selectedFiles.length === 0)}>
                      <i className="bi bi-send-fill"></i>
                    </button>
                  </div>
                </>
              )}
            </div>

          </section>



          <aside className="messages-right">
            <div className="messages-profile">
              <Avatar 
                src={activeConversation?.otherUser?.avatarPath} 
                name={activeConversation?.otherUser?.name || activeConversation?.otherUser?.email} 
                size={92} 
                className="messages-profile-avatar" 
              />
              <div className="messages-profile-name">{activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'}</div>
              <div className="messages-profile-sub">Hi there, I am using chat app</div>
            </div>
          </aside>
        </div>
      </div>

      {showNicknameModal && (
        <div className="modal-overlay">
          <div className="modal-content liquid-glass">
            <h3 className="modal-title">เปลี่ยนชื่อเล่น</h3>
            <p className="modal-subtitle">ป้อนชื่อเล่นสำหรับ {activeConversation?.otherUser?.name || activeConversation?.otherUser?.email}</p>
            <input 
              type="text" 
              className="modal-input" 
              value={nicknameDraft} 
              onChange={(e) => setNicknameDraft(e.target.value)}
              placeholder="ชื่อเล่น..."
              autoFocus
            />
            <div className="modal-actions">
              <button className="modal-btn modal-btn-secondary" onClick={() => setShowNicknameModal(false)}>ยกเลิก</button>
              <button className="modal-btn modal-btn-outline" onClick={() => submitNickname('')}>คืนค่าชื่อเดิม</button>
              <button className="modal-btn modal-btn-primary" onClick={() => submitNickname(nicknameDraft)}>ตกลง</button>
            </div>
          </div>
        </div>
      )}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content liquid-glass">
            <div className="modal-icon-header">
              <i className="bi bi-exclamation-triangle-fill text-warning"></i>
            </div>
            <h3 className="modal-title">{confirmConfig.title}</h3>
            <p className="modal-subtitle">{confirmConfig.message}</p>
            <div className="modal-actions-grid">
              <button
                className="modal-btn modal-btn-secondary"
                onClick={() => (confirmConfig.onCancel ? confirmConfig.onCancel() : setShowConfirmModal(false))}
              >
                <i className="bi bi-x-lg"></i> ไม่ส่ง
              </button>
              <button className="modal-btn modal-btn-primary danger" onClick={confirmConfig.onConfirm}>
                <i className="bi bi-send-fill"></i> ส่ง
              </button>
            </div>
          </div>
        </div>
      )}
      {showImageModal && (
        <div className="modal-overlay image-modal-overlay" onClick={() => setShowImageModal(false)}>
          <button className="modal-close-btn" onClick={() => setShowImageModal(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImageUrl} alt="Preview" className="image-modal-img" />
            <button 
              className="image-modal-download-btn" 
              onClick={() => {
                const filename = selectedImageUrl.split('/').pop() || 'download.jpg'
                downloadFile(selectedImageUrl, filename)
              }}
            >
              <i className="bi bi-download"></i> ดาวน์โหลดรูปภาพ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

