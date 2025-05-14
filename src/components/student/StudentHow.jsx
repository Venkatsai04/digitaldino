import React from 'react'
import StudentHowItWorks from './StudentHowItWorks'
import {  useNavigate } from 'react-router-dom'

const Student = () => {


  const Navigate = useNavigate()

  const goToSign = ()=>{
    Navigate('/student/signup')
  }

  return (
    <>
      <div className="w-full relative bg-white h-[100vh] overflow-hidden text-left text-base-2 text-black font-poiret-one">
        <div className="absolute top-[23px] left-[-108px] w-[188px] overflow-hidden flex flex-col items-end justify-center">
          <img
            className="w-[51px] relative h-[53px] object-cover"
            alt=""
            src="/digitaldinolightmobile-1@2x.png"
          />
        </div>
        <div className="absolute top-[96px] left-[-108px] w-[646.3px] h-[1021.9px] overflow-hidden">
          <div className="absolute top-[628px] left-[59px] rounded-[50%] bg-black w-[172px] h-[169px]" />
          <img
            className="absolute top-[417px] left-[0px] w-[646.3px] h-[604.9px] object-contain"
            alt=""
            src="/ellipse-7.svg"
          />
          <div className="absolute top-[0px] left-[137px] w-[447.3px] h-[680px]">
            <div className="absolute top-[0px] left-[0px] w-[308.3px] h-[135.2px] text-[17.6px] text-yellow font-porter-sans-block">
              <img
                className="absolute top-[0px] left-[0px] w-20 h-[77.1px]"
                alt=""
                src="/ellipse-1.svg"
              />
              <div className="absolute top-[32.4px] left-[13.3px] inline-block w-[295px] h-[71.7px]">
                <span className="text-yellow-400">for</span>
                <span className="text-black"> students.</span>
              </div>
              <div className="absolute top-[107.8px] left-[70px] w-[171.1px] h-[27.4px]" />
            </div>
            <div className="absolute top-[108.3px] left-[13.3px] w-[434px] h-[32.4px] flex flex-col items-start justify-start text-[27.8px] text-darkslategray">
              <div className="relative tracking-[-0.02em] [text-shadow:0.6px_0_0_#000,_0_0.6px_0_#000,_-0.6px_0_0_#000,_0_-0.6px_0_#000]">{`Personal website `}</div>
            </div>
            <div className="absolute top-[158.6px] left-[13.3px] text-[14.9px] tracking-[0.04em] leading-[17.31px] inline-block w-[316.6px] h-[70.4px] [text-shadow:0.2px_0_0_#000,_0_0.2px_0_#000,_-0.2px_0_0_#000,_0_-0.2px_0_#000]">
              Design , Build and Host your personal website (portfolio) with us .
              Our experienced team is here to mentor and guide students through
              the process of creating their own websites.
            </div>
            <div className="absolute top-[450px] left-[0px] rounded-[45.84px] bg-black w-[156.4px] overflow-hidden flex flex-row items-center justify-center px-4 py-4 box-border text-[17.98px] cursor-pointer shadow-[10px_8px_yellow] z-[1000000]" onClick={moveTo}>
              <div className="relative tracking-[2px] [-webkit-text-stroke:1px_#ffff00] cursor-pointer "
              onClick={goToSign}
              >
                Build now
              </div>
            </div>
            <img
              className="absolute top-[546px] left-[156px] w-44 h-[134px] object-cover"
              alt=""
              src="/istockphoto1219854221612x612-1@2x.png"
            />
            <div className="absolute top-[417px] left-[13px] text-[11.7px] tracking-[0.04em] leading-[12.44px] inline-block w-[156px] h-[13px] [text-shadow:0.1px_0_0_#000,_0_0.1px_0_#000,_-0.1px_0_0_#000,_0_-0.1px_0_#000]">
              Scroll down to see how it works
            </div>
            <img
              className="absolute top-[516px] left-[127px] rounded-[47px] w-[77.7px] h-[78.7px] object-contain"
              alt=""
              src="/istockphoto1047259374612x612-1@2x.png"
            />
            <div className="absolute top-[313px] left-[13px] w-[116px] h-[32.5px] flex flex-row items-center justify-start">
              <div className="w-[99.1px] h-[32.5px] flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-8 relative h-[32.5px]"
                  alt=""
                  src="/iconarrowleft.svg"
                />
                <div className="w-[57.1px] relative tracking-[1.8px] inline-block h-[13.7px] shrink-0 [text-shadow:0.6px_0_0_#000,_0_0.6px_0_#000,_-0.6px_0_0_#000,_0_-0.6px_0_#000]">
                  Easy
                </div>
              </div>
              <img
                className="w-[30px] relative h-[30px] ml-[-13px]"
                alt=""
                src="/group-28.svg"
              />
            </div>
            <div className="absolute top-[358px] left-[13px] w-[116px] h-[32.5px] flex flex-row items-center justify-start">
              <div className="w-[99.1px] h-[32.5px] flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-8 relative h-[32.5px]"
                  alt=""
                  src="/iconarrowleft.svg"
                />
                <div className="w-[57.1px] relative tracking-[1.8px] inline-block h-[13.7px] shrink-0 [text-shadow:0.6px_0_0_#000,_0_0.6px_0_#000,_-0.6px_0_0_#000,_0_-0.6px_0_#000]">
                  Fast
                </div>
              </div>
              <img
                className="w-[30px] relative h-[30px] ml-[-13px]"
                alt=""
                src="/group-28.svg"
              />
            </div>
          </div>
          <div className="absolute top-[267px] left-[150px] w-[138px] h-[32.5px] flex flex-row items-center justify-start gap-[8px]">
            <div className="w-[99.1px] h-[32.5px] flex flex-row items-center justify-start gap-[10px]">
              <img
                className="w-8 relative h-[32.5px]"
                alt=""
                src="/iconarrowleft.svg"
              />
              <div className="w-[57.1px] relative tracking-[1.8px] inline-block h-[13.7px] shrink-0 [text-shadow:0.6px_0_0_#000,_0_0.6px_0_#000,_-0.6px_0_0_#000,_0_-0.6px_0_#000]">
                Simple
              </div>
            </div>
            <img
              className="w-[30px] relative h-[30px]"
              alt=""
              src="/group-28.svg"
            />
          </div>
        </div>
      </div>
      <StudentHowItWorks/>
    </>
  )
}

export default Student