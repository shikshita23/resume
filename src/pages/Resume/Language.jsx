import axios from 'axios'
import  { useEffect, useState } from 'react'

const Language = () => {
     const [lang, setLang]=useState([])
     const [len,setLen]=useState(0)
     useEffect(()=>{
          axios.get("http://localhost:3000/languages")
          .then((res)=>{
               setLang(res.data)
               setLen(lang.length)
          })
     },[])
  return (
    <>
    
      <div className="heading font-bold tracking-widest mt-5 mb-2">LANGUAGES</div>
      <hr className="border-[1px] border-[#d6d6d6]"/>
      <div className='flex body mt-2'>
               {lang.map((item,index)=>(
                    <div key={index} className='m-1'>
                        {item.name}
                        {len-1>index?",":""} 
                    </div>
               ))}
          </div>
    </>
  )
}

export default Language
