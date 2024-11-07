import React, { useEffect, useState } from 'react'
import '../styles/modal.css'

const Modal = ({ isOpen, onClose }) => {
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setShowNotification(true)
  }

  useEffect(() => {
    let timer
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false)
        onClose()
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showNotification, onClose])

  if (!isOpen) return null

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <span className='close-button' onClick={onClose}>
          &times;
        </span>

        {/* Form di dalam modal */}
        <h3>Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='nama'>Nama:</label>
            <input type='text' id='nama' name='nama' required />
          </div>

          <div className='form-group'>
            <label htmlFor='alamat'>Alamat:</label>
            <input type='text' id='alamat' name='alamat' required />
          </div>

          <div className='form-group'>
            <label htmlFor='kota'>Kota:</label>
            <input type='text' id='kota' name='kota' required />
          </div>

          <div className='form-group'>
            <label htmlFor='provinsi'>Provinsi:</label>
            <input type='text' id='provinsi' name='provinsi' required />
          </div>

          <div className='button-container'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
      {showNotification && (
        <div className='notification-overlay'>
          <div className='notification-content'>
            <span>Pet berhasil diadopsi!</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
