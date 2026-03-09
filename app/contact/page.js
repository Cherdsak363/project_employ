'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('ข้อความส่งแล้ว!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>ติดต่อเรา</h2>
          <form onSubmit={handleSubmit}>
            <label>ชื่อ:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>อีเมล:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>ข้อความ:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">ส่งข้อความ</button>
          </form>
        </div>
      </section>
    </div>
  )
}
