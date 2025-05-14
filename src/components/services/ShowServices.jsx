import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";


const Desktop3 = () => {

  const [selectedService, setSelectedService] = useState(null);
  const Navigate = useNavigate();



  const openService = (service) => {
    setSelectedService(service);
    let route = `${(service).replace(/\s/g, '')}`;
    Navigate(route);
    console.log(service);
  };
  



  return (
   <>
    {selectedService && <Card selectedService={selectedService} />}
    <div className="relative bg-white w-full h-[1724px] overflow-hidden text-left text-25xl-8 text-black font-poiret-one">
      <div className="absolute top-[210px] left-[167px] rounded-11xl w-[364px] h-[273px] bg-[url('/public/seo1084769-1280-11@2x.png')] bg-cover bg-no-repeat bg-[top] text-30xl-3">
        <div className="absolute top-[26px] left-[28px] inline-block w-24 h-[29px] text-3xl  font-[1000] [-webkit-text-stroke:1.7px_black]">
          SEO
        </div>
        <div className="absolute top-[99px] left-[28px] inline-block w-[206.3px] h-[76px] text-2xl [-webkit-text-stroke:1px_black]">
          Boost your website ranking for search engines.
        </div>
        <div   className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px] rounded-full cursor-pointer" />
        <div onClick={() => openService('SEO')} className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em]  cursor-pointer text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>

      <div className="absolute top-[211px] left-[594px] w-[657.1px] h-[273px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-17xl w-[638px] h-[273px] object-cover opacity-[0.7]"
          alt=""
          src="/interface3614766-640-1-11@2x.png"
        />
        <div className="absolute top-[32px] left-[45px] inline-block w-[612.1px] h-[27.7px] text-3xl  font-[1000] [-webkit-text-stroke:1.7px_black]">{`Web Design & Development:`}</div>
        <div className="absolute top-[114px] left-[50px] text-xl-5 inline-block w-[413px] h-[76px] text-xl [-webkit-text-stroke:1px_black]">
          Crafting visually stunning and functional business websites and launch
          with us. This is the first step to the online presense.
        </div>
       
        <div className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div onClick={() => openService('WebDesign&Development')}  className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      <div className="absolute top-[518px] left-[167px] w-[625px] h-[269px] text-32xl-7 text-yellow-400 bg-black rounded-3xl">
       
        <img
          className="absolute top-[100px] left-[79px] w-[489px] h-[97px] object-cover"
          alt=""
          src="/capture-11@2x.png"
        />
        <div className="absolute top-[31px] left-[41px] inline-block w-[468px] h-[90px] text-3xl font-[1000] [-webkit-text-stroke:1.7px_yellow]">
          Digital marketing
        </div>
        <div className="absolute top-[110px] left-[41px] text-xl font-bold [-webkit-text-stroke:0.5px_yellow]">
          Catapulting Your Brand to New Heights. From social buzz to strategic
          ads, we navigate the digital waves for your business to shine.
        </div>
       
        <div className="absolute top-[212px] left-[28px] rounded-12xl bg-yellow-400 w-24 h-[39px] rounded-full" />
        <div  onClick={() => openService('DigitalMarketing')} className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em] text-black inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_black]">
          Get
        </div>
      </div>
      <div className="absolute top-[521px] left-[834px] w-[445px] h-[265.5px] text-yellow">
        <img
          className="absolute top-[0px] left-[4.9px] rounded-[28.63px] w-[387.9px] h-[265.5px] object-cover"
          alt=""
          src="/phone1869510-640-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-[29.61px] w-[386px] h-[261.6px] opacity-[0.9]" />
        <div className="absolute top-[30.6px] left-[39.5px] inline-block w-[405.5px] h-[78px] text-3xl font-[1000] [-webkit-text-stroke:1.7px_yellow]">
          Mobile App
        </div>
        <div className="absolute top-[85.9px] left-[39.5px] text-xl font-bold [-webkit-text-stroke:0.5px_yellow]">
          From concept to code, we craft apps that captivate and connect,
          putting your brand at the top.
        </div>
        <div className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div onClick={() => openService('MobileApp')}  className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      <div className="absolute top-[841px] left-[574px] w-[667.1px] h-[273px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-[26px] w-[628px] h-[273px] object-cover"
          alt=""
          src="./diagram-2008478_1280 1.png"
        />
        <div className="absolute top-[32px] left-[55px] w-[612.1px] h-[219px] ">
          <div className="absolute top-[0px] left-[0px] inline-block w-[612.1px] h-[27.7px] text-3xl  font-[1000] [-webkit-text-stroke:1.7px_black] ">
            
            ADS
          </div>
          <div className="absolute top-[82px] left-[5px] text-2xl [-webkit-text-stroke:1px_black] w-[413px] h-[76px] ">
            Maximize reach, captivate audiences with strategic campaigns,
            amplify digital presence
          </div>
        
          <div className="absolute top-[190px] left-[18px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div  onClick={() => openService('ADS')} className="absolute top-[200px] left-[36px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      </div>
      <div className="absolute top-[841px] left-[172px] rounded-3xl w-[359px] h-[273px]  text-[36.1px] bg-[url('https://www.chrono-caisse.com/img/blog/image/60833be0040bb.jpg')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[25px] left-[20px] w-[297px] h-[225px] ">
          <div className="absolute top-[0px] left-[3px] inline-block w-[226px] h-[20.5px] text-3xl  font-[1000] [-webkit-text-stroke:1.7px_black]">
            E - Commerce
          </div>
          <div className="absolute top-[81px] left-[3px]  inline-block w-[294px] h-[76px] text-2xl [-webkit-text-stroke:1px_black]">
            Turning visitors into loyal customers and optimizing transactions.
          </div>
          <div className="absolute top-[190px] left-[18px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div onClick={() => openService('E-Commerce')} className="absolute top-[200px] left-[36px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      </div>
      <div className="absolute top-[1162px] left-[167px] w-[625px] h-[275px] text-32xl-7 text-yellow">
        <img
          className="absolute top-[0px] left-[5px] rounded-12xl w-[612px] h-[273px] object-cover"
          alt=""
          src="./20200129_BrookingsMetro_AIandAutomation-related 1.png"
        />
       
        <div className="absolute top-[37px] left-[41px] inline-block w-[468px] h-[90px] text-3xl font-[1000] [-webkit-text-stroke:1.7px_yellow]">
          Automation
        </div>
        <div className="absolute top-[116px] left-[41px] text-xl font-bold [-webkit-text-stroke:0.5px_yellow] inline-block w-[527px] h-[76px] ">
          Build a system of your Business and make that system work for you ,
          which reduces effort and increase income.
        </div>
      
        <div className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div onClick={() => openService('Automation')} className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      <div className="absolute top-[1162px] left-[845px] rounded-11xl [background:linear-gradient(180deg,_rgba(66,_0,_255,_0.65),_rgba(254,_94,_84,_0.65))] w-[364px] h-[273px] text-30xl-3 rounded-3xl">
        <div className="absolute top-[26px] left-[28px] inline-block w-40 h-[29px] text-3xl  font-[1000] [-webkit-text-stroke:1.7px_black]">
          Other
        </div>
        <div className="absolute top-[99px] left-[28px] text-2xl [-webkit-text-stroke:1px_black] w-[284px] h-[76px] ">
          Contact us for more services that you believe in ......
        </div>
        <div className="absolute top-[212px] left-[28px] rounded-12xl bg-black w-24 h-[39px] rounded-full" />
        <div onClick={() => openService('Other')} className="absolute top-[216px] left-[48px] text-2xl tracking-[0.08em] text-yellow-400 inline-block w-[136.8px] h-[31px] [-webkit-text-stroke:1px_yellow]">
          Get
        </div>
      </div>
      <div className="absolute top-[87px] left-[172px] text-[35.8px] font-porter-sans-block inline-block w-[585.4px] h-[149px] ">
        Select a service
      </div>
    </div>
   </>
  );
};

export default Desktop3;
