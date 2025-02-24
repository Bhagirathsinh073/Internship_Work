import React from 'react'

export default function PersonalInfo({ formData, handleChange, nextStage }) {
  return (
    <div>
     <form onSubmit={(e) => { e.preventDefault(); nextStage(); }}>
      <h2 >Step 1: Personal Info</h2>
      
      <label >Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label className="block mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className="block mb-2">Phone:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </form>
    </div>
  )
}
