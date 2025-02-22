import React, { useState } from 'react'

export default function BillDetails({ onAddItem, onDeleteItem }) {
  const [item, setItem] = useState('');
  const[quantity,setQuantity] = useState("quantity");
  const[price,setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddItem = () => {
    if (!item.trim()) {
        setErrorMessage(`Please input data in the Item section.`);
        return;
    }

    // Check if the item contains only alphabetical characters
    if (!/^[a-zA-Z]+$/.test(item)) {
        setErrorMessage(`Item should only contain 
            alphabetical characters.`);
        return;
    }

    const newItem = { item, quantity, price };
    onAddItem(newItem);
    setItem('');
    setQuantity(1);
    setPrice(0);
    setErrorMessage('');
};
  return (
    
    <div>
    <h2>Bill/Invoice Generator</h2>
    <h3>Items:</h3>
    <input type='text'  
    placeholder='Enter Your Items'
    value={item}
    onChange={(e)=>{setItem(e.target.value)}}
    />
    <h3>Quantity:</h3>
    <input  type='number' 
    placeholder='Enter Quantity of Items '
    value={quantity}
    onChange={(e)=>{setQuantity(e.target.value)}}
    />
    <h3>Price:</h3>
    <input  type='number' 
    placeholder='Enter Price of Items'
    value={price}
    onChange={(e)=>{setPrice(e.target.value)}}
    />
    <button className='addBtn' onClick={handleAddItem}>Add Item</button>
    <p style={{ color: 'red' }}>{errorMessage}</p>

    </div>
  
  )
}
