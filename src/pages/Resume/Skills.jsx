import axios from 'axios'
import  { useEffect, useState } from 'react'

const Skills = () => {
     const [skill, setSkill]=useState([])
     const [len,setLen]=useState(0)
     useEffect(()=>{
          axios.get("http://localhost:3000/skills")
          .then((res)=>{
               setSkill(res.data)
               setLen(skill.length)
          })
     },[])
  return (
    <>
      <div className='heading font-bold tracking-widest mt-5 mb-2'>SKILLS</div>
      <hr className="border-[1px] border-[#d6d6d6]"/>
      <div className='flex body'>
               {skill.map((item,index)=>(
                    <div key={index} className='m-1'>
                        {item}
                        {len-1>index?",":""} 
                    </div>
               ))}
          </div>
    </>
  )
}

export default Skills
