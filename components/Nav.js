'use client'

import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import Avatar from './Avatar'

export default function Nav() {
  const { data: session, status } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const navLinksRef = useRef(null)

  const isLoadingSession = status === 'loading'
  const isAuthenticated = status === 'authenticated'

  const [profile, setProfile] = useState(null)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (status !== 'authenticated' || !session?.user?.id) return

    const checkNewMessages = async () => {
      try {
        const res = await fetch('/api/conversations', { cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json().catch(() => [])
        const list = Array.isArray(data) ? data : []
        
        // Sum up all unread counts from all conversations
        const totalUnread = list.reduce((sum, c) => sum + (c.unreadCount || 0), 0)
        setUnreadCount(totalUnread)
      } catch (error) {
        console.error('Error checking new messages:', error)
      }
    }

    checkNewMessages()
    const interval = setInterval(checkNewMessages, 10000)
    return () => clearInterval(interval)
  }, [status, session?.user?.id])

  const refreshProfile = async () => {
    try {
      const res = await fetch('/api/profile', { cache: 'no-store' })
      if (!res.ok) return
      const data = await res.json().catch(() => null)
      if (!data?.user) return
      setProfile(data.user)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    let cancelled = false

    const loadProfile = async () => {
      try {
        const res = await fetch('/api/profile', { cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json().catch(() => null)
        if (!data?.user) return
        if (cancelled) return
        setProfile(data.user)
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
    if (status !== 'authenticated' || !session?.user?.id) return

    const handler = () => {
      refreshProfile()
    }

    window.addEventListener('profile:updated', handler)
    return () => {
      window.removeEventListener('profile:updated', handler)
    }
  }, [session?.user?.id, status])

  useEffect(() => {
    if (!isAuthenticated) {
      setProfile(null)
      setDropdownOpen(false)
    }
  }, [isAuthenticated])

  useEffect(() => {
    const el = navLinksRef.current
    if (!el) return
    el.scrollLeft = 0
  }, [pathname])

  const resolvedAvatarPath = status === 'authenticated'
    ? (profile?.avatarPath || session?.user?.avatarPath || session?.user?.image)
    : null

  const resolvedName = status === 'authenticated'
    ? ((typeof profile?.name === 'string' ? profile.name : '') || session?.user?.name)
    : ''

  const avatarSrc = (() => {
    const raw = resolvedAvatarPath
    if (!raw) return '/images/auth-illustration.png'
    if (typeof raw !== 'string') return '/images/auth-illustration.png'

    const normalized = raw.startsWith('http://') || raw.startsWith('https://')
      ? raw
      : raw.startsWith('/')
        ? raw
        : `/${raw}`

    // Bust cache only when avatar value changes (e.g. new filename after upload)
    const version = normalized.split('/').pop() || 'avatar'
    const sep = normalized.includes('?') ? '&' : '?'
    return `${normalized}${sep}v=${encodeURIComponent(version)}`
  })()

  const displayName = (() => {
    const n = typeof resolvedName === 'string' ? resolvedName.trim() : ''
    if (n) return n
    if (status !== 'authenticated') return ''
    return profile?.email || session?.user?.email || ''
  })()

  const navItems = [
    { href: '/', icon: 'bi-house-door-fill', label: 'Home' },
    { href: '/hire', icon: 'bi-briefcase-fill', label: 'จ้างงาน' },
    { href: '/sell', icon: 'bi-shop', label: 'ตลาดงานศิลป์' },
    { href: '/portfolio', icon: 'bi-palette-fill', label: 'ศิลปิน' },
  ]

  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
          </a>

          <ul className="nav-links" ref={navLinksRef}>
            {navItems.map((item) => (
              <li key={`${item.href}|${item.label}`}>
                <a 
                  href={item.href} 
                  className={pathname === item.href ? 'active' : ''}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {!isAuthenticated ? (
              isLoadingSession ? (
                <div className="profile-container">
                  <div className="user-profile user-profile-loading" aria-busy="true" aria-label="Loading profile">
                    <div className="avatar avatar-skeleton" />
                    <span className="name-skeleton" />
                  </div>
                </div>
              ) : (
                <a className="nav-btn" href="/signin">เข้าสู่ระบบ / สมัครสมาชิก</a>
              )
            ) : (
              <div className="nav-actions-right" style={{ display: 'flex', alignItems: 'center' }}>
                <a className="nav-btn chat-nav-btn" href="/messages" aria-label="Chat">
                  <i className="bi bi-chat-dots-fill"></i>
                  {unreadCount > 0 && <span className="nav-notification-dot">{unreadCount}</span>}
                </a>

                <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <div className="user-profile">
                    <Avatar 
                      src={resolvedAvatarPath} 
                      name={displayName} 
                      size={32} 
                      className="avatar" 
                    />
                    <span>{displayName}</span>
                  </div>
                  {dropdownOpen && (
                    <div className="profile-dropdown">
                      <ul>
                        <li><a href="/how-it-works">วิธีใช้งาน</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href={`/profile/${session?.user?.id}`}>ดูโปรไฟล์ของคุณ</a></li>
                        <li><a href="/edit-profile">แก้ไขโปรไฟล์</a></li>
                        <li><a href="/history">ประวัติจ้างงาน/ซื้อขาย</a></li>
                        <li>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              signOut()
                            }}
                          >
                            ออกจากระบบ
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
