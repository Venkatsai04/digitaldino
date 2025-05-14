import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = ({mode}) => {

  const Navigate = useNavigate()
  const isLightMode = mode === 'light';

  const moveTo = ()=>{
    Navigate('/student')
  }

  return (
    <div id='footer' className={`w-[95vw] h-[95vh]  ${mode=='light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} m-auto rounded-2xl my-[100px] `}>

         <div className="relative w-full h-[832px] overflow-hidden text-left text-[24px] text-yellow-400 font-poiret-one">
      <div className="absolute top-[472px] left-[-92px] bg-black w-[1823px] h-[586px] flex flex-col items-start justify-start pt-[25px] pb-[100px] pr-44 pl-[353px] box-border gap-[42px] font-abhaya-libre-extrabold">
        <div className="relative tracking-[0.02em] [background:linear-gradient(#fe5e54,_#fe5e54),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        <img className='w-[150px]' src={isLightMode ? 'DigitalDinoLight.png' : 'DigitalDinoDark.png'} alt="logo" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[105.33px] text-center text-[16.85px] text-yellow-400 font-abhaya-libre-extrabold">
      <div className="flex flex-col items-start justify-start text-[15.17px] text-white font-poppins">
        <div className="flex flex-col items-start justify-start gap-[12.64px]">
          <div className="relative tracking-[-0.01em] font-medium text-tomato">
            Home
          </div>
          <div className="relative tracking-[-0.01em] font-medium">
            About Us
          </div>
          <div className="relative tracking-[-0.01em] font-medium">
            Services
          </div>
          <div className="relative tracking-[-0.01em] font-medium">
            Students
          </div>
          <div className="relative tracking-[-0.01em] font-medium">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16.85px]">
        <div className="relative tracking-[-0.02em]">Pages</div>
        <div className="flex flex-row items-start justify-start text-[15.17px] text-white font-poppins">
          <div className="flex flex-col items-start justify-start gap-[12.64px]">
            <div className="relative tracking-[-0.01em] font-medium">404</div>
            <div className="relative tracking-[-0.01em] font-medium">
              Licensing
            </div>
            <div className="relative tracking-[-0.01em] font-medium">
              Instructions
            </div>
            <div className="relative tracking-[-0.01em] font-medium">
              Style Guide
            </div>
            <div className="relative tracking-[-0.01em] font-medium">
              Changelog
            </div>
            <div className="relative tracking-[-0.01em] font-medium">
              More Templates!
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[67.41px]">
        <div className="flex flex-col items-start justify-start gap-[21.91px]">
          <div className="flex flex-col items-start justify-start gap-[10.11px]">
            <div className="relative tracking-[-0.02em]">Newsletter</div>
            <div className="relative text-[15.17px] tracking-[-0.01em] font-medium font-poppins text-white">{`Stay Updated with our Latest News `}</div>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-[8.43px] text-left text-mid-7 text-white font-poppins">
            <div className="relative w-[257.9px] h-[49.7px] z-[0]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[25.28px] box-border border-[0.8px] border-solid border-white" />
              <input className='outline-none bg-transparent absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[25.28px] box-border border-[0.8px] border-solid border-white px-4' type="text" name="" id="" />
            </div>
            <div className="my-0 mx-[!important] absolute top-[5.9px] left-[194.7px] flex flex-col items-start justify-start gap-[8.43px] z-[1]">
              <div className="relative rounded-[25.28px] bg-yellow-400 w-[56.5px] h-[37.9px] z-[0] cursor-pointer" />
              <img
                className="absolute my-0 mx-[!important] h-[41.95%] w-[37.35%] top-[31.66%] right-[34.69%] bottom-[26.39%] left-[27.96%] max-w-full overflow-hidden max-h-full z-[1] cursor-pointer"
                alt=""
                src="/vector10.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13.48px]">
          <div className="relative tracking-[-0.02em]">Social</div>
          <div className="flex flex-row items-center justify-start gap-[14.33px]">
            <img
              className="relative w-[27px] h-[27px] overflow-hidden shrink-0"
              alt=""
              src="/mdifacebook1.svg"
            />
            <img
              className="relative w-[23.5px] h-[19.1px]"
              alt=""
              src="/vector11.svg"
            />
            <img
              className="relative w-[22.5px] h-[15.7px]"
              alt=""
              src="/vector12.svg"
            />
            <img
              className="relative w-[22.5px] h-[22.5px]"
              alt=""
              src="/vector13.svg"
            />
            <img
              className="relative w-[20.2px] h-[20.2px]"
              alt=""
              src="/vector14.svg"
            />
            <img
              className="relative w-[17.6px] h-[20.2px]"
              alt=""
              src="/vector15.svg"
            />
            <img
              className="relative w-[22.5px] h-[22.5px]"
              alt=""
              src="/vector16.svg"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="absolute top-[39px] left-[235px] w-[616px] h-[187px] text-[31.81px] font-porter-sans-block">
        <img
          className="absolute top-[0px] left-[0px] w-[133px] h-[122.3px]"
          alt=""
          src="/ellipse-16.svg"
        />
        <div className="absolute top-[45px] left-[22px] inline-block w-[534.4px] h-[129.1px] [backdrop-filter:blur(2.88px)]">
          <span>for</span>  
          <span className={isLightMode ? 'text-black' : 'text-white'}> students.</span>
        </div>
        <div className="absolute top-[146px] left-[22px] w-[594px] flex flex-col items-start justify-start text-[34.71px] text-darkslategray font-poiret-one">
          <div className="w-[541px] flex flex-col items-start justify-start">
<<<<<<< HEAD
            <div className={`relative tracking-[-0.02em] ${isLightMode ? 'text-black [-webkit-text-stroke:0.8px_#000]' : ' text-yellow-400 [-webkit-text-stroke:0.8px_yellow'}`}>{`Personal website `}</div>
=======
            <div className={`relative tracking-[-0.02em] ${isLightMode ? 'text-black [-webkit-text-stroke:0.8px_#000]' : ' text-yellow-400 [-webkit-text-stroke:0.8px_yellow'}`}>{`Personal project `}</div>
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
          </div>
        </div>
      </div>
      <div className={`absolute top-[248px] left-[257px] text-[18.94px] tracking-[0.04em] leading-[21.98px] text-black inline-block w-[402px] ${isLightMode ? 'text-black [-webkit-text-stroke:0.2px_#000]' : 'text-white [-webkit-text-stroke:0.2px_white]'} `}>
<<<<<<< HEAD
        Design , Build and Host your personal website (portfolio) with us . Our
        experienced team is here to mentor and guide students through the
        process of creating their own websites.
=======
        Expert guidance for your final year college projects and real-time applications. Our team mentors students through development with cutting-edge technologies.
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
      </div>
      <img
        className="absolute top-[61px] left-[819px] rounded-[35px] w-[353px] h-[353px]"
        alt=""
        src="/ellipse-17.svg"
      />
      <img
        className="absolute top-[176px] left-[912px] w-[215px] h-[150px] object-cover"
        alt=""
        src="/istockphoto1219854221612x612-11@2x.png"
      />
      <img
        className="absolute top-[109.3px] left-[850.3px] rounded-[91px] w-[150px] h-[151.1px] object-cover"
        alt=""
        src="/istockphoto1047259374612x612-11@2x.png"
      />
      <div  className="absolute top-[370px] left-[248px] rounded-[45.84px] bg-black w-[156.4px] overflow-hidden flex flex-row items-center justify-center px-4 py-4 box-border text-[17.98px] cursor-pointer shadow-[10px_8px_yellow] z-[1000000]" onClick={moveTo}>
        <div className="relative tracking-[2px] [-webkit-text-stroke:1px_#ffff00] cursor-pointer ">
          Build now
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer