'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Avatar from '../../components/Avatar'

export default function Portfolio() {
  const router = useRouter()
  const { data: session } = useSession()
  const [arts, setArts] = useState([])
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
    fetch('/api/arts')
      .then(res => res.json())
      .then(setArts)
  }, [])

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>ผลงาน</h2>
          <div className="art-feed">
            {arts.map(art => {
              const id = art.id || art._id
              const artistName = art?.artist?.name || art?.artist?.email || 'Artist'
              
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
                      <div className="art-card__sub">{art.contact || ''}</div>
                    </div>
                  </div>

                  <div className="art-card__image-wrap">
                    <img className="art-card__image" src={art.image} alt={art.title} />
                  </div>

                  <div className="art-card__body">
                    <h3 className="art-card__title">{art.title}</h3>
                    <p className="art-card__desc">{art.description || '-'}</p>
                  </div>

                  <div className="art-card__footer">
                    <div className="art-card__actions">
                      {session?.user?.email !== art?.artist?.email ? (
                        <button 
                          className="art-pill art-pill--primary" 
                          onClick={() => handleChat(art?.artist?.id)}
                          disabled={creatingChat}
                          style={{ cursor: 'pointer', flex: 1 }}
                        >
                          ติดต่อศิลปิน
                        </button>
                      ) : (
                        <span className="art-pill art-pill--disabled" style={{ flex: 1, textAlign: 'center' }}>
                          ผลงานของคุณ
                        </span>
                      )}
                      {art.price && (
                        <span className="art-pill art-pill--price">{art.price.toLocaleString()} บาท</span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
