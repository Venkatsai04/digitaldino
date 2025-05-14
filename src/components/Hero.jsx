import {React} from 'react'
import Side from './Side'
import { useNavigate } from "react-router-dom";

const Hero = ({ mode }) => {

  const Navigate = useNavigate()

  const moveToSome = () => {
    Navigate('/services')
  }

  return (
    <div className={`overflow-hidden w-[95vw] h-[85vh] ${mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} m-auto rounded-2xl`}>
      <div className="flex flex-col w-[80vw] h-[80vh]  m-auto my-[10px] rounded-3xl overflow-hidden">
        <img className='scale-[.75] w-[70%] md:scale-[1] m-[25px]' src={`${mode == 'light' ? ' Frame1White.svg' : 'darkmode (2).svg'}`} alt="hero" />
        <div className="w-full px-[160px]">
          <img onClick={moveToSome} className='scale-100 cursor-pointer hover:filter my-[10px]' src="Frame 2 (1).svg" alt="btn" width={200} height={50} />
        </div>
      </div>
      <Side mode={mode} />
    </div>
  )
}

export default Hero