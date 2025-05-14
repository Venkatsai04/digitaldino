import React from 'react'

const Contact = ({mode}) => {

  const isLightMode = mode === 'light';

  return (
    <div id='contact' className={`w-[95vw] h-[95vh] flex items-center justify-center ${mode=='light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} m-auto rounded-2xl my-[100px]`}>
      <div className="relative  w-full h-[832px] overflow-hidden text-left text-[30.86px] text-black font-porter-sans-block">
        <div className="absolute top-[55px] left-[223px] w-[505px] h-[137.3px]">
          <img
            className="absolute top-[0px] left-[242px] w-[137.3px] h-[137.3px]"
            alt=""
            src="/ellipse-18.svg"
          />
          <div className="absolute top-[54px] left-[0px] inline-block w-[505px] h-[30.8px] [backdrop-filter:blur(2.8px)]">
            <span className={isLightMode ? 'text-black' : 'text-white'}>{`contact  `}</span>
            <span className="text-yellow-400">us.</span>
          </div>
        </div>
        <div className="absolute top-[226px] left-[608px] w-[569px] h-[507.9px] flex flex-col items-start justify-start gap-[8.99px] text-[16.18px] text-yellow-400 font-poiret-one font-extrabold ">
          <form action="">
            <div className="relative rounded-[25.17px] bg-black w-[578.9px] h-[483.6px] z-[0] flex flex-col justify-center items-center gap-y-5" >
              <input
                type="text"
                id="name"
                name="Name or Business Name"
                placeholder="Business Name"
                class="outline-none w-[80%] text-yellow-400 h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
              />

              <input
                type="Phone"
                id="Phone"
                name="Phone or Business Phone"
                placeholder="Business Phone no"
                class="outline-none w-[80%] text-yellow-400 h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
              />
              <input
                type="Email"
                id="Email"
                name="Email or Business Email"
                placeholder="Business Email"
                class="outline-none w-[80%] text-yellow-400 h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
              />
              <input
                type="text"
                id="Service"
                name="Service or Business Service"
                placeholder="Business Service"
                class="outline-none w-[80%] text-yellow-400 h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
              />

              <textarea type="textarea"
                id="Message"
                placeholder="Business Message"
                class="outline-none w-[80%] text-yellow-400 h-[25%] bg-transparent border-white border rounded-md px-5 py-5 text-[20px]" name="postContent" rows={4} cols={40} />
              <div className="rounded-[45.84px] bg-yellow-400 w-[156.4px] overflow-hidden flex flex-row items-center justify-center p-3 box-border text-[17.98px] text-black font-poiret-one cursor-pointer">
                <div className="relative [-webkit-text-stroke:1px_#000]">
                  <button type='submit'>Submit Now</button>
                </div>
              </div>

            </div>
          </form>
        </div>


        <div className="absolute top-[351px] left-[222px] flex flex-col items-start justify-start gap-[54.77px] text-[57.38px] text-darkslategray font-poiret-one">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[26.08px]">
              <div className="relative tracking-[-0.02em] [-webkit-text-stroke:1.3px_#000]">
                <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'}`}>{`Get in Touch `}</p>
                <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'} `}>with Us!</p>
              </div>
              <div className="relative text-[23.47px] tracking-[-0.01em] font-abel text-gray-100">
                We are waiting for your message
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-0 pl-[13.040584564208984px] gap-[13.04px] text-[20.86px] font-aladin">
            <div className="flex flex-row items-start justify-start gap-[18.26px]">
              <img
                className="relative w-[41.7px] h-[41.7px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinehomerepairservice1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[3.91px]">
                <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Phone</div>
                <div className="relative text-[15.65px] font-abel text-gray-100">
                  +919705772881
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18.26px]">
              <img
                className="relative w-[41.7px] h-[41.7px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinemessage1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[3.91px]">
                <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Email</div>
                <div className="relative text-[15.65px] font-abel text-gray-100">
                  hi@website.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[229px] left-[222px] text-[66.32px] font-abel">
          logo
        </div>
      </div>
    </div >
  )
}

export default Contact