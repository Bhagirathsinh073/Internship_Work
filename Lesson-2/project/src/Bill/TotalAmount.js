import React from 'react'

export default function TotalAmount({total}) {
  return (
    <div>
      <div className="total">
            <h3>
                Total Amount:
                ${total.toFixed(2)}
            </h3>
        </div>
    </div>
  )
}
