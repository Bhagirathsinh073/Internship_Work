import React from 'react'

export default function AddressInfo({ formData, handleChange, prevStage, handleSubmit }) {
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <h2>Step 2: Address Info</h2>
      
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        
        required
      />

      <label className="block mb-2">City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        
        required
      />

      <label className="block mb-2">State:</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        
        required
      />

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStage}
        >
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}
