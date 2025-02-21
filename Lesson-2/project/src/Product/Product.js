import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './Product_item'



export default function Product() {

  const [data,setData]= useState([])

  const fetchProductData = ()=>{
    axios.get('https://fakestoreapi.com/products')
     .then((res) =>{
      //  console.log(res.data)
      setData(res.data)
    })
     .catch(err => console.log(err))
  }

  useEffect(()=>{
    fetchProductData()
  },[])
  return (
    <div>
<ProductItem data= {data}/>
    </div>
  )
}
