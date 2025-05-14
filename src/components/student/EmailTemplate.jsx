import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const EmailTemplate = () => {

  const Navigate = useNavigate()
  const [Token, setToken] = useState()
  const { email } = useParams();

  const goToSignUp = () => {
    Navigate('/student/signup')
  }

  const getEmailServiceUrl = (email) => {
    const domain = email.split('@')[1];
    switch (domain) {
      case 'gmail.com':
        return 'https://mail.google.com';
      case 'outlook.com':
        return 'https://outlook.live.com';
      case 'yahoo.com':
        return 'https://mail.yahoo.com';
      // Add more cases for other email services as needed
      default:
        return 'https://mail.google.com'; // Default to Gmail
    }
  };

  const goToMail = () => {
    const emailServiceUrl = getEmailServiceUrl(email);
    window.open(emailServiceUrl, '_blank');
  };

  useEffect(() => {
    console.log(Token);
    if (localStorage.getItem('token')) {
      Navigate('/student/main')
    }
  }, [Token])


  return (
    <div>
     
      <div className="w-full h-[100vh] relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[140px] px-5 pb-[398px] box-border">
        <img
          className="w-[51px] h-[53px] absolute my-0 mx-[!important] top-[33px] left-[28px] object-cover"
          loading="eager"
          alt=""
          src="/digitaldinolightmobile-1@2x.png"
        />
        <section className="w-[332px] h-[306px] flex flex-col items-center justify-start pt-7 pb-[15px] pr-[17px] pl-[21px] box-border relative gap-[45px] text-center text-lg-3 text-black1 font-poiret-one">
          <div
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[18.47px] bg-white shadow-[4.1px_4.1px_4.1px_rgba(0,_0,_0,_0.25),_-4.1px_4.1px_6.16px_rgba(0,_0,_0,_0.7)] cursor-pointer"
            onClick={goToMail}
          />
          <div className="self-stretch flex-1 flex flex-col items-center justify-end pt-16 px-0 pb-0 relative">
            <img
              className="w-[45px] h-[45px] absolute my-0 mx-[!important] top-[0px] left-[120px] overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/email.svg"
            />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-1">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[63px] relative tracking-[0.04em] leading-[21.27px] inline-block shrink-0 [text-shadow:0.2px_0_0_#000,_0_0.2px_0_#000,_-0.2px_0_0_#000,_0_-0.2px_0_#000] z-[1]">{`We Emailed a Magic link to `}</div>
                  <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 mt-[-37px] text-left text-xl-8 text-darkslategray">
                    <div className="flex flex-row items-end justify-start">
                      <div className="relative tracking-[-0.02em] [text-shadow:0.5px_0_0_#000,_0_0.5px_0_#000,_-0.5px_0_0_#000,_0_-0.5px_0_#000] z-[1]">
                        {email}
                      </div>
                      <div onClick={goToSignUp} className="relative text-xs-8 tracking-[-0.02em] cursor-pointer [text-shadow:0.3px_0_0_#0000ff,_0_0.3px_0_#0000ff,_-0.3px_0_0_#0000ff,_0_-0.3px_0_#0000ff] z-[2]">
                        edit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative tracking-[0.04em] leading-[21.27px] [text-shadow:0.2px_0_0_#000,_0_0.2px_0_#000,_-0.2px_0_0_#000,_0_-0.2px_0_#000] z-[1] mt-[-7px]">
                Check your Email to complete the process by clicking the button to
                login or signup
              </div>
            </div>
          </div>
          <div className="w-[132px] flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border text-left text-base-4 text-darkslategray">
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="h-[35px] flex-1 relative bg-yellow-400 cursor-pointer hover:bg-yellow-200  " onClick={goToMail} />
              <div className="flex-1 relative tracking-[-0.02em] cursor-pointer  [text-shadow:0.4px_0_0_#0000ff,_0_0.4px_0_#0000ff,_-0.4px_0_0_#0000ff,_0_-0.4px_0_#0000ff] z-[2] ml-[-86px]" onClick={goToMail}>{`check inbox `}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EmailTemplate