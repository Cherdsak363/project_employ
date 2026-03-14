'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Avatar from '../../../components/Avatar'

const resolvePath = (raw) => {
  if (!raw || typeof raw !== 'string') return ''
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw
  return raw.startsWith('/') ? raw : `/${raw}`
}

export default function PublicProfilePage({ params }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id
  const router = useRouter()
  const { data: session } = useSession()
  
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [creatingChat, setCreatingChat] = useState(false)

  useEffect(() => {
    if (!id) return
    
    const fetchProfile = async () => {
      try {
        const res = await fetch(`/api/profile/${id}`, { cache: 'no-store' })
        if (!res.ok) {
          if (res.status === 404) {
            setUser(null)
          }
          setLoading(false)
          return
        }
        const data = await res.json()
        setUser(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  const handleChat = async () => {
    if (!session) {
      router.push('/signin')
      return
    }
    if (!id || id === session?.user?.id) return
    if (creatingChat) return
    setCreatingChat(true)

    try {
      const res = await fetch('/api/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otherUserId: id }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => null)
        alert(err?.error || 'ไม่สามารถเริ่มการสนทนาได้')
        return
      }

      const data = await res.json().catch(() => null)
      const convId = data?.id
      if (convId) {
        router.push(`/messages?c=${encodeURIComponent(convId)}`)
      }
    } catch (error) {
      console.error('Chat error:', error)
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ')
    } finally {
      setCreatingChat(false)
    }
  }

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="profile-error">
        <h2>ไม่พบผู้ใช้งาน</h2>
        <button onClick={() => router.back()}>กลับไปก่อนหน้า</button>
      </div>
    )
  }

  const isMe = session?.user?.id === user.id

  return (
    <div className="profile-public-wrap">
      <div className="profile-main-container">
        {/* Banner Section inside Frame */}
        <div className="profile-banner-container">
          {user.bannerPath ? (
            <img src={resolvePath(user.bannerPath)} alt="Banner" className="profile-banner-img" />
          ) : (
            <div className="profile-banner-placeholder"></div>
          )}
        </div>

        <div className="profile-header-section">
          {/* Profile Header Card */}
          <div className="profile-header-card liquid-glass">
            <div className="profile-header-main">
              <div className="profile-avatar-large">
                <Avatar 
                  src={user.avatarPath} 
                  name={user.name || user.email} 
                  size={140} 
                  className="avatar-img" 
                />
              </div>
              <div className="profile-info-main">
                <h1 className="profile-name-text">{user.name || 'Anonymous'}</h1>
                <p className="profile-email-text">{user.email}</p>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-value">{user.arts?.length || 0}</span>
                    <span className="stat-label">ผลงาน</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">0</span>
                    <span className="stat-label">ผู้ติดตาม</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-header-actions">
                {isMe ? (
                  <button 
                    className="profile-btn profile-btn-edit" 
                    onClick={() => router.push('/edit-profile')}
                  >
                    <i className="bi bi-pencil"></i> แก้ไขโปรไฟล์
                  </button>
                ) : (
                  <button 
                    className="profile-btn profile-btn-chat" 
                    onClick={handleChat}
                    disabled={creatingChat}
                  >
                    <i className="bi bi-chat-dots-fill"></i> {creatingChat ? 'กำลังเชื่อมต่อ...' : 'ส่งข้อความ'}
                  </button>
                )}
              </div>
            </div>
            
            {user.socialLinks && user.socialLinks.length > 0 && (
              <div className="profile-socials">
                {user.socialLinks.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                    <i className={`bi bi-${link.type === 'facebook' ? 'facebook' : link.type === 'instagram' ? 'instagram' : 'link-45deg'}`}></i>
                    {link.type}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Section */}
          <div className="profile-portfolio-section">
            <h2 className="section-title-modern">ผลงานทั้งหมด</h2>
            {user.arts && user.arts.length > 0 ? (
              <div className="profile-arts-grid">
                {user.arts.map((art) => (
                  <div key={art.id} className="profile-art-card liquid-glass">
                    <div className="art-card-img-wrap">
                      <img src={resolvePath(art.image)} alt={art.title} className="art-card-img" />
                      {art.price && <div className="art-card-price">{art.price.toLocaleString()} ฿</div>}
                    </div>
                    <div className="art-card-info">
                      <h3 className="art-title-text">{art.title}</h3>
                      {art.description && <p className="art-desc-text line-clamp-2">{art.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="profile-empty-portfolio">
                <i className="bi bi-image"></i>
                <p>ยังไม่มีผลงานที่แสดง</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
