import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ErrorHandling() {
    const[error,setError] =useState()
    const[loading,setLoading] =useState(false)
    const [data,setData] = useState();

  
 
    useEffect(()=>{
        const fetchData = async() =>{
            try {
                let responce = await axios.get("https://jsonplaceholder.typicode.com/todoss");
                setData(responce.data);
            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(error);
            }
        }
        fetchData();
    },[])
  


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>
            Error: {error.message}<br/>
            Name: {error.name}
            <br/>
            Code: {error.code}
            <br/>
        status:{error.status}
            <br/>
        Config:{error.config.method}
            {/* Stack: {error.stack} */}
            </div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }
// console.log(error) 
  return (
    <div>

<h1>Fetched Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
    </div>
  )
}

export default ErrorHandling