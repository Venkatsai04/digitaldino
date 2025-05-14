// Import necessary dependencies
import { React, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import RegForm from './RegForm';

const Card = ({ }) => {

  const { service } = useParams();
  const registrationFormRef = useRef(null)
  const [Service, setService] = useState(false)
  const [Form, setForm] = useState()

  const services = [
    {
      title: "SEO",
      fontsize: "40px",
      textsize: "2xl",
      description: "Skyrocket your website to the top of search engine results with our cutting-edge SEO techniques!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a265052bd18ab58c0a44f1673ba61f69a40dfa35a7eecaa811beaeff054d4d6?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
      additionalInfo: "Discover the power of SEO in driving targeted traffic to your website. We use advanced strategies to ensure your business stands out in the digital landscape."
    },
    {
      title: "Web Design & Development",
      fontsize: "28px",
      textsize: "2xl",
      description: "Transform your online presence with visually stunning websites that leave a lasting impression!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fde9bf33b34f7249dbeeab286c7a9bedb32504e83ac931ac4458194235279596?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
      additionalInfo: "Embark on a digital journey with our web design and development expertise. We craft websites that not only look great but also function seamlessly to elevate your brand."
    },
    {
      title: "Mobile App",
      fontsize: "40px",
      textsize: "xl",
      description: "Turn your app idea into reality and position your brand at the forefront of mobile innovation!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/039764fc37d8cc28fd491f5748ffa935b197d823187e2ba4f5c1b62992b7e142?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
      additionalInfo: "From concept to execution, we bring your app vision to life. Join the mobile revolution and let your brand shine on every device."
    },
    {
      title: "Digital Marketing",
      fontsize: "40px",
      textsize: "xl",
      description: "Ride the digital waves to business success with our strategic digital marketing solutions!",
      image: "",
      imageSrc: "/Group 22 (2).png",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
      additionalInfo: "Navigate the dynamic world of digital marketing with us. From creating social buzz to deploying strategic ads, we ensure your business stands out in the crowded digital landscape."
    },
    {
      title: "ADS",
      fontsize: "40px",
      textsize: "xl",
      description: "Maximize reach, captivate audiences with strategic campaigns, amplify digital presence",
      imageSrc: "/diagram-2008478_1280%201.png",
      image: "",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
    },
    {
      title: "E-Commerce",
      fontsize: "40px",
      textsize: "2xl",
      description: "Turn casual visitors into loyal customers with our e-commerce expertise!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f519afd54e3dff9d68d7bac2758ef457265a4b04abb06151442c8fe724bf14de?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
      additionalInfo: "Revolutionize your online store with our e-commerce solutions. We optimize the user experience to transform visitors into loyal customers and boost your bottom line."
    },
    {
      title: "Automation",
      fontsize: "40px",
      textsize: "lg",
      description: "Build a system that works for you—reduce effort, increase income, and watch your business thrive!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ef53dd9f72821bc680a33f5c2c1f7d5fdde7fa1d8c5afef07bf5f4f66184cf7?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
      additionalInfo: "Step into the future of business with our automation solutions. We help you build systems that work for you, minimizing effort and maximizing profits."
    },
    {
      title: "Other",
      fontsize: "40px",
      textsize: "2xl",
      description: "Unlock a world of possibilities—contact us for services tailored to your unique business needs!",
      image: '',
      imageSrc: '/Frame 18.png',
      buttonColor: "black",
      buttonTextColor: "yellow-400",
      additionalInfo: "Explore endless possibilities with our customized services. If you have a unique vision or specific needs, contact us for services tailored to propel your business forward."
    },
  ];

  useEffect(() => {

    for (let i = 0; i < services.length; i++) {
      if ((services[i].title).replace(/\s/g, '') == service) {
        setService(services[i])
      }
    }

  }, [])

  const scrollToRegistrationForm = () => {
    if (registrationFormRef.current) {
      registrationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>


      <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative flex-col">
        <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img loading="lazy" srcSet={Service && Service.image} class="w-full relative z-10" alt="" />
                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-3xl mb-5">{Service && Service.title}</h1>
                <p class="text-lg">{Service && Service.description}</p>
                <h1 class="font-bold capitalize text-lg mb-3 mt-[50px]"> How we Work ?</h1>
                <p class="text-lg">After completing your business details, our agent will contact you soon. Ensure accurate information to receive your registration email. Please fill in the address and details correctly.</p>
              </div>
              <div>
                <div class="inline-block align-bottom">

                  <button onClick={scrollToRegistrationForm} className="bg-yellow-300 opacity-100 hover:opacity-100 text-black hover:text-gray-900 rounded-full px-10 py-2 font-bold uppercase">
                    <i className="mdi mdi-cart -ml-2 mr-2 uppercase"></i>Register
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
       
          <div  ref={registrationFormRef} className='my-[200px] w-[100vw] flex items-center justify-center'>
            
            <Element name="registrationForm" className="your-registration-form-styles">
             <RegForm service={service}/>
            </Element>
          </div>
     
      </div>

    </>
  );
};

export default Card;
