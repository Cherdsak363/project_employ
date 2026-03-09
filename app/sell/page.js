'use client'

import { useState } from 'react'

export default function Sell() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    contact: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/arts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        price: formData.price === '' ? null : parseFloat(formData.price)
      })
    })
    if (response.ok) {
      alert('รูปถูกส่งเพื่อขายแล้ว!')
      setFormData({ title: '', description: '', price: '', image: '', contact: '' })
    } else if (response.status === 401) {
      alert('กรุณาเข้าสู่ระบบก่อนขายรูป')
    } else {
      alert('เกิดข้อผิดพลาด')
    }
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>ขายรูป</h2>
          <form onSubmit={handleSubmit}>
            <label>ชื่อรูป:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            <label>คำอธิบาย:</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            <label>ราคา (บาท):</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            <label>URL รูปภาพ:</label>
            <input type="url" name="image" value={formData.image} onChange={handleChange} required />
            <label>ข้อมูลติดต่อ:</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            <button type="submit">ขายรูป</button>
          </form>
        </div>
      </section>
    </div>
  )
}
