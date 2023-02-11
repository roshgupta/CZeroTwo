import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Recent() {

    const [datas,setDatas]=useState([])

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
