'use client'

import { useState, useEffect } from 'react'

let toastCount = 0
let toastListeners = []

export const toast = {
  error: (message) => notify(message, 'error'),
  success: (message) => notify(message, 'success'),
  info: (message) => notify(message, 'info'),
}

const notify = (message, type) => {
  const id = toastCount++
  toastListeners.forEach(listener => listener({ id, message, type }))
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const addToast = (newToast) => {
      setToasts(prev => [...prev, newToast])
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== newToast.id))
      }, 5000)
    }

    toastListeners.push(addToast)
    return () => {
      toastListeners = toastListeners.filter(l => l !== addToast)
    }
  }, [])

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type} liquid-glass`}>
          <div className="toast-icon">
            {t.type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
            {t.type === 'success' && <i className="bi bi-check-circle-fill"></i>}
            {t.type === 'info' && <i className="bi bi-info-circle-fill"></i>}
          </div>
          <div className="toast-content">{t.message}</div>
          <button className="toast-close" onClick={() => setToasts(prev => prev.filter(toast => toast.id !== t.id))}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      ))}
    </div>
  )
}
