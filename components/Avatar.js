'use client'

import React from 'react'

export default function Avatar({ src, name, className = '', size = 40 }) {
  const getInitial = (name) => {
    if (!name) return '?'
    return name.trim().charAt(0).toUpperCase()
  }

  const getBackgroundColor = (name) => {
    if (!name) return '#4f46e5'
    const colors = [
      '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#6366f1', 
      '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
  }

  if (src && src !== '/images/auth-illustration.png' && !src.includes('cdn-icons-png')) {
    return (
      <img
        src={src}
        alt={name || 'User avatar'}
        className={`avatar-img ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: '999px',
          objectFit: 'cover',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
    )
  }

  return (
    <div
      className={`avatar-initial ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '999px',
        backgroundColor: getBackgroundColor(name),
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: `${size * 0.4}px`,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        userSelect: 'none'
      }}
    >
      {getInitial(name)}
    </div>
  )
}
