import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Blog() {
  // const [data,setData] = useState();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);


  // Fetching data from an API
 

 const fetchData = async(page)=>{
try {
  const response = await axios(`https://fakestoreapi.com/products`)
  console.log(response.data)
  // setData(response.data);
  setTotalItems(response.data.length); //100
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(indexOfFirstItem)
  console.log(indexOfLastItem)
  setItems(response.data.slice(indexOfFirstItem, indexOfLastItem));
} catch (error) {
  console.log(error)
}
 }

   

  useEffect(() => {
    fetchData(currentPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems/itemsPerPage)
  return (
    <div>
      <h1>Blog Post Page </h1>
      <ul>
       {
         items.map((item) => (
          <>
          
          <li key={item.id}>{item.title}  </li>
          <img src={item.image} alt='prodect' height={"100px"} width={"50px"} />
          <p>Price:{item.price}</p>
          <p>{item.rating.rate}</p>
          <p>{item.rating.count}</p>
          </>
          ))
       }
      </ul>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {/* {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
          >
            {i + 1}
          </button>
        ))} */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    </div>
  )
}
