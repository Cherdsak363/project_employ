'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useToast } from '../../components/ToastProvider'
import Avatar from '../../components/Avatar'

export default function EditProfilePage() {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const { showToast } = useToast()

  const MAX_SOCIAL = 4

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [avatarPath, setAvatarPath] = useState('')
  const [bannerPath, setBannerPath] = useState('')
  const [socialLinks, setSocialLinks] = useState([])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadingBanner, setUploadingBanner] = useState(false)
  const [showPasswordFields, setShowPasswordFields] = useState(false)
  const [uid, setUid] = useState('')

  const togglePasswordFields = () => {
    setError('')
    setSuccess('')

    setShowPasswordFields((prev) => {
      const next = !prev
      if (!next) {
        setNewPassword('')
        setConfirmPassword('')
      }
      return next
    })
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin')
    }
  }, [status, router])

  useEffect(() => {
    const load = async () => {
      setError('')
      setSuccess('')

      try {
        const res = await fetch('/api/profile')
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'โหลดข้อมูลไม่สำเร็จ')
        }
        const data = await res.json()
        setEmail(data.user.email || '')
        setName(data.user.name || '')
        setFirstName(data.user.firstName || '')
        setLastName(data.user.lastName || '')
        setPhone(data.user.phone || '')
        setAddress(data.user.address || '')
        setAvatarPath(data.user.avatarPath || '')
        setBannerPath(data.user.bannerPath || '')
        setUid(data.user.uid ? String(data.user.uid).padStart(9, '0') : '')
        setSocialLinks(Array.isArray(data.user.socialLinks) ? data.user.socialLinks : [])
      } catch (e) {
        setError(e.message || 'เกิดข้อผิดพลาด')
      } finally {
        setLoading(false)
      }
    }

    if (status === 'authenticated') load()
  }, [status])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (showPasswordFields) {
      if (!newPassword || !confirmPassword) {
        setError('กรุณากรอกรหัสผ่านใหม่และยืนยันรหัสผ่าน')
        showToast('กรุณากรอกรหัสผ่านใหม่และยืนยันรหัสผ่าน', { type: 'error' })
        return
      }
      if (newPassword !== confirmPassword) {
        setError('รหัสผ่านใหม่ไม่ตรงกัน')
        showToast('รหัสผ่านใหม่ไม่ตรงกัน', { type: 'error' })
        return
      }
    }

    setSaving(true)
    try {
      const payload = { name, firstName, lastName, phone, address, avatarPath, bannerPath }
      if (Array.isArray(socialLinks) && socialLinks.length > 0) payload.socialLinks = socialLinks
      if (showPasswordFields) payload.password = newPassword

      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || 'บันทึกไม่สำเร็จ')
      }

      setSuccess('บันทึกโปรไฟล์สำเร็จ')
      showToast('บันทึกข้อมูลสำเร็จ', { type: 'success' })
      setNewPassword('')
      setConfirmPassword('')

      await update({ name, avatarPath })

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('profile:updated'))
      }
    } catch (e) {
      setError(e.message || 'เกิดข้อผิดพลาด')
      showToast(e.message || 'บันทึกไม่สำเร็จ', { type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const addSocialLink = () => {
    setSocialLinks((prev) => {
      if (prev.length >= MAX_SOCIAL) {
        showToast(`เพิ่มได้สูงสุด ${MAX_SOCIAL} รายการ`, { type: 'error' })
        return prev
      }
      return [...prev, { type: 'website', url: '' }]
    })
  }

  const removeSocialLink = (index) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== index))
  }

  const updateSocialLink = (index, patch) => {
    setSocialLinks((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...patch } : item))
    )
  }

  const socialCountLabel = `${socialLinks.length}/${MAX_SOCIAL}`

  const handleBannerUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      setError('อนุญาตเฉพาะรูปภาพ JPEG/PNG/WebP/GIF')
      showToast('อนุญาตเฉพาะรูปภาพ JPEG/PNG/WebP/GIF', { type: 'error' })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('รูปต้องไม่เกิน 5MB')
      showToast('รูปต้องไม่เกิน 5MB', { type: 'error' })
      return
    }

    setUploadingBanner(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload-banner', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'อัปโหลดไม่สำเร็จ')
      }

      const data = await res.json()
      setBannerPath(data.bannerPath)
      showToast('อัปโหลดแบนเนอร์สำเร็จ', { type: 'success' })

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('profile:updated'))
      }
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาด')
      showToast(err.message || 'อัปโหลดไม่สำเร็จ', { type: 'error' })
    } finally {
      setUploadingBanner(false)
    }
  }

  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('อนุญาตเฉพาะรูปภาพ JPEG/PNG/WebP')
      showToast('อนุญาตเฉพาะรูปภาพ JPEG/PNG/WebP', { type: 'error' })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('รูปต้องไม่เกิน 5MB')
      showToast('รูปต้องไม่เกิน 5MB', { type: 'error' })
      return
    }

    setUploading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload-avatar', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'อัปโหลดไม่สำเร็จ')
      }

      const data = await res.json()
      setAvatarPath(data.avatarPath)
      showToast('อัปโหลดรูปโปรไฟล์สำเร็จ', { type: 'success' })

      await update({ avatarPath: data.avatarPath })

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('profile:updated'))
      }
    } catch (e) {
      setError(e.message || 'เกิดข้อผิดพลาด')
      showToast(e.message || 'อัปโหลดไม่สำเร็จ', { type: 'error' })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="edit-profile-page">
      <div className="profile-container">
        <div
          className="profile-banner"
          style={{
            backgroundImage: `url(${bannerPath || '/images/auth-illustration.png'})`
          }}
        >
          <div className="profile-banner-overlay" />
          <label
            htmlFor="banner-upload"
            className="upload-btn-label upload-btn"
            style={{ right: '12px', bottom: '12px', position: 'absolute', zIndex: 2 }}
          >
            <i className="bi bi-image"></i>
            <input
              id="banner-upload"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleBannerUpload}
              disabled={uploadingBanner}
              style={{ display: 'none' }}
            />
          </label>

          <div className="profile-header">
            <div className="avatar-section">
              <Avatar 
                src={avatarPath} 
                name={name || email} 
                size={120} 
                className="edit-profile-avatar" 
              />
              <label htmlFor="avatar-upload" className="upload-btn-label upload-btn">
                <i className="bi bi-camera-fill"></i>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleAvatarUpload}
                  disabled={uploading}
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            {uid ? <span className="uid-label">UID: {uid}</span> : null}
          </div>
        </div>

        {uploadingBanner && (
          <p style={{ fontSize: '0.85rem', color: 'var(--primary)', marginTop: '10px' }}>
            กำลังอัปโหลดแบนเนอร์...
          </p>
        )}

        {uploading && (
          <p style={{ fontSize: '0.85rem', color: 'var(--primary)', marginTop: '10px' }}>
            กำลังอัปโหลด...
          </p>
        )}

        {loading ? (
          <p>กำลังโหลด...</p>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>อีเมล (แก้ไขไม่ได้)</label>
                <input type="email" value={email || session?.user?.email || ''} disabled />
              </div>

              <div className="form-group">
                <label>ชื่อผู้ใช้</label>
                <input
                  type="text"
                  placeholder="ชื่อของคุณ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  placeholder="08x-xxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>ชื่อจริง</label>
                <input
                  type="text"
                  placeholder="ชื่อจริง"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>นามสกุล</label>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group full-width">
                <label>คำอธิบาย</label>
                <textarea
                  rows={3}
                  placeholder="ระบุคำอธิบายของคุณ"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="form-group full-width">
                <button type="button" className="btn-secondary" onClick={togglePasswordFields}>
                  {showPasswordFields ? 'ยกเลิกการเปลี่ยนรหัสผ่าน' : 'เปลี่ยนรหัสผ่าน'}
                </button>
              </div>

              {showPasswordFields && (
                <>
                  <div className="form-group full-width">
                    <label>รหัสผ่านใหม่</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>ยืนยันรหัสผ่านใหม่</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="form-group full-width">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
                  <label style={{ marginBottom: 0 }}>Social Networks</label>
                  <span className="social-empty">{socialCountLabel}</span>
                </div>
                <div className="social-links">
                  {socialLinks.length === 0 ? (
                    <p className="social-empty">ยังไม่มี Social Networks</p>
                  ) : (
                    socialLinks.map((item, index) => (
                      <div key={index} className="social-row">
                        <select
                          value={item?.type || 'website'}
                          onChange={(e) => updateSocialLink(index, { type: e.target.value })}
                          aria-label="Social type"
                        >
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="line">Line</option>
                          <option value="tiktok">TikTok</option>
                          <option value="youtube">YouTube</option>
                          <option value="twitter">X (Twitter)</option>
                          <option value="website">Website</option>
                          <option value="other">Other</option>
                        </select>
                        <input
                          type="url"
                          placeholder="ใส่ลิงก์ (https://...)"
                          value={item?.url || ''}
                          onChange={(e) => updateSocialLink(index, { url: e.target.value })}
                        />
                        <button
                          type="button"
                          className="btn-remove"
                          onClick={() => removeSocialLink(index)}
                          aria-label="Remove social link"
                        >
                          ลบ
                        </button>
                      </div>
                    ))
                  )}

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={addSocialLink}
                    disabled={socialLinks.length >= MAX_SOCIAL}
                  >
                    เพิ่ม Social Network
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1.25rem' }}>{error}</p>
            )}
            {success && (
              <p style={{ color: '#22c55e', fontSize: '0.9rem', marginTop: '1.25rem' }}>{success}</p>
            )}

            <div className="button-group">
              <button type="button" className="btn-cancel" onClick={() => router.back()}>
                ยกเลิก
              </button>
              <button type="submit" className="btn-save" disabled={saving}>
                {saving ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
