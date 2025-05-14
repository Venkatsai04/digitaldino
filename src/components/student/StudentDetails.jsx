import React from 'react'

const StudentDetails = () => {
  return (
    <div><div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[27px] px-3.5 pb-[129px] box-border gap-[107px]">
    <main className="self-stretch flex flex-col items-end justify-start gap-[42px]">
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-1">
        <OpenBuilderButton />
      </section>
    </main>
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[22px]">
      <button
        className="cursor-pointer [border:none] pt-2.5 pb-[11px] pr-3 pl-3.5 bg-black1 flex flex-row items-center justify-center"
        onClick={onGroupButtonClick}
      >
        <div className="h-[39px] w-[116px] relative bg-black1 hidden" />
        <div className="relative text-mini tracking-[0.04em] leading-[17.4px] font-poiret-one text-yellow text-left [text-shadow:0.8px_0_0_#ffff00,_0_0.8px_0_#ffff00,_-0.8px_0_0_#ffff00,_0_-0.8px_0_#ffff00] z-[1]">
          open builder
        </div>
      </button>
    </div>
  </div></div>
  )
}

export default StudentDetails