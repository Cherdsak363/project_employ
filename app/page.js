 'use client'

 import { useEffect, useState, useCallback } from 'react'
 import { useRouter } from 'next/navigation'
 import { useSession } from 'next-auth/react'
 import Avatar from '../components/Avatar'

 const formatPrice = (price) => {
   if (price === null || price === undefined || Number.isNaN(Number(price))) return null
   return new Intl.NumberFormat('th-TH').format(Number(price))
 }

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

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const [arts, setArts] = useState([])
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [jobsLoading, setJobsLoading] = useState(true)
  const [jobsError, setJobsError] = useState('')
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

    ;(async () => {
      try {
        setLoading(true)
        setError('')
        const res = await fetch('/api/arts')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (!cancelled) setArts(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!cancelled) setError('โหลดผลงานไม่สำเร็จ')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

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
      } catch (e) {
        if (!cancelled) setJobsError('โหลดงานจ้างไม่สำเร็จ')
      } finally {
        if (!cancelled) setJobsLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h2>ยินดีต้อนรับสู่เว็บไซต์จ้างงานและขายงานศิลปะ</h2>
          <p>จ้างศิลปินวาดภาพตามความต้องการ หรือขายรูปของคุณเอง</p>
          <a href="/hire" className="btn">เริ่มจ้างงาน</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>งานจ้างล่าสุด</h2>

          {jobsLoading && <p>กำลังโหลด...</p>}
          {!jobsLoading && jobsError && <p>{jobsError}</p>}
          {!jobsLoading && !jobsError && jobs.length === 0 && <p>ยังไม่มีงานจ้างที่โพสต์</p>}

          {!jobsLoading && !jobsError && jobs.length > 0 && (
            <div className="art-feed art-feed--row">
              {jobs.slice(0, 4).map((job) => {
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
                        <div className="art-card__sub">{job?.contact || ''}</div>
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
                        <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: '10px' }}>
                          <a className="art-pill art-pill--primary" href={`/jobs/${encodeURIComponent(id)}`} style={{ flex: 1, textAlign: 'center' }}>ดูงาน</a>
                          {session?.user?.email !== job?.client?.email ? (
                            <button 
                              className="art-pill" 
                              onClick={() => handleChat(job?.client?.id)}
                              disabled={creatingChat}
                              style={{ flex: 1, cursor: 'pointer' }}
                            >
                              ติดต่อ
                            </button>
                          ) : (
                            <span className="art-pill art-pill--disabled" style={{ flex: 1, textAlign: 'center' }}>
                              งานของคุณ
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>ผลงานศิลป์ล่าสุด</h2>

          {loading && <p>กำลังโหลด...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && arts.length === 0 && <p>ยังไม่มีผลงานที่โพสต์</p>}

          {!loading && !error && arts.length > 0 && (
            <div className="art-feed">
              {arts.map((art) => {
                const id = art.id ?? art._id
                const priceText = formatPrice(art.price)
                const title = art.title || 'ไม่มีชื่อผลงาน'
                const description = art.description || ''
                const contact = art.contact || ''
                const image = art.image || ''

                const artistName = (typeof art?.artist?.name === 'string' ? art.artist.name.trim() : '')
                  || art?.artist?.email
                  || 'Artist'

                const avatarSrc = resolveAvatarSrc(art?.artist?.avatarPath)

                return (
                  <article key={id} className="art-card">
                    <div className="art-card__header">
                      <Avatar 
                        src={art?.artist?.avatarPath} 
                        name={artistName} 
                        size={40} 
                        className="art-card__avatar-img" 
                      />
                      <div className="art-card__meta">
                        <div className="art-card__name">{artistName}</div>
                        <div className="art-card__sub">{contact}</div>
                      </div>
                    </div>

                    <div className="art-card__image-wrap">
                      {image ? (
                        <img className="art-card__image" src={image} alt={title} />
                      ) : (
                        <div className="art-card__image art-card__image--placeholder" />
                      )}
                    </div>

                    <div className="art-card__body">
                      <h3 className="art-card__title">{title}</h3>
                      {description ? (
                        <p className="art-card__desc">{description}</p>
                      ) : (
                        <p className="art-card__desc art-card__desc--muted">ไม่มีคำอธิบาย</p>
                      )}
                    </div>

                    <div className="art-card__footer">
                      <div className="art-card__actions">
                        <a className="art-pill art-pill--primary" href={`/arts/${id}`}>ดู</a>
                        {session?.user?.email !== art?.artist?.email ? (
                          <button 
                            className="art-pill" 
                            onClick={() => handleChat(art?.artist?.id)}
                            disabled={creatingChat}
                            style={{ cursor: 'pointer' }}
                          >
                            ติดต่อ
                          </button>
                        ) : (
                          <span className="art-pill art-pill--disabled">ผลงานของคุณ</span>
                        )}
                        {priceText && (
                          <span className="art-pill art-pill--price">{priceText} บาท</span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
