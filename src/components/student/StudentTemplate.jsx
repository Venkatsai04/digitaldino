import React from 'react'

const StudentTemplate = () => {
    return (
        <div>
            <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-6 pb-[51px] pr-[15px] pl-3.5 box-border gap-[13px] tracking-[normal] text-left text-mini text-yellow font-poiret-one">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[10px] max-w-full">
                    <header className="self-stretch flex flex-row items-center justify-between py-0 pr-[19px] pl-0 gap-[20px] text-left text-7xl-6 text-black1 font-poiret-one">
                        <img
                            className="h-[53px] w-[51px] relative object-cover"
                            loading="eager"
                            alt=""
                            src="/digitaldinolightmobile-1@2x.png"
                        />
                        <div className="h-[45px] flex flex-row items-start justify-center pt-1.5 pb-[13px] pr-4 pl-[13px] box-border relative">
                            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-yellow box-border border-[0px] border-solid border-black1" />
                            <div className="self-stretch relative tracking-[-0.02em] [text-shadow:0.8px_0_0_#000,_0_0.8px_0_#000,_-0.8px_0_0_#000,_0_-0.8px_0_#000] z-[1]">
                                A
                            </div>
                        </div>
                    </header>
                    <div className="self-stretch h-0.5 flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full">
                        <img
                            className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                            loading="eager"
                            alt=""
                            src="/line-2.svg"
                        />
                    </div>
                </div>
                <section className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[13px] box-border max-w-full text-left text-[27.8px] text-darkslategray font-poiret-one">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                        <div className="relative tracking-[-0.02em] [text-shadow:0.6px_0_0_#000,_0_0.6px_0_#000,_-0.6px_0_0_#000,_0_-0.6px_0_#000]">
                            Template name
                        </div>
                        <div className="self-stretch h-[55px] relative text-[18.3px] tracking-[0.04em] leading-[21.27px] text-black1 inline-block shrink-0">{`Browse our selection of themes to find the perfect look for your website. `}</div>
                    </div>
                </section>
                <section className="h-[494px] flex flex-row items-start justify-start pt-0 pb-2 pr-[15px] pl-[22px] box-border max-w-full text-left text-[64.1px] text-white font-poiret-one">
                    <div className="self-stretch bg-black1 flex flex-row items-start justify-start py-[191px] pr-[78px] pl-[71px] box-border max-w-full mq450:py-[124px] mq450:px-5 mq450:box-border">
                        <div className="h-[486px] w-[324px] relative bg-black1 hidden max-w-full" />
                        <div className="relative tracking-[0.04em] leading-[74.42px] z-[1]">
                            theme
                        </div>
                    </div>
                </section>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[22px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                        <div className="bg-black1 flex flex-row items-center justify-center pt-[11px] pb-2.5 pr-10 pl-[37px]">
                            <div className="h-[39px] w-[116px] relative bg-black1 hidden" />
                            <div
                                className="relative tracking-[0.04em] leading-[17.4px] [text-shadow:0.8px_0_0_#ffff00,_0_0.8px_0_#ffff00,_-0.8px_0_0_#ffff00,_0_-0.8px_0_#ffff00] cursor-pointer z-[1]"

                            >
                                Select
                            </div>
                        </div>
                        <button className="cursor-pointer [border:none] pt-3 pb-[9px] pr-7 pl-[29px] bg-gainsboro flex flex-row items-start justify-start gap-[9px] hover:bg-silver">
                            <div className="h-[39px] w-[116px] relative bg-gainsboro hidden" />
                            <div className="relative text-mini tracking-[0.04em] leading-[17.4px] font-poiret-one text-black1 text-left [text-shadow:0.8px_0_0_#000,_0_0.8px_0_#000,_-0.8px_0_0_#000,_0_-0.8px_0_#000] z-[1]">
                                Demo
                            </div>
                            <input
                                className="m-0 h-[15px] w-[15px] relative z-[1]"
                                type="checkbox"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTemplate