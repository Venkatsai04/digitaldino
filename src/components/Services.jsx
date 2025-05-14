import React from 'react'

const Services = ({mode}) => {

    const isLightMode = mode === 'light';

    return (
        <div id='services' className={`w-[95vw] h-[95vh] ${isLightMode ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} m-auto rounded-2xl my-[100px]`}>
        <div className="relative w-full h-[832px]  text-left text-[32.57px] text-yellow-400 font-poiret-one scale-[0.89] ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1280px] h-[832px] overflow-hidden my-[-40px]">
                    <div className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1280px] h-[832px] overflow-hidden">
                        <div className="absolute top-[30px] left-[103px] w-[544.8px] h-[180.6px] font-porter-sans-block">
                            <img
                                className="absolute top-[0px] left-[0px] w-[132.6px] h-[128.4px]"
                                alt=""
                                src="/ellipse-19.svg"
                            />
                            <div className="absolute top-[45px] left-[12px] inline-block w-[532.8px] h-[135.6px] [backdrop-filter:blur(2.95px)]">
                                <span>our</span>
                                <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`}> services.</span>
                            </div>
                         </div>
                        <div className="absolute top-[204px] left-[103px] w-[364px] h-[273px] text-[49.26px] text-black">
                            <img
                                className="absolute top-[0px] left-[0px] rounded-[30px] w-[364px] h-[273px] object-cover opacity-[0.65]"
                                alt=""
                                src="/seo1084769-1280-11@2x.png"
                            />
                            <div className={`absolute top-[26px] left-[28px] inline-block w-24 h-[29px]  ${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:2px_white] '}`}>
                                SEO
                            </div>
                            <div className={`absolute top-[99px] left-[28px] text-[21.59px] tracking-[0.04em] leading-[25.05px] inline-block w-[206.3px] h-[76px] ${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:1px_white] '}`}>
                                Boost your website ranking for search engines.
                            </div>
                            <div className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px]" />
                            <div className="absolute top-[216px] left-[48px] text-[25.67px] tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_#ffff00]">
                                Get
                            </div>
                        </div>
                        <img
                            className="absolute top-[207px] left-[1170px] rounded-17xl w-[38px] h-[265px]"
                            alt=""
                            src="/rectangle-8.svg"
                        />
                        <img
                            className="absolute top-[323.2px] left-[1183.5px] w-[16.4px] h-[27.7px]"
                            alt=""
                            src="/polygon-1.svg"
                        />
                        <div className="absolute top-[204px] left-[484px] w-[657.1px] h-[273px] text-[44.82px] text-black">
                            <img
                                className="absolute top-[0px] left-[0px] rounded-17xl w-[638px] h-[273px] object-cover opacity-[0.7]"
                                alt=""
                                src="/interface3614766-640-1-11@2x.png"
                            />
                            <div className={`absolute top-[32px] left-[45px] inline-block w-[612.1px] h-[27.7px] ${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:2px_white] '}`}>{`Web Design & Development:`}</div>
                            <div className={`absolute top-[114px] left-[50px] text-[20.45px] tracking-[0.04em] leading-[23.74px] inline-block w-[413px] h-[76px] [-webkit-text-stroke:1px_#000] ${isLightMode ? 'text-black [-webkit-text-stroke:2.4px_black]' : 'text-white [-webkit-text-stroke:1px_white] '}`}>
                                Crafting visually stunning and functional business websites and
                                launch with us. This is the first step to the online presense.
                            </div>
                            <img
                                className="absolute top-[212px] left-[50px] rounded-12xl w-24 h-[39px]"
                                alt=""
                                src="/rectangle-141.svg"
                            />
                        </div>
                        <div className="absolute top-[420px] left-[557px] text-[25.67px] tracking-[0.08em] text-black inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_#000]">
                            Get
                        </div>
                        <img
                            className="absolute top-[508px] left-[112px] rounded-17xl w-[38px] h-[265px]"
                            alt=""
                            src="/rectangle-15.svg"
                        />
                        <img
                            className="absolute top-[627.2px] left-[120.3px] w-[16.7px] h-[27.7px]"
                            alt=""
                            src="/polygon-2.svg"
                        />
                        <div className="absolute top-[508px] left-[178px] w-[625px] h-[269px] text-[51.74px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[28px] bg-black w-[625px] h-[269px]" />
                            <img
                                className="absolute top-[100px] left-[79px] w-[489px] h-[97px] object-cover"
                                alt=""
                                src="/capture-11@2x.png"
                            />
                            <div className="absolute top-[31px] left-[41px] inline-block w-[468px] h-[90px] [-webkit-text-stroke:2.8px_#ffff00]">
                                Digital marketing
                            </div>
                            <div className="absolute top-[110px] left-[41px] text-[21.59px] tracking-[0.04em] leading-[25.05px] inline-block w-[527px] h-[76px] [-webkit-text-stroke:1.1px_#ffff00]">
                                Catapulting Your Brand to New Heights. From social buzz to
                                strategic ads, we navigate the digital waves for your business to
                                shine.
                            </div>
                            <img
                                className="absolute top-[216px] left-[41px] rounded-12xl w-24 h-[39px]"
                                alt=""
                                src="/rectangle-141.svg"
                            />
                            <div className="absolute top-[220px] left-[63px] text-[25.67px] tracking-[0.08em] text-black inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_#000]">
                                Get
                            </div>
                        </div>
                        <div className="absolute top-[509.7px] left-[817px] w-[445px] h-[265.5px] text-[44.83px]">
                            <img
                                className="absolute top-[0px] left-[4.9px] rounded-[28.63px] w-[387.9px] h-[265.5px] object-cover"
                                alt=""
                                src="/phone1869510-640-11@2x.png"
                            />
                            <div className="absolute top-[0px] left-[0px] rounded-[29.61px] w-[386px] h-[261.6px] opacity-[0.9]" />
                            <div className="absolute top-[30.6px] left-[39.5px] inline-block w-[405.5px] h-[78px] [-webkit-text-stroke:2.4px_#ffff00]">
                                Mobile App
                            </div>
                            <div className="absolute top-[85.9px] left-[39.5px] text-[21.31px] tracking-[0.04em] leading-[24.73px] inline-block w-[284.3px] h-[156px] [-webkit-text-stroke:1.1px_#ffff00]">
                                From concept to code, we craft apps that captivate and connect,
                                putting your brand at the top.
                            </div>
                            <img
                                className="absolute top-[210.3px] left-[40.5px] rounded-[30.6px] w-[94.8px] h-[38.5px]"
                                alt=""
                                src="/rectangle-171.svg"
                            />
                            <div className="absolute top-[213.2px] left-[64.2px] text-[25.34px] tracking-[0.08em] text-black inline-block w-[135.1px] h-[30.6px] [-webkit-text-stroke:1px_#000]">
                                Get
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services