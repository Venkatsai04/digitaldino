import React from 'react'
import '../styles/menu.css';
import { Link } from 'react-scroll';

const MenuRes = ({mode}) => {

    return (
        <div className={`absolute my-[90px] h-[100vh] z-[1000000] ${mode=='light' ? 'bg-white' : 'bg-black'} `} id='menu'>
            <ul className='flex flex-col gap-5 items-center justify-start font-bold mx-[100px]  h-full my-4'>
                <li className='p-[10px] rounded-full w-[100px] text-center uppercase  cursor-pointer hover:bg-black delay-300 hover:text-yellow-400 hover:font-bold active:text-yellow-400'><a href="#home">home</a></li>
                <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black  hover:text-yellow-400 hover:font-bold'><a href="#about">about</a></li>
                <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black  hover:text-yellow-400 hover:font-bold'><a href="#services">services</a></li>
                <li className=' p-[10px] rounded-full w-[100px] text-center uppercase scale-[0.9] cursor-pointer hover:bg-black  hover:text-yellow-400 hover:font-bold'><a href="#students">students</a></li>

                <div className="cursor-pointer delay-500" id='img'>
                <Link to="contact" smooth duration={500} offset={-50}>
                    <img className="mx-[60px] scale-[1.1]" src="Group 15.svg" alt="" />
               </Link>
                </div>
            </ul>
        </div>
    )
}

export default MenuRes