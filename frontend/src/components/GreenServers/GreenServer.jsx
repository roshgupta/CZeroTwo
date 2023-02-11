import React,{useState} from 'react'
import axios from 'axios'

function GreenServer() {

    const [url,setUrl]=useState("")
    const [answer,setAnswer]=useState({})

    const changeUrl=(e)=>{
        setUrl(e.target.value)
    }

    const formSubmit=(e)=>{
        e.preventDefault()

        axios.post('http://localhost:5000/api',{
          url
        })
        .then((res)=>{
            setAnswer(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
      <h1>Check out how optimized your favourite website is!!</h1>
        <br />
        <div style={{textAlign:"center"}}>
        <form onSubmit={formSubmit} action="">

            <label htmlFor="">Type the Domain name here</label>
            <br />
            <input type="text" placeholder='For ex. https://www.youtube.com' value={url} onChange={changeUrl} />
            <br />
            <button>Find out!</button>
        </form>

        <div>
          {answer &&(
            <>
            <div>{answer.url}</div>
            <div>{answer.green}</div>
            <div>{answer.bytes}</div>
            <div>{answer.cleanerThan}</div>
            </>
          )}

        </div>
        </div>
    </div>
  )
}

export default GreenServer
