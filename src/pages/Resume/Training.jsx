import axios from "axios"
import { useEffect, useState } from "react"
import "../../assets/Css/Header.css"

const Training = () => {
     const [train, setTrain]=useState([])
     useEffect(()=>{
          axios.get("http://localhost:3000/training_certifications")
          .then((res)=>{
               setTrain(res.data)
          })
     },[])
  return (
    <div>
     {console.log("trainnnn=>",train)}
      <div className="heading font-bold tracking-widest mt-5 mb-2"> TRAINING/CERTIFICATIONS</div>
      <hr className="border-[1px] border-[#d6d6d6]"/>
      <div>
               {train.map((item,index)=>(
                    <div key={index} className="mt-2" >
                         <div className="flex justify-between body">
                           
                                   <div className="font-bold">{item.title}</div>
                                   <div>{item.year}</div>
                              
                              
                         </div>
                         <div className="italic body">{item.organization}</div>
                         
                    </div>
               ))}
          </div>
    </div>
  )
}

export default Training
