import React from 'react'
import { useNavigate } from 'react-router-dom';


const FooterMobile = ({mode}) => {
  const Navigate = useNavigate()
  const isLightMode = mode === 'light';

  const moveTo = ()=>{
    Navigate('/student')
  }
  
  return (
    <div id='footer' className={`m-auto w-[95%] h-[99%] ${mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>
         <div className="relative w-full h-[800px] overflow-hidden text-left text-[15.81px] text-yellow-400 font-poiret-one">
      <div className="absolute top-[20px] left-[26px] w-[277.6px] h-[121px] font-porter-sans-block">
        <img
          className="absolute top-[0px] left-[0px] w-[72px] h-[69px]"
          alt=""
          src="/ellipse-12.svg"
        />
        <div className="absolute top-[29px] left-[12px] inline-block w-[265.6px] h-[64.2px] [backdrop-filter:blur(1.43px)]">
          <span>for</span>
          <span className={isLightMode ? 'text-black' : 'text-white'}> students.</span>
        </div>
        <div className="absolute top-[96.5px] left-[63px] w-[154px] h-[24.5px]" />
      </div>
      <div className="absolute top-[117px] left-[38px] w-[390.6px] flex flex-col items-start justify-start text-[25.06px] text-darkslategray">
<<<<<<< HEAD
      <div className={`relative tracking-[-0.02em] ${isLightMode ? 'text-black [-webkit-text-stroke:0.8px_#000]' : ' text-yellow-400 [-webkit-text-stroke:0.8px_yellow'}`}>{`Personal website `}</div>
      </div>
      <div className="absolute top-[162px] left-[38px] w-[285px] h-[63px] text-[13.43px] text-black">
        <div className={`${isLightMode ? 'text-black ' : 'text-white'} absolute top-[0px] left-[0px] tracking-[0.04em] leading-[15.59px] inline-block w-[285px] [-webkit-text-stroke:0.2px_#000]`}>
          Design , Build and Host your personal website (portfolio) with us .
          Our experienced team is here to mentor and guide students through the
          process of creating their own websites.
=======
      <div className={`relative tracking-[-0.02em] ${isLightMode ? 'text-black [-webkit-text-stroke:0.8px_#000]' : ' text-yellow-400 [-webkit-text-stroke:0.8px_yellow'}`}>{`Personal project `}</div>
      </div>
      <div className="absolute top-[162px] left-[38px] w-[285px] h-[63px] text-[13.43px] text-black">
        <div className={`${isLightMode ? 'text-black ' : 'text-white'} absolute top-[0px] left-[0px] tracking-[0.04em] leading-[15.59px] inline-block w-[285px] [-webkit-text-stroke:0.2px_#000]`}>
          Expert guidance for your final year college projects and real-time applications. Our team mentors students through development with cutting-edge technologies.
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
        </div>
      </div>
      <div  className="absolute top-[244px] left-[34px] rounded-[32.83px] bg-black w-28 flex flex-row items-center justify-center py-4 px-4 box-border text-[12.87px] cursor-pointer shadow-[11px_8px_yellow] z-[1000000]">
        <div onClick={moveTo} className="relative tracking-[1.43px] [-webkit-text-stroke:0.7px_#ffff00] cursor-pointer hover:bg-yellow-400 hover:text-black ">
          Build now
        </div>
      </div>
      <img
        className="absolute top-[259px] left-[89px] w-[454.6px] h-[599.8px]"
        alt=""
        src="/ellipse-6.svg"
      />
      <img
        className="absolute top-[96px] left-[0px] w-[360px] h-[441.9px]"
        alt=""
        src="/ellipse-7.svg"
      />
      <img
        className="absolute top-[289px] left-[207px] w-[136.2px] h-[95px] object-cover"
        alt=""
        src="/istockphoto1219854221612x612-1@2x.png"
      />
      <img
        className="absolute top-[261.1px] left-[188.1px] rounded-[42.31px] w-[69.7px] h-[70.2px] object-cover"
        alt=""
        src="/istockphoto1047259374612x612-1@2x.png"
      />
      <div className="absolute top-[422px] left-[-107px] bg-black w-[632px] h-[446px]" />
      <div className="absolute top-[472px] left-[42px] h-[119px] flex flex-col items-start justify-start text-center text-[15.17px] text-white font-poppins">
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
      <div className="absolute top-[472px] left-[200px] flex flex-col items-start justify-start gap-[12.59px] text-center text-[12.59px] font-abhaya-libre-extrabold">
        <div className="relative tracking-[-0.02em]">Pages</div>
        <div className="flex flex-row items-start justify-start text-[11.34px] text-white font-poppins">
          <div className="flex flex-col items-start justify-start gap-[9.45px]">
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
      <div className="absolute top-[679px] left-[35px] flex flex-col items-start justify-start gap-[5.33px] text-[11.19px] text-white font-poppins">
        <div className="relative w-[163px] h-[31.4px] z-[0]">
        <input className=' absolute outline-none bg-transparent px-4 h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[15.98px] box-border border-[0.5px] border-solid border-white' type="text" name="" id="" />
        </div>
        <div className="my-0 mx-[!important] absolute top-[3.7px] left-[123px] flex flex-col items-start justify-start gap-[5.33px] z-[1]">
          <div className="relative rounded-[15.98px] bg-yellow-400 w-[35.7px] h-6 z-[0] cursor-pointer" />
          <img
            className="absolute my-0 mx-[!important] h-[41.67%] w-[37.54%] top-[31.67%] right-[34.45%] bottom-[26.67%] left-[28.01%] max-w-full overflow-hidden max-h-full z-[1] cursor-pointer"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </div>
      <div className="absolute top-[631px] left-[35px] flex flex-col items-start justify-start gap-[6.96px] text-center text-[11.6px] font-abhaya-libre-extrabold">
       
        <div className="relative text-[10.44px] tracking-[-0.01em] font-medium font-poppins text-white">{`Stay Updated with our Latest News `}</div>
      </div>
      <div className="absolute top-[740px] left-[42px] flex flex-col items-start justify-start gap-[9.3px] text-center text-[11.62px] font-abhaya-libre-extrabold">
        <div className="relative tracking-[-0.02em]">Social</div>
        <div className="flex flex-row items-center justify-start gap-[9.88px]">
          <img
            className="relative w-[18.6px] h-[18.6px] overflow-hidden shrink-0"
            alt=""
            src="/mdifacebook.svg"
          />
          <img
            className="relative w-[16.2px] h-[13.2px]"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="relative w-[15.5px] h-[10.8px]"
            alt=""
            src="/vector5.svg"
          />
          <img
            className="relative w-[15.5px] h-[15.5px]"
            alt=""
            src="/vector6.svg"
          />
          <img
            className="relative w-[13.9px] h-[13.9px]"
            alt=""
            src="/vector7.svg"
          />
          <img
            className="relative w-[12.1px] h-[13.9px]"
            alt=""
            src="/vector8.svg"
          />
          <img
            className="relative w-[15.5px] h-[15.5px]"
            alt=""
            src="/vector9.svg"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default FooterMobile