import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const AndroidLarge1 = () => {
  const [selectedService, setSelectedService] = useState(null);
  const Navigate = useNavigate();

  const services = [
    {
      title: "SEO",
      fontsize: "40px",
      textsize: "2xl",
      description: "Boost your website ranking for search engines.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a265052bd18ab58c0a44f1673ba61f69a40dfa35a7eecaa811beaeff054d4d6?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
    },
    {
      title: "Web Design & Development",
      fontsize: "28px",
      textsize: "2xl",
      description: "Crafting visually stunning and functional business websites and launch with us. ",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fde9bf33b34f7249dbeeab286c7a9bedb32504e83ac931ac4458194235279596?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
    },
    {
      title: "Mobile App",
      fontsize: "40px",
      textsize: "xl",
      description: "From concept ,we craft apps that puts your brand at the top.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/039764fc37d8cc28fd491f5748ffa935b197d823187e2ba4f5c1b62992b7e142?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
    },
    {
      title: "Digital Marketing",
      fontsize: "40px",
      textsize: "xl",
      description: "From social buzz to strategic ads, we navigate the digital waves for your business to shine.",
      image: "",
      imageSrc: "/Group 22 (2).png",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
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
      description: "Turning visitors into loyal customers.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f519afd54e3dff9d68d7bac2758ef457265a4b04abb06151442c8fe724bf14de?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "black",
      buttonTextColor: "yellow-400",
    },
    {
      title: "Automation",
      fontsize: "40px",
      textsize: "lg",
      description: "Build a system of your business and make that system work for you, which reduces effort and increases income.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ef53dd9f72821bc680a33f5c2c1f7d5fdde7fa1d8c5afef07bf5f4f66184cf7?apiKey=3c03246c9c984853b53465387e6b110f",
      buttonColor: "yellow-400",
      buttonTextColor: "black",
    },
    {
      title: "Other",
      fontsize: "40px",
      textsize: "2xl",
      description: "Contact us for more services that you believe in ......",
      image: '',
      imageSrc: '/Frame 18.png',
      buttonColor: "black",
      buttonTextColor: "yellow-400"
    },
  ];


  const openService = (service) => {
    setSelectedService(service);
    let route = `${(service.title).replace(/\s/g, '')}`;
    Navigate(route);
  };

  return (
    <>
      <div className="bg-white flex max-w-[480px] w-full flex-col mx-auto pl-10 pr-8 py-12">
        <header className="text-black text-2xl self-center whitespace-nowrap mt-4 font-porter-sans-block">
          Select a service
        </header>
        {services.map((service, index) => (
          <form key={index} className="flex-col overflow-hidden font-extrabold font-poiret-one self-center relative flex aspect-[1.35] items-stretch mt-16 pl-5 pr-9 pt-7 pb-4 rounded-3xl">

            <img loading="lazy" srcSet={service.image} src={service.imageSrc} className="absolute h-full w-full object-cover object-center inset-0" />
            <div className={`relative text-${service.buttonColor} text-[${service.fontsize}] [-webkit-text-stroke:1px_${service.buttonColor}]`}>
              {service.title}
            </div>
            <div className={`relative text-${service.buttonColor}  mt-5 text-${service.textsize} [-webkit-text-stroke:0.8px_${service.buttonColor}]`}>{service.description}</div>
            <button
              className={`w-[30%] relative text-${service.buttonTextColor} text-xl tracking-widest bg-${service.buttonColor} justify-center items-stretch mt-11 pl-4 pr-7 py-2 rounded-3xl`}
              onClick={() => openService(service)}
            >
              Get
            </button>
          </form>
        ))}
        {selectedService && <Card selectedService={selectedService} />}
      </div>
    </>
  );
};

export default AndroidLarge1;