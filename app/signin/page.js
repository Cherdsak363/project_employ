'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLight, setIsLight] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (isLogin) {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
        redirect: false
      })

      if (result?.error) {
        setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
      } else {
        window.location.href = '/'
      }
    } else {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setIsLogin(true)
        setError('')
        setEmail('')
        setPassword('')
        setName('')
      } else {
        setError(data.error || 'เกิดข้อผิดพลาด')
      }
    }

    setLoading(false)
  }

  return (
    <div className={`auth-template-page${isLight ? ' light' : ''}`}>
      <div className={`auth-wrapper${isLogin ? '' : ' active'}`}>
        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => setIsLight((v) => !v)}
        >
          <i className={isLight ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'} />
        </button>

        <div className="auth-panel signin">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <p>Access your workspace</p>

            <div className="field">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <i className="bi bi-envelope" />
            </div>

            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <i className="bi bi-lock" />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="primary-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Continue'}
            </button>

            <p>or continue with</p>
            <div className="social-row">
              <a href="https://www.youtube.com/@Web.Crafters" aria-label="YouTube">
                <i className="bi bi-youtube" />
              </a>
              <a href="https://www.instagram.com/web.crafters2024/" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>

            <p className="form-switch-text">
              Don&apos;t hava an account ?
              <a
                href="#"
                className="link-signup go-signup"
                onClick={(e) => {
                  e.preventDefault()
                  setIsLogin(false)
                  setError('')
                }}
              >
                {' '}Sign up
              </a>
            </p>
          </form>
        </div>

        <div className="auth-panel signup">
          <form onSubmit={handleSubmit}>
            <h1>Create account</h1>
            <p>Start your journey today</p>

            <div className="field">
              <input
                type="text"
                placeholder="Username"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              <i className="bi bi-person" />
            </div>

            <div className="field">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <i className="bi bi-envelope" />
            </div>

            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <i className="bi bi-lock" />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="primary-btn" disabled={loading}>
              {loading ? 'Creating account...' : 'Get started'}
            </button>

            <p className="form-switch-text">
              Already have an account ?
              <a
                href="#"
                className="link-signin go-signin"
                onClick={(e) => {
                  e.preventDefault()
                  setIsLogin(true)
                  setError('')
                }}
              >
                {' '}Sign in
              </a>
            </p>
          </form>
        </div>

        <div className="switch-layer">
          <div className="switch-panel switch-left">
            <h1>New here ?</h1>
            <p>Create an account seconds</p>
            <button
              type="button"
              className="primary-btn go-signup"
              onClick={() => {
                setIsLogin(false)
                setError('')
              }}
            >
              Sign up
            </button>
          </div>
          <div className="switch-panel switch-right">
            <h1>Welcome back</h1>
            <p>Login to continue</p>
            <button
              type="button"
              className="primary-btn go-signin"
              onClick={() => {
                setIsLogin(true)
                setError('')
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
