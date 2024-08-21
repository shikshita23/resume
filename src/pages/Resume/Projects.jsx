import axios from 'axios'
import  { useEffect, useState } from 'react'

const Projects = () => {
     const [proj, setProj]=useState([])
     useEffect(()=>{
          axios.get("http://localhost:3000/project ")
          .then((res)=>{
               setProj(res.data)
          })
     },[])
  return (
    <div>
      <div className="heading font-bold tracking-widest mt-5 mb-2"> PROJECTS</div>
      <hr className="border-[1px] border-[#d6d6d6]"/>
      <div>
               {proj.map((item,index)=>(
                    <div key={index} className='mt-2' >
                         <div className='body'>
                                   <p className="font-bold mb-2">{item.name}</p>
                                   <p>{item.description}</p>
                                   <p>{item.url}</p>
                              
                         </div>
                         
                    </div>
               ))}
          </div>
    </div>
  )
}

export default Projects
