import axios from 'axios'
import  { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../../assets/Css/Header.css"
const Header = () => {
     const [user,setUser]=useState([])
     const handleData = async() =>{
          const res = await axios.get('http://localhost:3000/profile')
          setUser(res.data)
          
        }
     useEffect(()=>{
          handleData();
     },[])
     return (
          <div>
          <div className='Name font-bold tracking-widest text-xl text-center'>{user.name}</div>
          <div className='body flex text-[#555555] justify-center mt-2'>
               <div>{user.address}</div>
               <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] my-auto mx-2'/>
               <div>{user.phone}</div>
               <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] my-auto mx-2'/>
               <div>{user.email}</div>
          </div> 
          <div className=' body flex justify-center  text-[#555555] mt-2'><FontAwesomeIcon icon={faGithub} className='mx-3 my-auto'/>{user.github}</div>
    </div>
  )
}

export default Header
