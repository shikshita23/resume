import axios from 'axios'
import  { useEffect, useState } from 'react'
import "../../assets/Css/Header.css"

const Introduction = () => {
     const [intro,setIntro]=useState("")
     useEffect(()=>{
          axios.get("http://localhost:3000/intro").then((res)=>{
               setIntro(res.data)
          })
     },[])
  return (
    <div className='body mt-7'>
          {intro}
    </div>
  )
}

export default Introduction
