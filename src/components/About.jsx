import React from 'react'

const About = ({ mode }) => {
    const isLightMode = mode === 'light';

    return (
        <div id='about' className={`w-[95vw] h-[95vh] ${isLightMode ? 'bg-blue-300' : 'bg-[#11022a] text-white'} m-auto rounded-2xl my-[100px] flex items-center justify-center`}>
            <div className="relative w-full h-[832px] overflow-hidden text-left text-[25.85px] text-black font-poiret-one scale-[0.89] ">
                <img
                    className="absolute top-[485px] left-[677px] rounded-17xl w-[380px] h-[363px]"
                    alt=""
                    src="/rectangle-62.svg"
                />
                <div  className={`${isLightMode ? 'text-black' : 'text-white '} absolute top-[183px] left-[160px] tracking-[0.04em] leading-[30px] inline-block w-[447px] h-[184px] [-webkit-text-stroke:0.3px_#000]`}>
                    We're LOGO - your go-to digital partner. Keeping things simple, we're
                    here to transform your online presence. No jargon, just results. Let's
                    make your digital journey effortless and successful.
                </div>
                <div className="absolute top-[0px] left-[0px] w-[1274px] h-[820px]" />
                <div className="absolute top-[9px] left-[151px] w-[599.7px] h-[163px] text-[36.65px] font-porter-sans-block">
                    <img
                        className="absolute top-[0px] left-[257.7px] w-[163px] h-[163px]"
                        alt=""
                        src="/ellipse-110.svg"
                    />
                    <div className="absolute top-[59.8px] left-[0px] inline-block w-[599.7px] h-[36.5px] [backdrop-filter:blur(3.32px)]">
                        <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`}>{`who we `}</span>
                        <span className="text-yellow-400">are.</span>
                    </div>
                </div>
                <div className="absolute top-[416px] left-[227px] w-[380px] h-[363px] flex flex-row items-center justify-end text-[52.95px]">
                    <img
                        className="relative rounded-17xl w-[380px] h-[363px]"
                        alt=""
                        src="/rectangle-63.svg"
                    />
                    <div className="w-[287px] flex flex-col items-start justify-start ml-[-321px]">
                        <div className="relative w-[287px] h-40">
                            <img
                                className="absolute top-[0px] left-[96px] w-40 h-40"
                                alt=""
                                src="/ellipse-24.svg"
                            />
                            <div className="absolute top-[49px] left-[0px] inline-block w-[287px] h-[61px] [-webkit-text-stroke:1.2px_rgba(0,_0,_0,_0.2)]">
                                <span>{`Our  `}</span>
                                <span className="text-yellow-300">Moto.</span>
                            </div>
                        </div>
                        <div className="relative text-[25.85px] tracking-[0.04em] leading-[30px] inline-block w-[223px] h-[190px] shrink-0 [-webkit-text-stroke:0.3px_#000]">
                            Empower small businesses in the digital era and build an exceptional
                            online presence.
                        </div>
                    </div>
                </div>
                <img
                    className="absolute top-[416px] left-[160px] rounded-17xl w-9 h-[357px]"
                    alt=""
                    src="/rectangle-7.svg"
                />
                <img
                    className="absolute top-[74px] left-[1112px] rounded-17xl w-9 h-[363px]"
                    alt=""
                    src="/rectangle-71.svg"
                />
                <div className={`absolute top-[599px] left-[743px] tracking-[0.04em] leading-[30px] text-${isLightMode ? '' : ''} inline-block w-[247px] h-[184px] [-webkit-text-stroke:0.3px_#000]`}>
                    <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`} >{`If you dont have a “digital presence” today `}</span>
                    <span className="font-poller-one">,</span>
                    <span className={`${isLightMode ? 'text-yellow-400' : 'text-white '}`}> you are in 19th century.</span>
                </div>
                <img
                    className="absolute top-[674px] left-[888px] rounded-[71px] w-[126px] h-[126px]"
                    alt=""
                    src="/rectangle-93.svg"
                />
                <div className="absolute top-[722px] left-[899px] tracking-[0.04em] leading-[30px] inline-block w-[120px] h-[29px] [-webkit-text-stroke:1px_#000]">
                    ~founder
                </div>
                <div className="absolute top-[74px] left-[677px] w-[380px] h-[372px] flex flex-row items-start justify-end text-[52.95px]">
                    <img
                        className="relative rounded-17xl w-[380px] h-[363px]"
                        alt=""
                        src="/rectangle-63.svg"
                    />
                    <div className="w-[372px] flex flex-col items-start justify-start mt-2 ml-[-318px]">
                        <div className="relative w-[287px] h-[180px]">
                            <img
                                className="absolute top-[0px] left-[107px] w-[180px] h-[180px]"
                                alt=""
                                src="/ellipse-25.svg"
                            />
                            <div className="absolute top-[59px] left-[0px] inline-block w-[287px] h-[61px] [-webkit-text-stroke:1.2px_rgba(0,_0,_0,_0.2)]">
                                <span>{`Our  `}</span>
                                <span className="text-yellow-400">Mission.</span>
                            </div>
                        </div>
                        <div className="relative text-[25.85px] tracking-[0.04em] leading-[30px] inline-block w-[247px] h-[184px] shrink-0 [-webkit-text-stroke:0.3px_#000]">
                            Build the digital presence for every small business in this era.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About