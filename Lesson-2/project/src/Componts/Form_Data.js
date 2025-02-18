import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Form_Data() {

    const [data,setData] = useState([]);
    // const [data1,setData1] = useState(null);

    

    useEffect(()=>{
        const res = axios.get('https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data')
        res.then((result) => {
            console.log(result.data);
            setData(result.data);
        }).catch((err) => {
            console.error("Error fetching data:", err);
        });
        const resp = axios.get('/user/1234')
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            console.log(resp);
          });
        // getFormData(data);
    },[]);


    const getFormData = () =>{
        axios.get("https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data")
       .then((res)=>{
         setData(res.data);
        //  console.log(res.data);
       }).catch((err)=>{
        // console.error("Error fetching data:", err);
        
       });
      }
const setDataLS = (data) =>{
    const {id,FirstName,address,lastName,mail,phone} = data;
    localStorage.setItem("ID",id);
    localStorage.setItem("FirstName",FirstName);
    localStorage.setItem("LastName",lastName);
    localStorage.setItem("Email",mail);
    localStorage.setItem("Phone",phone);
    localStorage.setItem("Address",address);
    console.log("Data Store in Local Storage");
}
const deleteData = (id) =>{
    axios.delete(`https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data/${id}`)
    .then(()=>{
        console.log("Data deleted successfully");
        getFormData();
    })
}
  return (
      <div>
        {/* {data1 ? data1 : 'Loading...'} */}
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
                            <td><button onClick={setDataLS(curItem)}>Update</button> <button onClick={()=>{deleteData(id)}}>Delete</button></td>
                        </tr>
                
                    );
                })
            }
            
        </tbody>
            
        </table>
    </div>
  )
}
