'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Avatar from '../../components/Avatar'

const resolvePath = (raw) => {
  if (!raw || typeof raw !== 'string') return ''
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw
  return raw.startsWith('/') ? raw : `/${raw}`
}

export default function MessagesPage() {
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
  const [selectedFiles, setSelectedFiles] = useState([])
  const [previewUrls, setPreviewUrls] = useState([])
  const fileInputRef = useRef(null)

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

  const loadConversations = async () => {
    const res = await fetch('/api/conversations', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to load conversations')
    }
    const data = await res.json().catch(() => [])
    const list = Array.isArray(data) ? data : []

    // Auto-update unread status if last message is not from me and conversation is not active
    setUnreadIds(prev => {
      const next = new Set(prev)
      list.forEach(c => {
        if (c.id !== activeId && c.lastMessage && c.lastMessage.senderId !== meId) {
          // Simple session-based NEW check: if message is newer than 10 seconds or we haven't seen this conv updated
          if (c.lastMessage.createdAt > new Date(Date.now() - 10000).toISOString()) {
            next.add(c.id)
            c.status = 'NEW'
          }
        }
      })
      return next
    })

    setConversations(list)
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

  const handleSend = async () => {
    if (!draft.trim() && selectedFiles.length === 0) return
    if (!activeId) return
    if (sending || uploading) return

    const body = draft.trim()
    setSending(true)

    try {
      if (selectedFiles.length > 0) {
        setUploading(true)
        const fd = new FormData()
        selectedFiles.forEach(f => fd.append('files', f))
        if (body) fd.append('body', body)

        const res = await fetch(`/api/conversations/${activeId}/messages/attachments`, {
          method: 'POST',
          body: fd
        })

        if (res.ok) {
          setDraft('')
          setSelectedFiles([])
          await pollNewMessages(activeId)
          await loadConversations()
        } else {
          const err = await res.json().catch(() => null)
          alert(err?.error || 'อัปโหลดรูปภาพล้มเหลว')
        }
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
    } catch (error) {
      console.error('Send error:', error)
      alert('เกิดข้อผิดพลาดในการส่งข้อความ')
    } finally {
      setSending(false)
      setUploading(false)
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

  return (
    <div className="messages-wrap">
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
                    <Avatar 
                      src={c.otherUser?.avatarPath} 
                      name={c.otherUser?.name || c.otherUser?.email} 
                      size={42} 
                      className="messages-avatar" 
                    />
                    {c.unreadCount > 0 && <span className="messages-new-badge">{c.unreadCount}</span>}
                  </div>
                  <div className="messages-item-meta">
                    <div className="messages-item-name">{c.otherUser?.name || c.otherUser?.email || '-'}</div>
                    <div className="messages-item-status">{c.lastMessage?.body ? c.lastMessage.body : ' '}</div>
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
                  className="messages-avatar" 
                />
                <div>
                  <div className="messages-topbar-name">{activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'}</div>
                  <div className="messages-topbar-sub"> </div>
                </div>
              </div>
              <button className="messages-topbar-btn" type="button" aria-label="Info">
                <i className="bi bi-info-circle"></i>
              </button>
            </div>

            <div className="messages-thread" ref={threadRef}>
              {loadingMessages
                ? null
                : messages.map((m) => {
                    const fromMe = !!meId && m.senderId === meId
                    return (
                      <div key={m.id} className={`messages-bubble-row ${fromMe ? 'me' : 'them'}`}>
                        <div className={`messages-bubble ${fromMe ? 'me' : 'them'}`}>
                          {Array.isArray(m.attachments) && m.attachments.length > 0 && (
                            <div className="messages-bubble-attachments">
                              {m.attachments.map((att) => (
                                <div key={att.id} className="messages-attachment-item">
                                  {att.mimeType?.startsWith('image/') ? (
                                    <a href={resolvePath(att.path)} target="_blank" rel="noreferrer">
                                      <img src={resolvePath(att.path)} alt={att.filename} className="messages-attachment-img" />
                                    </a>
                                  ) : (
                                    <a href={resolvePath(att.path)} target="_blank" rel="noreferrer" className="messages-attachment-file">
                                      <i className="bi bi-file-earmark-arrow-down"></i>
                                      <span>{att.filename}</span>
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {m.body && <div className="messages-bubble-text">{m.body}</div>}
                          <div className="messages-bubble-time">{formatTime(m.createdAt)}</div>
                        </div>
                      </div>
                    )
                  })}

              {loadingMessages ? null : !messages.length ? <div className="messages-empty">ยังไม่มีข้อความ</div> : null}
            </div>

            <div className="messages-composer">
              {previewUrls.length > 0 && (
                <div className="messages-previews">
                  {previewUrls.map((url, idx) => (
                    <div key={url} className="messages-preview-item">
                      <img src={url} alt="" />
                      <button type="button" onClick={() => removeFile(idx)}>
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="messages-composer-inner">
                <button 
                  className="messages-icon-btn" 
                  type="button" 
                  aria-label="Attach"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <i className={`bi ${uploading ? 'bi-hourglass-split' : 'bi-plus-lg'}`}></i>
                </button>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />
                <textarea
                  className="messages-input"
                  placeholder={uploading ? "กำลังอัปโหลด..." : "พิมพ์ข้อความ..."}
                  value={draft || ''}
                  onChange={(e) => {
                    setDraft(e.target.value)
                    e.target.style.height = 'auto'
                    e.target.style.height = `${e.target.scrollHeight}px`
                  }}
                  disabled={uploading}
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
                <button className="messages-send" type="button" onClick={handleSend} aria-label="Send" disabled={sending || uploading || (!draft.trim() && selectedFiles.length === 0)}>
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
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

            <div className="messages-right-block">
              <div className="messages-right-title">Media</div>
              <div className="messages-media">
                <div className="messages-media-empty">-</div>
              </div>
            </div>

            <button className="messages-logout" type="button">
              Logout
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}
