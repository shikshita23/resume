import { useNavigate } from "react-router-dom"

const Home = () => {
     const navigate=useNavigate();
     const handleclick=()=>{
          navigate('/resume')
     }
  return (
    <>
      <button className="flex m-auto my-[300px] border-2 py-3 px-7 border-black rounded-md " onClick={handleclick} >
          View my Resume
      </button>
    </>
  )
}

export default Home
