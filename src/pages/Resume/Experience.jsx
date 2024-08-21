import axios from "axios"
import { useEffect, useState } from "react"
import "../../assets/Css/Header.css"

const Experience = () => {
     const[exp,setExp]=useState([])
     useEffect(()=>{
          axios.get("http://localhost:3000/experience")
          .then((res)=>{
               setExp(res.data)
          })
     },[])
  return (
    <>
          <div className="heading font-bold tracking-widest mt-5 mb-2">EXPERIENCE</div>
          <hr className="border-[1px] border-[#d6d6d6] "/>
          <div>
               {exp.map((item,index)=>(
                    <div key={index} >
                         <div className="flex justify-between body mt-3">
                              <div>
                                   <p className="font-bold ">{item.title}</p>
                                   <p className="italic">{item.company}</p>
                              </div>
                              <div>
                                   <p className="text-right">{item.location}</p>
                                   <p className="text-right">{item.duration}</p>
                              </div>
                         </div>
                         <div className="body">
                              {item.description}
                         </div>
                    </div>
               ))}
          </div>
    </>
  )
}

export default Experience
