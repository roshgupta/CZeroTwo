import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Recent() {

    const [datas,setDatas]=useState([])

    const navigate = useNavigate();
  const {auth}= useContext(AuthContext)
  if(auth==false){
    navigate('/login')
  }

    useEffect(()=>{

        axios.get('http://localhost:5000/userlink/all',{
      headers:{
        access_token:localStorage.getItem('access_token')
      }
    })
    .then((res)=>{
      console.log(res)
      setDatas(res.data.payload)
    })
    .catch((err)=>{
      console.log(err)
    })


    },[])


  return (
    <div>
      {datas&&datas.map((data)=>{
        return (
        <>
        <div>
            {data.date}
        </div>
        <div>
            {data.visited.map((vis)=>{
                return (
                <>
                <div>{vis.url}</div>
                <div>{vis.value}</div>
                <div>{vis.carbon}</div>
                </>)
            })}
        </div>
        </>)
      })}

    </div>
  )
}

export default Recent
