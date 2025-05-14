import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../styles/mode.css';

const Nav = () => {
  const [Mode, setMode] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);

  const toogleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    } else if (Mode === 'dark') {
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  };

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
    <div className={`m-auto ${isScrolled ? 'fixed top-0 left-0 right-0 z-10' : ''} ${Mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className={`w-[90vw] h-[70px] flex items-center justify-between m-auto my-6 ${Mode == 'light' ? 'bg-white text-black' : 'bg-black text-white'} rounded-2xl`}>
        <div className="flex mx-[100px]">
          <img className='w-[230px]' src={Mode == 'light' ? 'DigitalDinoLight.png' : 'DigitalDinoDark.png'} alt="logo" />
        </div>
        <div className=" ">
          <ul className='flex gap-0 items-center font-bold mx-[100px] delay-500'>
            <li className=' p-[10px] rounded-full w-[100px] text-center uppercase  cursor-pointer hover:bg-black delay-100 scale-[0.9] hover:text-yellow-400 hover:font-bold active:bg-yellow-400 active:font-bold'>
              <ScrollLink to="home" smooth={true} duration={500}>
                home
              </ScrollLink>
            </li>
            <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black delay-100 hover:text-yellow-400 hover:font-bold'><a href="#about">about</a></li>
            <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black delay-100 hover:text-yellow-400 hover:font-bold'><a href="#services">services</a></li>
            <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black delay-100 hover:text-yellow-400 hover:font-bold'><a href="#footer">students</a></li>
            <div className={`mx-[20px] my-1 cursor-pointer ${Mode === "light" ? "light-mode" : "dark-mode"}`} onClick={toogleMode}>
              <img src={Mode === "light" ? "Group 5.svg" : "Group 16.svg"} alt="darkmod" width={33} height={45} />
            </div>

            <div className="cursor-pointer" >
              <a href="#contact"><img className="mx-5 scale-[1.1]" src="Group 15.svg" alt="" /></a>

            </div>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Nav