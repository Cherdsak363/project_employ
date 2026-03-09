'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Avatar from '../../../components/Avatar'

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()

  const { data: session } = useSession()
  const jobId = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : ''

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [creatingChat, setCreatingChat] = useState(false)
  const [selectedAttachment, setSelectedAttachment] = useState(0)

  const client = job?.client || null

  const resolvePath = (raw) => {
    if (!raw || typeof raw !== 'string') return ''
    if (raw.startsWith('http://') || raw.startsWith('https://')) return raw
    return raw.startsWith('/') ? raw : `/${raw}`
  }

  const formatEmailShort = (value) => {
    if (!value || typeof value !== 'string') return ''
    const v = value.trim()
    const at = v.indexOf('@')
    if (at <= 0) return v
    return v.slice(0, at)
  }

  const budgetText = useMemo(() => {
    const min = Number.isFinite(job?.budgetMin) ? job.budgetMin : null
    const max = Number.isFinite(job?.budgetMax) ? job.budgetMax : null
    if (min !== null && max !== null) return `${min.toLocaleString()} - ${max.toLocaleString()} บาท`
    if (min !== null) return `เริ่มต้น ${min.toLocaleString()} บาท`
    if (max !== null) return `ไม่เกิน ${max.toLocaleString()} บาท`
    return 'ยังไม่ระบุ'
  }, [job?.budgetMin, job?.budgetMax])

  const deadlineText = useMemo(() => {
    if (!job?.deadline) return 'ยังไม่ระบุ'
    const d = new Date(job.deadline)
    if (Number.isNaN(d.getTime())) return 'ยังไม่ระบุ'
    return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
  }, [job?.deadline])

  useEffect(() => {
    if (!jobId) return
    let cancelled = false

    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/jobs/${jobId}`, { cache: 'no-store' })
        if (!res.ok) {
          if (!cancelled) setJob(null)
          return
        }
        const data = await res.json().catch(() => null)
        if (!cancelled) {
          setJob(data)
          setSelectedAttachment(0)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [jobId])

  const handleChat = useCallback(async () => {
    if (!session) {
      router.push('/signin')
      return
    }
    if (!client?.id) return
    if (creatingChat) return
    setCreatingChat(true)

    try {
      const res = await fetch('/api/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otherUserId: client.id }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => null)
        alert(err?.error || 'ไม่สามารถเริ่มการสนทนาได้')
        return
      }

      const data = await res.json().catch(() => null)
      const id = data?.id
      if (typeof id === 'string' && id) {
        router.push(`/messages?c=${encodeURIComponent(id)}`)
      }
    } catch (error) {
      console.error('Chat error:', error)
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ')
    } finally {
      setCreatingChat(false)
    }
  }, [client?.id, creatingChat, router, session])

  const imageAttachments = useMemo(() => {
    const atts = Array.isArray(job?.attachments) ? job.attachments : []
    return atts
      .map((a) => {
        const src = resolvePath(a?.path)
        const mime = typeof a?.mimeType === 'string' ? a.mimeType : ''
        return { id: a?.id, src, mime, filename: a?.filename }
      })
      .filter((a) => a.src && (!a.mime || a.mime.startsWith('image/')))
  }, [job?.attachments])

  const selectedImage = imageAttachments.length
    ? imageAttachments[Math.min(selectedAttachment, imageAttachments.length - 1)]
    : null

  return (
    <section className="job2-wrap">
      <div className="job2-shell liquid-glass">
        {/* ส่วนบน: หัวข้อและ Metadata */}
        <div className="job2-hero">
          <div className="job2-hero-main">
            <div className="job2-title">{loading ? 'กำลังโหลด...' : job?.title || 'ไม่พบงาน'}</div>

            {job && (
              <div className="job2-meta">
                <div className="job2-chip">
                  <span className="job2-chip-label">งบประมาณ</span>
                  <span className="job2-chip-value">{budgetText}</span>
                </div>
                <div className="job2-chip">
                  <span className="job2-chip-label">กำหนดส่ง</span>
                  <span className="job2-chip-value">{deadlineText}</span>
                </div>
                <div className="job2-chip">
                  <span className="job2-chip-label">หมวดหมู่</span>
                  <span className="job2-chip-value">{job?.category || 'ยังไม่ระบุ'}</span>
                </div>
                <div className="job2-chip">
                  <span className="job2-chip-label">สไตล์</span>
                  <span className="job2-chip-value">{job?.style || 'ยังไม่ระบุ'}</span>
                </div>
              </div>
            )}
          </div>

          <div className="job2-hero-side">
            <div className="job2-client">
              <div className="job2-client-title">ผู้ว่าจ้าง</div>
              <div className="job2-user">
                <Avatar 
                  src={client?.avatarPath} 
                  name={client?.name || client?.email} 
                  size={56} 
                  className="job2-user-avatar" 
                />
                <div>
                  <div className="job2-user-name">{client?.name || client?.email || '-'}</div>
                  <div className="job2-user-sub">{formatEmailShort(client?.email || '')}</div>
                </div>
              </div>
            </div>

            <div className="job2-cta">
              {session?.user?.email !== client?.email && (
                <>
                  <button
                    className="job2-cta-primary"
                    type="button"
                    onClick={handleChat}
                    disabled={!client?.id || creatingChat}
                  >
                    <i className="bi bi-chat-fill"></i>
                    <span>{creatingChat ? 'กำลังเปิดแชท...' : 'Chat กับผู้ว่าจ้าง'}</span>
                  </button>
                  <div className="job2-cta-note">กดปุ่มเพื่อเริ่มคุยและตกลงรายละเอียดงาน</div>
                </>
              )}
              {session?.user?.email === client?.email && (
                <div className="job2-cta-note">คุณเป็นเจ้าของงานนี้</div>
              )}
            </div>
          </div>
        </div>

        {/* ส่วนเนื้อหาหลัก */}
        <div className="job2-main-grid">
          <div className="job2-content-area">
            {!loading && job && imageAttachments.length > 0 && (
              <div className="job2-media-container">
                <div className="job2-media-main">
                  <img src={selectedImage?.src} alt={selectedImage?.filename || ''} />
                </div>
                
                {imageAttachments.length > 1 && (
                  <div className="job2-thumb-grid">
                    {imageAttachments.slice(0, 6).map((a, idx) => (
                      <button
                        key={a.id || a.src}
                        type="button"
                        onClick={() => setSelectedAttachment(idx)}
                        className={`job2-thumb-btn ${idx === selectedAttachment ? 'active' : ''}`}
                      >
                        <img src={a.src} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {job && (
              <div className="job2-details-card">
                <div className="job2-section-title">รายละเอียด</div>
                <div className="job2-desc">{job?.description || '-'}</div>
              </div>
            )}
          </div>
        </div>

        {!loading && !job && (
          <div className="job2-empty">
            <div className="job2-section-title">ไม่พบงาน</div>
            <div className="job2-desc">ลิงก์นี้อาจไม่ถูกต้อง หรือ งานถูกลบไปแล้ว</div>
            <button type="button" className="job2-cta-primary" onClick={() => router.push('/hire')} style={{ marginTop: 20 }}>
              <i className="bi bi-arrow-left"></i>
              <span>กลับไปหน้ารวมงาน</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
