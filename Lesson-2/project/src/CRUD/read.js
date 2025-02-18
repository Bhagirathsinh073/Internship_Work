import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(()=>{
      const res =  axios.get('https://67b2ce60bc0165def8ce9ce8.mockapi.io/FakeData')
      res.then((res)=>{
          setApiData(res.data);
        //   console.log(res.data);
    })
    res.catch((error)=>{
        console.log(error);
    })
        
    },[]);

    const setData =(data) =>{
        // console.log(data);
        let {id,firstname,lastname,email,phone} = data;
        localStorage.setItem("ID",id);
        localStorage.setItem("First Name",firstname);
        localStorage.setItem("Last Name",lastname);
        localStorage.setItem("Email",email);
        localStorage.setItem("Phone",phone);
        // console.log("Data Store in Local Storage");
    }
  return (
    <div>
      
        <table border={1} >
            <thead style={{padding:"20px"}}>
                <tr >
                    <th style={{padding:"20px"}}>ID</th>
                    <th style={{padding:"30px"}}>FirstName</th>
                    <th style={{padding:"30px"}}>LastName</th>
                    <th style={{padding:"20px"}}>Email</th>
                    <th style={{padding:"20px"}}>Phone</th>
                    <th style={{padding:"20px"}}>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    apiData.map((data,index)=>(
                        // console.log(curdata);  // For Debugging purposes
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>

                            <td>
                                <Link to='/update'>
                                <button onClick={setData(data)}>Update</button>         
                            </Link>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)
}

export default Read;