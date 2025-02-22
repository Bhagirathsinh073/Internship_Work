import React from 'react'

export default function ItemsList({ items, onDeleteItem }) {
  console.log(items)
  return (
    <>
    <h3>ItemsList</h3>
    {/* List of items for loop */} 
    <div>
      
      {items.map((item, index) => (
                <div className="itemlist-part" key={index}>
                    <div >{item.item}</div>
                    <div>
                        Quantity:
                        {item.quantity}
                    </div>
                    <div>Price: ${item.price}</div>
                    <button onClick={
                        () =>
                            onDeleteItem(index)}>
                        Delete
                    </button>
                </div>
            ))}
    </div>
        
    
    
    </>
  )
}
