import Education from "./Education"
import Experience from "./Experience"
import Header from "./Header"
import Introduction from "./Introduction"
import Language from "./Language"
import Projects from "./Projects"
import Skills from "./Skills"
import Training from "./Training"
import './Resume.css'

const Resume = () => {
  return (
     <div className="bg-[#525659] flex justify-center">

    <div className="bg-white w-[900px] px-[70px] pt-[70px] pb-[40px] shadow-lg shadow-[#0c0c0c]">
          <Header/>
          <Introduction/>
          <Experience/>
          <Education/>
          <Projects/>
          <Training/> 
          <Skills/>
          <Language></Language>
    </div>
     </div>
  )
}

export default Resume
