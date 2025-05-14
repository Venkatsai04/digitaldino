import React from "react";
import SideMobile from './SideMObile'
import { useState, useEffect } from "react";
import MenuRes from "./MenuRes";
import { useNavigate } from "react-router-dom";


const HomeMobile = ({ mode }) => {

  const Navigate = useNavigate()

  const moveToSome = () => {
    Navigate('/services')
  }

  const [Mode, setMode] = useState('light')
  const [Menu, setMenu] = useState('line')
  const [isScrolled, setIsScrolled] = useState(false);


  const toogleMode = () => {
    if (Mode === "light") {
      window.location.reload()
      setMode(mode => {
        localStorage.setItem('mode', 'dark');
        return 'dark';
        
        
      });
    } else if (Mode === "dark") {
      window.location.reload()
      setMode(mode => {
        localStorage.setItem('mode', 'light');
        return 'light';
      });
    }
  };
  

  useEffect(() => {
    const theme = localStorage.getItem('mode');
    setMode(theme || 'light'); // set default to 'light' if no stored value
    // window.location.reload()
  }, [Mode]);
  

  const toogleMenu = () => {
    if (Menu == "cross") {
      setMenu('line')
      console.log(Menu);
    }
    else if (Menu == "line") {
      setMenu('cross')
      console.log(Menu);
    }
  }

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    const theme = localStorage.getItem('mode');
    setMode(theme || 'light');

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [Mode]);




  return (

    <div className={`  ${Mode == 'light' ? 'bg-white text-black' : 'bg-black text-white'}   relative w-full h-[99%] overflow-hidden text-left text-[25.06px] text-black font-inter `}>
      {
        Menu == "line" ? '' : <MenuRes mode={Mode} />
      }
     <div className={`${Mode == 'light' ? 'bg-white' : 'bg-black'} h-full`}>
     <div className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-10' : ''} m-auto w-[95%] h-16 ${Mode == 'light' ? 'bg-white text-black' : 'bg-black text-white'} my-4 rounded-xl overflow-hidden `}>
        {/* nav */}
        <div className="flex justify-between items-center w-full h-full">
          <div className=" flex items-center">
            <img className="w-[50px]" src={Mode=="light" ? '/DigitalDinoLightMobile.png' : 'DigitalDinoDarkMobile.png'} alt="logo"  />
            <p className="ml-[-6px] text-[#F5C223] font-poiret-one [-webkit-text-stroke:0.7px_#F5C223] ">igitalDino</p>
          </div>
          <div className="flex justify-evenly mx-[30px] gap-[20px]" >
            <div className=""  >
              <img onClick={toogleMode} src={Mode === "light" ? "Group 5.svg" : "Group 16.svg"} alt="mode" width={'30px'} />
            </div>
            <div id="mode" className="" onClick={toogleMenu}>


              {
                Menu === 'line' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M22 17.5H15" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 17.5H2" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6.5H19" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 6.5H2" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M9 14H15C16.1 14 17 14.5 17 16V18C17 19.5 16.1 20 15 20H9C7.9 20 7 19.5 7 18V16C7 14.5 7.9 14 9 14Z" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 5H15C16.1 5 17 5.5 17 7V9C17 10.5 16.1 11 15 11H9C7.9 11 7 10.5 7 9V7C7 5.5 7.9 5 9 5Z" stroke={`${Mode === "light" ? '#292D32' : 'white'}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }


            </div>
          </div>
        </div>

      </div>
     </div>
      <div className={`m-auto w-[95%] h-[99%] ${Mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>

        {/* hero */}
        <div className="relative top-[40px] left-[-16px] w-[580px] h-[806.3px] overflow-hidden text-[17.18px] font-poiret-one ">
          <div className="absolute top-[348px] left-[0px] w-[580px] h-[388.3px] overflow-hidden ">
            <div className="absolute top-[0px] left-[62px] inline-block w-[242px] h-[105px] [-webkit-text-stroke:0.3px_#000]">
              <p className="m-0">{`Without an online presence , you will fall back to decades. At LOGO , we keep it simple and effective. Elevate your brand with our digital solutions tailored just for you. `}</p>
              <p className="m-0">{` `}</p>
            </div>
            <div className="absolute top-[149px] left-[56px] rounded-[29.96px] bg-black w-[175px] h-[40.1px] text-[18.03px] text-yellow shadow-[10px_8px_yellow]">
              <img
                className="absolute h-[52.08%] w-[9.77%] top-[28.25%] right-[8.91%] bottom-[19.67%] left-[81.31%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/Vector.svg"
              />
              <div className="absolute top-[7px] left-[31px] inline-block w-[100.7px] h-[22px] [-webkit-text-stroke:0.7px_#ffff00] " onClick={moveToSome}>
                <span className="tracking-[0.08em]">get star</span>
                <span className="tracking-[0.05em]">t</span>
                <span className="tracking-[0.08em]">ed</span>
              </div>
            </div>

          </div>
          <div className="absolute top-[0px] left-[0px] w-[469.3px] h-[332px] overflow-hidden text-left text-[23.69px] text-white font-porter-sans-block">
            <div className="absolute top-[0px] left-[56px] w-[413.3px] h-[332px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] w-[413.3px] h-[332px]">
                <img
                  className="absolute top-[75px] left-[96px] w-[188.2px] h-[188.2px]"
                  alt=""
                  src="/ellipse-2.svg"
                />
                <div className="absolute top-[154.8px] left-[121.6px]">Online.</div>
                <img
                  className="absolute top-[0px] left-[0px] w-[132px] h-[130px]"
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className="absolute top-[47.2px] left-[16.4px] inline-block w-[397px] h-[28.1px] [backdrop-filter:blur(2.15px)] text-blue-950">
                  <span className="text-white">time</span>
                  <span className={`text-black ${Mode == "light" ? 'text-black' : 'text-white'}`}>{` to be `}</span>
                </div>
                <img
                  className="absolute top-[252px] left-[122px] w-[87px] h-20"
                  alt=""
                  src="/ellipse-3.svg"
                />
              </div>
              <div className="absolute top-[272px] left-[7px] text-[25.52px] font-poiret-one inline-block w-[216px] h-[60px] [-webkit-text-stroke:0.6px_rgba(0,_0,_0,_0.2)] text-black">
                <p className={`m-0 ${Mode == "light" ? 'text-black' : 'text-white'}`}>Ignite your <span className={Mode == "light" ? 'text-black' : 'text-black'}>Business</span></p>
                <p className="m-0">
                  <span className="text-white">online</span>
                  <span className={Mode == "light" ? 'text-black' : 'text-white'}> with us.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <SideMobile />
      </div>

    </div>
  );
};

export default HomeMobile;
