import React, { useEffect, useRef } from 'react';
import '../styles/side.css';

const AnimatedDiv = () => {
  const containerRef = useRef(null);

  let services = [
    "digital marketing",
    "web designGN",
    "SEO",
    "APP DESIGN",
    "ADS",
    "E-COMMERCE",
    "AUTOMATION",
    "digital marketing",
    "web designGN",
    "SEO",
    "APP DESIGN",
    "ADS",
    "E-COMMERCE",
    "AUTOMATION",
    "digital marketing",
    "web designGN",
    "SEO",
    "APP DESIGN",
    "ADS",
    "E-COMMERCE",
    "AUTOMATION",
  ];
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const animation = container.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-100%)" },
        ],
        {
          duration: 90000,
          easing: "linear",
          iterations: Infinity,
        }
      );

      // Stop the animation after 10 seconds
      setTimeout(() => {
        animation.cancel();
      }, 20000);
    }
  }, []);

  return (
    <div id='conatinter' className="w-[500px] h-[70px] bg-yellow-400 rotate-[-40deg] float-right lg:my-[-20%] lg:mx-[-15%] shadow-2xl md:my-[-1%] md:mx-[-30%] flex justify-center uppercase scale-[0.7] my-[-100px]" data-animated >
      <div className="w-[1500px]  h-[100px] justify-center flex gap-[100px] items-center  bg-yellow-400" ref={containerRef}>
        {
          services.map((service, index) => (
            <span
              key={index}
              className='p-2 text-white bg-gray-900 rounded-xl shadow-2xl'
              id={service}
            >
              {service}
            </span>
          ))
        }
      </div>
    </div>
  );
};

export default AnimatedDiv;
