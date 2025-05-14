import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentMain = () => {

    const [Token, setToken] = useState()
    const [Mode, setMode] = useState()
    const Navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/student/signup')
        }
    }, [Token])

    useEffect(() => {
     if(localStorage.getItem('mode')){
        setMode(localStorage.getItem('mode'))
        // console.log(Mode);
     }
     else{
        setMode('light')
     }
    }, [Mode])
    

    return (
        <div className=' font-poiret-one'>
         <div className='flex justify-between items-center w-full h-[80px] '>
            <div className="h-[60px] w-[60px] mx-6 bg-yellow-400">
                <img src={Mode=='light'? "/digitaldinolightmobile-1@2x.png":"/DigitalDinoDarkMobile.png" }  alt="" />
            </div>
            <div className="w-14 h-14 mx-6 border-2 border-black rounded-full flex justify-center items-center font-poiret-one font-extrabold text-[20px] bg-yellow-300">
                A
            </div>
         </div>

         <hr className='bg-black w-[93%] m-auto'/>

         <div className="w-[85%] h-[150px] m-auto mt-10 font-poiret-one font-extrabold">
            <div className="text-4xl my-4 ">
            Build your First Website !
            </div>
            <div className="text-2xl my-4 ">
            Select your <span className='border-1 border-b-yellow-300'>Template</span>
            </div>
         </div>

         <div className="flex w-full h-max flex-wrap justify-evenly gap-y-4">
            <div className='w-[180px] h-[340px] bg-yellow-300'>
                <img className='overflow-hidden w-full' src="/example.jpg"/>
                <div className="flex flex-col">
                    <span className='font-extrabold mt-3 ml-3 text-xl'>Vintage bro</span>
                </div>
            </div>
            <div className='w-[180px] h-[340px] '>
                <img className='overflow-hidden w-full' src="/example.jpg"/>
                <div className="flex flex-col">
                    <span className='font-extrabold mt-3 ml-3 text-xl'>Vintage bro</span>
                </div>
            </div>
            <div className='w-[180px] h-[340px] bg-yellow-300'>
                <img className='overflow-hidden w-full' src="/example.jpg"/>
                <div className="flex flex-col">
                    <span className='font-extrabold mt-3 ml-3 text-xl'>Vintage bro</span>
                </div>
            </div>
            <div className='w-[180px] h-[340px] bg-yellow-300'>
                <img className='overflow-hidden w-full' src="/example.jpg"/>
                <div className="flex flex-col">
                    <span className='font-extrabold mt-3 ml-3 text-xl'>Vintage bro</span>
                </div>
            </div>
         </div> 

        </div>
    )
}

export default StudentMain