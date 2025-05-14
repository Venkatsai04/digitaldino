import {React, useState, useEffect} from 'react'
import ShowServives from './ShowServices'
import ShowServicesMobile from './ShowServicesMobile'

const Show = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
      {isMobile ? <ShowServicesMobile  /> : <ShowServives />}

        </>
    )
}

export default Show