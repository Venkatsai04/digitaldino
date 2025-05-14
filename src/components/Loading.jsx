import React, { useEffect, useState } from 'react';

const Loader = ({loadingProgress}) => {

    const [appMode, setAppMode] = useState('light');
    
    useEffect(() => {
        let theme = localStorage.getItem('mode')
        setAppMode(theme)
        console.log(appMode);
      }, [appMode])

    return (

        <>
            <div className={`w-[100vw] h-[100vh] flex justify-center items-center ${appMode == 'light' ? 'bg-white' : 'bg-black'}  flex-col gap-2 text-white`}>
                <img src={appMode == 'light' ? '/DigitalDinoLightMobile.png' : '/DigitalDinoDarkMobile.png'} alt="load" width={100} />
                <p className={`${appMode == 'light' ? 'text-black' : 'text-yellow-400'}`}>{loadingProgress}%</p>
            </div>
        </>

    );
};


export default Loader