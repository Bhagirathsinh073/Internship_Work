import React from 'react'
import './Bill.css'
import BillDetails from './BillDetails'
import ItemsList from './ItemsList'
import TotalAmount from './TotalAmount'

export default function BillMain() {
  const [items, setItems] = React.useState([]);
  const handleAddItem = (item) => {
    setItems([...items, item]);

};

const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
};

const calculateTotalAmount = () => {
  return items.reduce(
      (total, item) =>
          total +
          item.quantity *
          item.price, 0);
};

      

  return (
    <>
    <div className='bill-main'>
    <div className='bill-mainbox'>
       <BillDetails onAddItem={handleAddItem}/>
       <ItemsList items={items} onDeleteItem={handleDeleteItem}/>
       <TotalAmount total={calculateTotalAmount()}/>
       </div>
    </div>
    </>
  )
}
