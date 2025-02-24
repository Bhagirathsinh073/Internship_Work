import React from 'react'

export default function Final({formData}) {
    console.log(formData)
  return (
    <div>
      <h1>Final</h1>
      <p>{formData.fullname}</p>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <p>{formData.address}</p>
      <p>{formData.city}</p>
    </div>
  )
}
