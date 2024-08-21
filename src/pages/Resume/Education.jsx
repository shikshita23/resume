import axios from "axios"
import { useEffect, useState } from "react"
import "../../assets/Css/Header.css"

const Education = () => {
     const [edu, setEdu]=useState([])
     useEffect(()=>{
          axios.get("http://localhost:3000/education ")
          .then((res)=>{
               setEdu(res.data)
          })
     })
  return (
    <>
      <div className=" heading font-bold tracking-widest mt-5 mb-2"> EDUCATION </div>
      <hr className="border-[1px] border-[#d6d6d6]"/>
      <div>
               {edu.map((item,index)=>(
                    <div key={index} >
                         <div className="flex justify-between body mt-3">
                              <div>
                                   <p className="font-bold ">{item.degree}</p>
                                   <p className="italic">{item.institution}</p>
                              </div>
                              <div>
                                   <p className="text-right">{item.location}</p>
                                   <p className="text-right">{item.duration}</p>
                              </div>
                         </div>
                         
                    </div>
               ))}
          </div>
    </>
  )
}
export default Education
