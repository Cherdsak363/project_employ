'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ToastContext = createContext(null)

const TYPE_TO_ICON = {
  success: 'bi-check-circle-fill',
  error: 'bi-x-circle-fill',
  info: 'bi-info-circle-fill'
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback((message, options = {}) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
    const type = options.type || 'info'
    const durationMs = typeof options.durationMs === 'number' ? options.durationMs : 3500

    const toast = {
      id,
      type,
      message: String(message || ''),
      durationMs
    }

    setToasts((prev) => [...prev, toast])

    if (durationMs > 0) {
      window.setTimeout(() => {
        removeToast(id)
      }, durationMs)
    }

    return id
  }, [removeToast])

  const api = useMemo(() => ({ showToast, removeToast }), [showToast, removeToast])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="toast-stack" role="region" aria-label="Notifications">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.type}`} role="status">
            <i className={`bi ${TYPE_TO_ICON[t.type] || TYPE_TO_ICON.info}`} aria-hidden="true" />
            <div className="toast-message">{t.message}</div>
            <button
              type="button"
              className="toast-close"
              onClick={() => removeToast(t.id)}
              aria-label="Close"
            >
              <i className="bi bi-x" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return ctx
}
