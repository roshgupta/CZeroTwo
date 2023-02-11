import React,{useState} from 'react'
import axios from 'axios'
function Use() {

    const [url,setUrl]=useState("")

    const [data,setData]=useState({})

    const changeUrl=(e)=>{
        setUrl(e.target.value)
    }
    const formSubmit=(e)=>{
        e.preventDeafult()
      console.log(url)
    axios.get(`http://localhost:5000/userlink/${url}`,{
      headers:{
        access_token:localStorage.getItem('access_token')
      }
    })
    .then((res)=>{
      console.log(res)
      setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })


    }

  return (
    <div>

        <form onSubmit={formSubmit} action="">
            <label htmlFor="">Type domain name</label>
            <input type="text" value={url} onChange={changeUrl}/>

            <button>Submit</button>
        </form>
        <br />

        {data&&(<div>
            <div>{data.url}</div>
            <div>{data.carbon}</div>
            <div>{data.value}</div>
        </div>)}
      
    </div>
  )
}

export default Use
