import React from 'react'

const ServicesMobile = ({ mode }) => {

    const isLightMode = mode === 'light';

    return (
        <div id='services' className={`m-auto w-[95%] h-[99%] ${mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>

            <div className="relative w-full h-[800px] overflow-hidden text-left text-[19.4px] text-yellow-400-400 font-poiret-one">
                <div className="absolute top-[47px] left-[27px] w-[325px] h-[274px] font-porter-sans-block">
                    <img
                        className="absolute top-[0px] left-[0px] w-[79px] h-[76.5px]"
                        alt=""
                        src="/ellipse-14.svg"
                    />
                    <div className="absolute top-[28px] left-[8px] inline-block w-[317px] h-[82px] [backdrop-filter:blur(1.76px)]">
                        <span className='text-yellow-400'>our</span>
                        <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`}> services.</span>
                    </div>
                    <img
                        className="absolute top-[113px] left-[245px] rounded-7xl-4 w-[47px] h-[161px]"
                        alt=""
                        src="/rectangle-91.svg"
                    />
                </div>
                <div className="absolute top-[160px] left-[33px] w-[222px] h-[161.2px] text-[34.58px] text-black">
                    <img
                        className="absolute top-[0px] left-[0px] rounded-[17.71px] w-[222px] h-[161.2px] object-cover opacity-[0.65]"
                        alt=""
                        src="/seo1084769-1280-1@2x.png"
                    />
                    <div className={` ${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:1px_white] '} absolute top-[16px] left-[28.8px] inline-block w-[93.9px] h-[26.7px] [-webkit-text-stroke:1.9px_#000]`}>
                        SEO
                    </div>
                    <div className={`${isLightMode ? 'text-black [-webkit-text-stroke:1.4px_black]' : 'text-white  '} absolute top-[63px] left-[28.8px] text-[14.49px] tracking-[0.04em] leading-[16.82px] inline-block w-[138.5px] h-[51px] `}>
                        Boost your website ranking for search engines.
                    </div>
                    <img
                        className="absolute top-[127px] left-[28.8px] rounded-[18.3px] w-[56.7px] h-[23px]"
                        alt=""
                        src="/rectangle-13.svg"
                    />
                    <div className="absolute top-[130.2px] left-[42.7px] text-[13.38px] tracking-[0.08em] text-yellow-400-400-400 inline-block w-[71.4px] h-[16.2px] [-webkit-text-stroke:0.5px_#ffff00]">
                        Get
                    </div>
                </div>
                <div className="absolute top-[330px] left-[33px] w-[294.1px] h-[122.2px] text-[20.06px] text-black">
                    <img
                        className="absolute top-[0px] left-[0px] rounded-[16.11px] w-[285.5px] h-[122.2px] object-cover opacity-[0.7]"
                        alt=""
                        src="/interface3614766-640-1-1@2x.png"
                    />
                    <div className={`${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:1px_white] '} absolute top-[14.3px] left-[20.1px] inline-block w-[273.9px] h-[12.4px] `}>{`Web Design & Development:`}</div>

                    <div className={`${isLightMode ? 'text-black [-webkit-text-stroke:1.4px_black]' : 'text-white [-webkit-text-stroke:0.3px_white] '} absolute top-[51px] left-[22.4px] text-[10px] tracking-[0.04em] leading-[10.62px] inline-block w-[184.8px] h-[34px] `}>
                        Crafting visually stunning and functional business websites and launch
                        with us. This is the first step to the online presense.
                    </div>
                    <img
                        className="absolute top-[94.9px] left-[23.3px] rounded-[13.87px] w-[43px] h-[17.5px]"
                        alt=""
                        src="/rectangle-14.svg"
                    />
                </div>
                <div className="absolute top-[427px] left-[66px] text-[11.48px] tracking-[0.08em] inline-block w-[61.2px] h-[13.9px] [-webkit-text-stroke:0.4px_#ffff00]">
                    Get
                </div>
                <div className="absolute top-[461.2px] left-[34px] w-[285px] h-[122.7px] [transform:_rotate(-0.03deg)] [transform-origin:0_0] text-[23.59px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[12.77px] bg-black w-[285px] h-[122.7px] [transform:_rotate(-0.03deg)] [transform-origin:0_0]" />
                    <img
                        className="absolute top-[45.5px] left-[36.1px] w-[223px] h-[44.4px] object-cover"
                        alt=""
                        src="/capture-1@2x.png"
                    />
                    <div className="absolute top-[13.9px] left-[25.1px] inline-block w-[213.4px] h-[41px] [-webkit-text-stroke:1.3px_#ffff00] [transform:_rotate(-0.03deg)] [transform-origin:0_0]">
                        Digital marketing
                    </div>
                    <div className="absolute top-[50.1px] left-[22.3px] text-[9.84px] tracking-[0.04em] leading-[11.43px] inline-block w-[240.3px] h-[34.7px] [-webkit-text-stroke:0.5px_#ffff00] [transform:_rotate(-0.03deg)] [transform-origin:0_0]">
                        Catapulting Your Brand to New Heights. From social buzz to strategic
                        ads, we navigate the digital waves for your business to shine.
                    </div>
                    <img
                        className="absolute top-[96.4px] left-[22.3px] rounded-[14.14px] w-[43.8px] h-[17.8px]"
                        alt=""
                        src="/rectangle-16.svg"
                    />
                    <div className="absolute top-[98.3px] left-[32.5px] text-[11.7px] tracking-[0.08em] text-black inline-block w-[62.4px] h-[14.1px] [-webkit-text-stroke:0.4px_#000] [transform:_rotate(-0.03deg)] [transform-origin:0_0]">
                        Get
                    </div>
                </div>
                <div className="absolute top-[593px] left-[97px] w-[250.1px] h-[148.9px] text-[25.14px]">
                    <img
                        className="absolute top-[0px] left-[2.8px] rounded-[16.05px] w-[218px] h-[148.9px] object-cover"
                        alt=""
                        src="/phone1869510-640-1@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-[16.61px] w-[216.9px] h-[146.7px] opacity-[0.9]" />
                    <div className="absolute top-[17.2px] left-[22.2px] inline-block w-[227.9px] h-[43.7px] [-webkit-text-stroke:1.3px_#ffff00]">
                        Mobile App
                    </div>
                    <div className="absolute top-[48.2px] left-[22.2px] text-[11.95px] tracking-[0.04em] leading-[13.87px] inline-block w-[159.8px] h-[87.5px] [-webkit-text-stroke:0.6px_#ffff00]">
                        From concept to code, we craft apps that captivate and connect,
                        putting your brand at the top.
                    </div>
                    <img
                        className="absolute top-[117.9px] left-[22.7px] rounded-[17.16px] w-[53.3px] h-[21.6px]"
                        alt=""
                        src="/rectangle-17.svg"
                    />
                    <div className="absolute top-[119.6px] left-[36.1px] text-[14.21px] tracking-[0.08em] text-black inline-block w-[75.9px] h-[17.2px] [-webkit-text-stroke:0.5px_#000]">
                        Get
                    </div>
                </div>
                <img
                    className="absolute top-[595px] left-[35px] rounded-7xl-4 w-[47px] h-[147px]"
                    alt=""
                    src="/rectangle-91.svg"
                />
                <img
                    className="absolute top-[227px] left-[291px] w-[15.2px] h-[27.2px]"
                    alt=""
                    src="/polygon-4.svg"
                />
                <img
                    className="absolute top-[653px] left-[51.1px] w-[15.1px] h-[27.2px]"
                    alt=""
                    src="/polygon-5.svg"
                />
            </div>

        </div>
    )
}

export default ServicesMobile