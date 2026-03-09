'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Avatar from '../../components/Avatar'

export default function Hire() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const MAX_ATTACHMENTS = 5

  const [jobs, setJobs] = useState([])
  const [jobsLoading, setJobsLoading] = useState(true)
  const [jobsError, setJobsError] = useState('')

  const [showPostForm, setShowPostForm] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    style: '',
    budgetMin: '',
    budgetMax: '',
    deadline: '',
    contact: ''
  })

  const [attachments, setAttachments] = useState([])
  const [submitting, setSubmitting] = useState(false)

  const formRef = useRef(null)
  const postSectionRef = useRef(null)
  const headerRef = useRef(null)
  const openScrollTimeoutRef = useRef(null)
  const replaceFileInputRef = useRef(null)
  const [profile, setProfile] = useState(null)
  const [replaceIndex, setReplaceIndex] = useState(-1)
  const [creatingChat, setCreatingChat] = useState(false)

  const handleChat = useCallback(async (targetUserId) => {
    if (!session) {
      router.push('/signin')
      return
    }
    if (!targetUserId) return
    if (creatingChat) return
    setCreatingChat(true)

    try {
      const res = await fetch('/api/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otherUserId: targetUserId }),
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
  }, [creatingChat, router, session])

  useEffect(() => {
    let cancelled = false

    const loadProfile = async () => {
      try {
        const res = await fetch('/api/profile', { cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json().catch(() => null)
        if (!data?.user) return
        if (!cancelled) setProfile(data.user)
      } catch {
        // ignore
      }
    }

    if (status === 'authenticated' && session?.user?.id) loadProfile()
    else setProfile(null)

    return () => {
      cancelled = true
    }
  }, [session?.user?.id, status])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        setJobsLoading(true)
        setJobsError('')
        const res = await fetch('/api/jobs', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (!cancelled) setJobs(Array.isArray(data) ? data : [])
      } catch {
        if (!cancelled) setJobsError('โหลดงานจ้างไม่สำเร็จ')
      } finally {
        if (!cancelled) setJobsLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  const resolveAvatarSrc = (raw) => {
    if (!raw || typeof raw !== 'string') return '/images/auth-illustration.png'
    const normalized = raw.startsWith('http://') || raw.startsWith('https://')
      ? raw
      : raw.startsWith('/')
        ? raw
        : `/${raw}`
    const version = normalized.split('/').pop() || 'avatar'
    const sep = normalized.includes('?') ? '&' : '?'
    return `${normalized}${sep}v=${encodeURIComponent(version)}`
  }

  const formatBudgetRange = (min, max) => {
    const mn = Number.isFinite(min) ? min : null
    const mx = Number.isFinite(max) ? max : null
    if (mn !== null && mx !== null) return `${mn.toLocaleString('th-TH')} - ${mx.toLocaleString('th-TH')} บาท`
    if (mn !== null) return `เริ่มต้น ${mn.toLocaleString('th-TH')} บาท`
    if (mx !== null) return `ไม่เกิน ${mx.toLocaleString('th-TH')} บาท`
    return 'ยังไม่ระบุ'
  }

  const formatEmailShort = (value) => {
    if (!value || typeof value !== 'string') return ''
    const v = value.trim()
    const at = v.indexOf('@')
    if (at <= 0) return v
    return v.slice(0, at)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    const imageFiles = files.filter((f) => typeof f?.type === 'string' && f.type.startsWith('image/'))

    if (imageFiles.length === 0) {
      setAttachments([])
      return
    }

    setAttachments(imageFiles.slice(0, MAX_ATTACHMENTS))
  }

  const handleReplaceFile = (e) => {
    const file = e.target.files?.[0]
    if (!file || replaceIndex < 0) return
    if (typeof file.type !== 'string' || !file.type.startsWith('image/')) return

    setAttachments((prev) => {
      if (!Array.isArray(prev) || replaceIndex >= prev.length) return prev
      const next = [...prev]
      next[replaceIndex] = file
      return next
    })

    setReplaceIndex(-1)
    if (replaceFileInputRef.current) replaceFileInputRef.current.value = ''
  }

  const deleteAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const [localPreviewUrls, setLocalPreviewUrls] = useState([])
  const [previewIndex, setPreviewIndex] = useState(0)

  useEffect(() => {
    setPreviewIndex(0)

    if (!attachments?.length) {
      setLocalPreviewUrls([])
      return
    }

    const urls = attachments
      .filter((f) => typeof f?.type === 'string' && f.type.startsWith('image/'))
      .slice(0, MAX_ATTACHMENTS)
      .map((f) => URL.createObjectURL(f))

    setLocalPreviewUrls(urls)

    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u))
    }
  }, [attachments])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (submitting) return
    setSubmitting(true)

    try {
      const payload = {
        ...formData,
        budgetMin: formData.budgetMin ? Number(formData.budgetMin) : null,
        budgetMax: formData.budgetMax ? Number(formData.budgetMax) : null,
      }

      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const err = await response.json().catch(() => null)
        alert(err?.error || 'เกิดข้อผิดพลาด')
        return
      }

      const createdJob = await response.json().catch(() => null)
      const jobId = createdJob?.id

      if (jobId && attachments.length) {
        const fd = new FormData()
        for (const f of attachments) fd.append('files', f)

        const uploadRes = await fetch(`/api/jobs/${jobId}/attachments`, {
          method: 'POST',
          body: fd,
        })

        if (!uploadRes.ok) {
          alert('สร้างงานสำเร็จ แต่แนบไฟล์ไม่สำเร็จ')
        }
      }

      if (jobId) {
        window.location.href = `/jobs/${jobId}`
        return
      }

      alert('โพสต์งานสำเร็จ!')
      setFormData({
        title: '',
        description: '',
        category: '',
        style: '',
        budgetMin: '',
        budgetMax: '',
        deadline: '',
        contact: ''
      })
      setAttachments([])
    } finally {
      setSubmitting(false)
    }
  }

  const previewBudget = (() => {
    const min = formData.budgetMin ? Number(formData.budgetMin) : null
    const max = formData.budgetMax ? Number(formData.budgetMax) : null
    if (Number.isFinite(min) && Number.isFinite(max)) return `${min.toLocaleString()} - ${max.toLocaleString()} บาท`
    if (Number.isFinite(min)) return `เริ่มต้น ${min.toLocaleString()} บาท`
    if (Number.isFinite(max)) return `ไม่เกิน ${max.toLocaleString()} บาท`
    return 'ยังไม่ระบุ'
  })()

  const previewDeadline = (() => {
    if (!formData.deadline) return 'ยังไม่ระบุ'
    const d = new Date(formData.deadline)
    if (Number.isNaN(d.getTime())) return 'ยังไม่ระบุ'
    return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
  })()
 
  return (
    <section className="hire-wrap">
      <div className="hire-shell liquid-glass">
        <div className="hire-head" ref={headerRef}>
          <h2 className="hire-title">งานจ้างล่าสุด</h2>
          <a
            href="#"
            className="hire-fab"
            onClick={(e) => {
              e.preventDefault()

              if (openScrollTimeoutRef.current) {
                clearTimeout(openScrollTimeoutRef.current)
                openScrollTimeoutRef.current = null
              }

              setShowPostForm(true)
              openScrollTimeoutRef.current = setTimeout(() => {
                postSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                openScrollTimeoutRef.current = null
              }, 0)
            }}
          >
            จ้างวาดภาพ
          </a>
        </div>

        {jobsLoading && <p style={{ textAlign: 'center' }}>กำลังโหลด...</p>}
        {!jobsLoading && jobsError && <p style={{ textAlign: 'center' }}>{jobsError}</p>}

        {!jobsLoading && !jobsError && jobs.length === 0 && (
          <p style={{ textAlign: 'center' }}>ยังไม่มีงานจ้างที่โพสต์</p>
        )}

        {!jobsLoading && !jobsError && jobs.length > 0 && (
          <div className="art-feed">
            {jobs.map((job) => {
              const id = job?.id
              if (!id) return null

              const clientName = (typeof job?.client?.name === 'string' ? job.client.name.trim() : '')
                || job?.client?.email
                || 'Client'
              const clientAvatar = resolveAvatarSrc(job?.client?.avatarPath)

              const previewImage = (() => {
                const firstPath = Array.isArray(job?.attachments) && job.attachments.length
                  ? job.attachments[0]?.path
                  : null
                if (!firstPath || typeof firstPath !== 'string') return ''
                return firstPath.startsWith('/') ? firstPath : `/${firstPath}`
              })()

              const category = typeof job?.category === 'string' ? job.category.trim() : ''
              const style = typeof job?.style === 'string' ? job.style.trim() : ''
              const budgetText = formatBudgetRange(job?.budgetMin, job?.budgetMax)

              return (
                <article key={id} className="art-card">
                  <div className="art-card__header">
                    <Avatar 
                      src={job?.client?.avatarPath} 
                      name={clientName} 
                      size={40} 
                      className="art-card__avatar-img" 
                    />
                    <div className="art-card__meta">
                      <div className="art-card__name">{clientName}</div>
                      <div className="art-card__sub">{formatEmailShort(job?.client?.email || '')}</div>
                    </div>
                  </div>

                  <div className="art-card__image-wrap">
                    {previewImage ? (
                      <img className="art-card__image" src={previewImage} alt={job?.title || ''} />
                    ) : (
                      <div className="art-card__image art-card__image--placeholder" />
                    )}
                  </div>

                  <div className="art-card__body">
                    <h3 className="art-card__title">{job?.title || 'ไม่มีหัวข้องาน'}</h3>
                    <p className="art-card__desc">{job?.description || '-'}</p>
                  </div>

                  <div className="art-card__footer">
                    <div className="art-card__actions">
                      {category && <span className="art-pill">{category}</span>}
                      {style && <span className="art-pill">{style}</span>}
                      <span className="art-pill art-pill--price">{budgetText}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: '10px' }}>
                      <a
                        className="art-pill art-pill--primary"
                        href={`/jobs/${encodeURIComponent(id)}`}
                        style={{ flex: 1, textAlign: 'center', padding: '12px 14px' }}
                      >
                        ดูงาน
                      </a>
                      {session?.user?.email !== job?.client?.email ? (
                        <button 
                          className="art-pill" 
                          onClick={() => handleChat(job?.client?.id)}
                          disabled={creatingChat}
                          style={{ flex: 1, cursor: 'pointer', padding: '12px 14px' }}
                        >
                          ติดต่อ
                        </button>
                      ) : (
                        <span className="art-pill art-pill--disabled" style={{ flex: 1, textAlign: 'center', padding: '12px 14px' }}>
                          งานของคุณ
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {showPostForm && (
          <>
            <div ref={postSectionRef} style={{ marginTop: 24 }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <h2 className="hire-title" style={{ marginTop: 10, marginBottom: 10, textAlign: 'left' }}>โพสต์งานจ้างวาดภาพ</h2>
              <button
                type="button"
                className="nav-btn"
                onClick={() => {
                  if (openScrollTimeoutRef.current) {
                    clearTimeout(openScrollTimeoutRef.current)
                    openScrollTimeoutRef.current = null
                  }
                  setShowPostForm(false)
                  setTimeout(() => {
                    headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 0)
                }}
                style={{ width: 'auto' }}
              >
                ปิด
              </button>
            </div>

            <div className="hire-grid">
              <div className="hire-card">
                <form className="hire-form" onSubmit={handleSubmit} ref={formRef}>
              <label>หัวข้อ</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="เช่น วาดภาพโปรไฟล์สไตล์อนิเมะ" />

              <label>รายละเอียดงาน</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="อธิบายสิ่งที่ต้องการ, ขนาดงาน, reference, เงื่อนไข ฯลฯ" rows={6}></textarea>

              <div className="hire-two">
                <div>
                  <label>หมวดหมู่ / ประเภทงาน</label>
                  <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="เช่น โปรไฟล์, ปกนิยาย, Fanart" />
                </div>

                <div>
                  <label>สไตล์</label>
                  <input type="text" name="style" value={formData.style} onChange={handleChange} placeholder="เช่น อนิเมะ, มินิมอล, สีไม้" />
                </div>
              </div>

              <label>งบประมาณ (บาท)</label>
              <div className="hire-two">
                <input type="number" name="budgetMin" value={formData.budgetMin} onChange={handleChange} min={0} placeholder="ต่ำสุด" />
                <input type="number" name="budgetMax" value={formData.budgetMax} onChange={handleChange} min={0} placeholder="สูงสุด" />
              </div>

              <div className="hire-two">
                <div>
                  <label>กำหนดส่ง</label>
                  <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
                </div>

                <div>
                  <label>ข้อมูลติดต่อ</label>
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder="เช่น Line / Email / เบอร์โทร" />
                </div>
              </div>

              <label>ไฟล์แนบ (แนบได้หลายไฟล์)</label>
              <input type="file" multiple accept="image/*" onChange={handleFileChange} />

              <input
                ref={replaceFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleReplaceFile}
                style={{ display: 'none' }}
              />

              {localPreviewUrls.length > 0 && (
                <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 10 }}>
                  {localPreviewUrls.map((src, idx) => (
                    <div key={src} style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.10)' }}>
                      <img
                        src={src}
                        alt=""
                        style={{ width: '100%', height: 76, objectFit: 'cover', display: 'block' }}
                      />

                      <div style={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 6 }}>
                        <button
                          type="button"
                          className="nav-btn"
                          aria-label="Edit"
                          onClick={() => {
                            setReplaceIndex(idx)
                            replaceFileInputRef.current?.click()
                          }}
                          style={{ width: 34, height: 34, padding: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 16, 32, 0.72)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 10px 24px rgba(0,0,0,0.35)', borderRadius: 999 }}
                        >
                          <i className="bi bi-pencil" />
                        </button>
                        <button
                          type="button"
                          className="nav-btn"
                          aria-label="Delete"
                          onClick={() => deleteAttachment(idx)}
                          style={{ width: 34, height: 34, padding: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 16, 32, 0.72)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 10px 24px rgba(0,0,0,0.35)', borderRadius: 999 }}
                        >
                          <i className="bi bi-trash" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button type="submit" disabled={submitting}>
                {submitting ? 'กำลังโพสต์...' : 'โพสต์งาน'}
              </button>
                </form>
              </div>

              <aside className="hire-preview">
                <div className="hire-preview-card liquid-glass">
                  <div className="hire-preview-head">ตัวอย่างโพสต์</div>

                  <div className="hire-preview-body">
                    <article className="art-card" style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
                      <div className="art-card__header">
                        <img
                          className="art-card__avatar-img"
                          src={profile?.avatarPath || session?.user?.avatarPath || '/images/auth-illustration.png'}
                          alt=""
                          onError={(e) => {
                            if (e.currentTarget.dataset.fallbackApplied) return
                            e.currentTarget.dataset.fallbackApplied = '1'
                            e.currentTarget.src = '/images/auth-illustration.png'
                          }}
                        />
                        <div className="art-card__meta">
                          <div className="art-card__name">{profile?.name || session?.user?.name || session?.user?.email || '-'}</div>
                          <div className="art-card__sub">{formatEmailShort(profile?.email || session?.user?.email || '')}</div>
                        </div>
                      </div>

                      <div className="art-card__image-wrap">
                        {localPreviewUrls.length ? (
                          <img className="art-card__image" src={localPreviewUrls[Math.min(previewIndex, localPreviewUrls.length - 1)]} alt="" />
                        ) : (
                          <div className="art-card__image art-card__image--placeholder" />
                        )}
                      </div>

                      {localPreviewUrls.length > 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 10 }}>
                          <button
                            type="button"
                            className="nav-btn"
                            onClick={() => setPreviewIndex((i) => (i - 1 + localPreviewUrls.length) % localPreviewUrls.length)}
                            style={{ width: 'auto' }}
                          >
                            ก่อนหน้า
                          </button>
                          <div style={{ opacity: 0.85, fontSize: 13 }}>
                            {previewIndex + 1}/{localPreviewUrls.length}
                          </div>
                          <button
                            type="button"
                            className="nav-btn"
                            onClick={() => setPreviewIndex((i) => (i + 1) % localPreviewUrls.length)}
                            style={{ width: 'auto' }}
                          >
                            ถัดไป
                          </button>
                        </div>
                      )}

                      <div className="art-card__body">
                        <h3 className="art-card__title">
                          {formData.title?.trim() ? formData.title.trim() : 'หัวข้องานของคุณจะขึ้นตรงนี้'}
                        </h3>
                        <p className="art-card__desc">
                          {formData.description?.trim()
                            ? formData.description.trim()
                            : 'รายละเอียดงานจะขึ้นตรงนี้ เพื่อให้ศิลปินเข้าใจสิ่งที่คุณต้องการ'}
                        </p>
                      </div>

                      <div className="art-card__footer">
                        <div className="art-card__actions">
                          {formData.category?.trim() && <span className="art-pill">{formData.category.trim()}</span>}
                          {formData.style?.trim() && <span className="art-pill">{formData.style.trim()}</span>}
                          <span className="art-pill art-pill--price">{previewBudget}</span>
                        </div>

                        <span
                          className="art-pill art-pill--primary"
                          style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: 10, padding: '12px 14px' }}
                        >
                          ดูงาน
                        </span>
                        <div style={{ marginTop: 10, opacity: 0.9, fontSize: 13 }}>
                          {attachments.length ? `${attachments.length} ไฟล์แนบ` : 'ยังไม่ได้แนบไฟล์'}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
