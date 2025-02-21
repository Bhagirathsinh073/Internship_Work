import axios from "axios";
import { useEffect, useState } from "react"

const useCustom = (url) =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const fetchData = () =>{
        
            const res = axios.get(url)
            res.then((res_data) =>{setData(res_data.data);})
            res.catch((err)=>{console.log(err)}); 
            res.finally(
                setLoading(false)
            )
        }
        fetchData();
    },[url]);

    return {data, loading};
};


export default useCustom;