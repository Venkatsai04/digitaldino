import React, { useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'


const Home = ({mode}) => {

  // const [appMode, setAppMode] = useState('dark');

  // const handleModeChange = (newMode) => {
  //   setAppMode(newMode)
  //   changeMode(newMode)
  // };

  

  return (
    <div>
      <div className='m-0 '>
      <Nav  />
        <Hero mode={mode}/>
      </div>

    </div>
  )
}

export default Home