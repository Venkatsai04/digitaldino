import { useEffect } from "react";


const AbouteMobile = ({mode}) => {

  let isLightMode = mode == "light";


  
  return (
    <div id='about' className={`m-auto w-[95%] h-[99%] ${mode=='light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>

      <div className="relative w-full h-[851px] overflow-hidden text-left text-[20.19px] text-black font-poiret-one left-[20px]">
        <div className="absolute top-[58px] left-[30.9px] w-[330.3px] h-[89.8px] [transform:_rotate(0.55deg)] [transform-origin:0_0] font-porter-sans-block">
          <img
            className="absolute top-[1.8px] left-[141.5px] w-[89.8px] h-[89.8px]"
            alt=""
            src="/ellipse-15.svg"
          />
          <div className="absolute top-[32.9px] left-[-0.3px] inline-block w-[330.3px] h-[20.1px] [backdrop-filter:blur(1.83px)] [transform:_rotate(0.55deg)] [transform-origin:0_0]">
            <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`}>{`who we `}</span>
            <span className="text-yellow-400">are.</span>
          </div>
        </div>
        <div className={`${isLightMode ? 'text-black [-webkit-text-stroke:0.2px_#000]' : 'text-white '} absolute top-[168px] left-[30px] text-[18.56px] tracking-[0.04em] leading-[21.54px] inline-block w-[270px] h-[132px] `}>
          We're LOGO - your go-to digital partner. Keeping things simple, we're
          here to transform your online presence. No jargon, just results. Let's
          make your digital journey effortless and successful.
        </div>
        <div className="absolute top-[326px] left-[130px] w-[200px] h-[198px] text-[26.77px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-lg-2 w-[200px] h-[193.2px]"
            alt=""
            src="/rectangle-6.svg"
          />
          <div className="absolute top-[4px] left-[32.6px] w-[151.1px] h-[194px]">
            <div className="absolute top-[0px] left-[0px] w-[151.1px] h-[95.8px]">
              <img
                className="absolute top-[0px] left-[52.4px] w-[94.7px] h-[95.8px]"
                alt=""
                src="/ellipse-21.svg"
              />
              <div className="absolute top-[31.7px] left-[0px] inline-block w-[151.1px] h-[32.5px] [-webkit-text-stroke:0.6px_rgba(0,_0,_0,_0.2)]">
                <span>{`Our  `}</span>
                <span className="text-yellow-400">Mission.</span>
              </div>
            </div>
            <div className="absolute top-[96.1px] left-[0px] text-[13.07px] tracking-[0.04em] leading-[15.16px] inline-block w-[130px] h-[97.9px] [-webkit-text-stroke:0.2px_#000]">
              Build the digital presence for every small business in this era.
            </div>
          </div>
        </div>
        <div className="absolute top-[651px] left-[130px] w-[200px] h-[189px] text-[26.84px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[18.25px] w-[200px] h-[189px]"
            alt=""
            src="/rectangle-61.svg"
          />
          <div className="absolute top-[6.6px] left-[31.1px] w-[151.1px] h-[178.7px]">
            <div className="absolute top-[0px] left-[0px] w-[151.1px] h-[83.3px]">
              <img
                className="absolute top-[0px] left-[49.9px] w-[84.2px] h-[83.3px]"
                alt=""
                src="/ellipse-22.svg"
              />
              <div className="absolute top-[25.1px] left-[0px] inline-block w-[151.1px] h-[31.8px] [-webkit-text-stroke:0.6px_rgba(0,_0,_0,_0.2)]">
                <span>{`Our  `}</span>
                <span className="text-yellow-400">Moto.</span>
              </div>
            </div>
            <div className="absolute top-[82.9px] left-[0px] text-[13.1px] tracking-[0.04em] leading-[15.21px] inline-block w-[130px] h-[95.8px] [-webkit-text-stroke:0.2px_#000]">
              Empower small businesses in the digital era and build an exceptional
              online presence.
            </div>
          </div>
        </div>
        <div className="absolute top-[490px] left-[20px] w-[200px] h-[193.2px] text-[14.49px] text-white">
          <img
            className="absolute top-[0px] left-[0px] rounded-lg-2 w-[200px] h-[193.2px]"
            alt=""
            src="/rectangle-62.svg"
          />
          <img
            className="absolute top-[97px] left-[100px] rounded-52xl w-20 h-20"
            alt=""
            src="/Rectangle 9.svg"
          />
          <div className="absolute top-[32px] left-[26px] tracking-[0.04em] leading-[16.82px] inline-block w-[125px] h-[75.1px] [-webkit-text-stroke:0.2px_#000]">
            <span>{`If you dont have a “digital presence” today `}</span>
            <span className="font-poller-one">,</span>
            <span> you are in 19th century.</span>
          </div>
        </div>
        <div className="absolute top-[618px] left-[125px] text-[15.29px] tracking-[0.04em] leading-[17.75px] inline-block w-[71px] h-[17.2px] [-webkit-text-stroke:0.6px_#000]">
          ~founder
        </div>
      </div>
    </div>
  );
};

export default AbouteMobile;
