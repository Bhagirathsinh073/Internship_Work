import React from 'react'
import './Product.css'


export default function Product_item({data}) {
    console.log(data)
    return (
        <div>
            <div className='gid'>


    {
        data.map((curItem)=>{
            const {category,description,image,price,title,id} = curItem;
            return(
                <>
           <div>
                <div className="card" key={id}>
                <img src={image} alt="Denim Jeans" style={{width:"100%"}} height={"200px"}/>
                <h1>{title}</h1>
                <p className="price">{price}</p>
                <p className="price">{category}</p>
                <p>{description}</p>
                <p><button>Add to Cart</button></p>
                </div>
                </div>
            </>
          )
        })
    }
   
    </div>
   
    </div>
  )
}


{/* <div>
<div className="card">
<img src={image} alt="Denim Jeans" style={{width:"100%"}}/>
<h1>Tailored Jeans</h1>
<p className="price">$19.99</p>
<p>Some text about Product....</p>
<p><button>Add to Cart</button></p>
</div>
</div> */}