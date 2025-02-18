import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Form_Data() {

    const [data,setData] = useState([]);

    useEffect(()=>{
        const res = axios.get('https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data')
        res.then((result) => {
            console.log(result.data);
            setData(result.data);
        }).catch((err) => {
            console.log(err);
        });
        getFormData(data);
    },[]);


    const getFormData = () =>{
        axios.get("https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data")
       .then((res)=>{
         setData(res.data);
        //  console.log(res.data);
       });
      }

  return (
    <div>
        <h1>Form Data</h1>
        <table border={2} cellPadding={"50px"}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
                </tr>
            </thead>
        <tbody>
            {
                data && data.map ((curItem,index)=>{
                    // console.log(curItem);  // For Debugging purposes
                    const {id,FirstName,address,lastName,mail,phone} = curItem;
                    return(
                        
                         <tr key={id}>
                            <td>{id}</td>
                            <td>{FirstName + " " + lastName}</td>
                            <td>{mail}</td>
                            <td>{phone}</td>
                            <td>{address}</td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                
                    );
                })
            }
            
        </tbody>
            
        </table>
    </div>
  )
}
