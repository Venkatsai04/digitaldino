import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const Navigate = useNavigate()
    // const history = useHistory();

    const [email, setEmail] = useState('');
    const [Token, setToken] = useState(undefined)
    const [isFocused, setIsFocused] = useState(false);
    const toastOptions =
    {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
    }


    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const goToLogin = () => {
        Navigate('/student/login')
    }

    const sendMagicLink = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/sendMagicLink', { email });
            if (response.status === 200) {
                // Magic link sent successfully
                Navigate(`/student/emailtemplate/${email}`);
            } else {
                // Failed to send magic link
                toast('Failed to send magic link.', toastOptions);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // User already exists
                toast(error.response.data.message, toastOptions);
            } else {
                // Other errors
                console.error('Error sending magic link:', error);
                alert('Error sending magic link. Please try again later.');
            }
        }
    };
    useEffect(() => {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        // Get the token parameter value from the URL
        const token = urlParams.get('token');
        // Check if token exists
        if (token) {
            console.log('Token:', token);
            setToken(token)

            //set the token in localstorage
            localStorage.setItem(token, 'token')
            // Here you can use the token for further processing, such as authentication
        } else {
            console.log('Token not found in URL');
        }
    }, [Token])

    useEffect(() => {

        console.log(Token);
        if (localStorage.getItem('token')) {
            Navigate('/student/main')
        }
    }, [Token])



    return (
        <div>
            <ToastContainer />
            <div className="w-full h-[100vh] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[139px] pb-[332px] pr-[52px] pl-[38px] box-border gap-[77px]">
                <div className="w-[76px] h-8 hidden z-[0]" />
                <img
                    className="w-[51px] h-[53px] absolute my-0 mx-[!important] top-[34px] left-[27px] object-cover"
                    loading="eager"
                    alt=""
                    src="/digitaldinolightmobile-1@2x.png"
                />
                <section className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-16xl-4 text-darkslategray font-poiret-one">
                    <div className="flex flex-row items-end justify-start ">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                            <div className="relative text-[30px] tracking-[-0.02em] [text-shadow:0.8px_0_0_#000,_0_0.8px_0_#000,_-0.8px_0_0_#000,_0_-0.8px_0_#000] z-[1]">
                                Signup
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-start gap-[2px] text-lg">
                            <div className="relative px-[20px] ">with Magic link.</div>
                            <div className="w-[135px] h-1 flex flex-row items-start justify-start py-0 box-border">
                                <div className="h-[3.8px] flex-1 relative bg-[#FFFF00]" />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] text-lg-3 text-black1">
                        <div className="flex-1 relative tracking-[0.04em] leading-[21.27px] [text-shadow:0.2px_0_0_#000,_0_0.2px_0_#000,_-0.2px_0_0_#000,_0_-0.2px_0_#000]">
                            Say goodbye to passwords! With our magic link, just enter your email,
                            click on link, and you're in!
                        </div>
                    </div>
                </section>
                <section className="w-[245px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[28px] text-left text-3xl-3 text-darkslategray font-poiret-one">

                        <div>
                            <div className="relative">
                                <input
                                    className="w-[250px] relative z-10 h-[35px] border-b-2 border-orange-400 outline-none px-1 text-black font-bold focus:border-black"
                                    type="email"
                                    required={true}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={`${isFocused ? "" : "Enter your email"}`}
                                />
                                <label
                                    className={`absolute z-0 left-1 transition-all ${isFocused ? 'top-[-15px] text-black font-bold text-[13px]' : 'top-[10px] text-gray-500 font-normal text-sm'
                                        }`}> Enter your email
                                </label>
                            </div>
                        </div>
                        <button onClick={sendMagicLink} className="cursor-pointer [border:none] py-1.5 pr-1 pl-3 bg-[#FFFF00] rounded-8xs flex flex-row items-center justify-end">
                            <div className="h-[38px] w-[165px] relative rounded-8xs bg-yellow hidden" />
                            <div className="relative text-2xl-8 tracking-[-0.02em] font-poiret-one text-darkslategray text-left font-extrabold z-[1]">
                                Get Magic Link
                            </div>
                        </button>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-base-1">
                            <div className="relative tracking-[-0.02em]">Already have an account, </div>
                            <div className="w-[63px] flex flex-col items-start justify-start gap-[4px] text-2xl-6">
                                <div
                                    className="relative tracking-[-0.02em] [text-shadow:0.5px_0_0_#000,_0_0.5px_0_#000,_-0.5px_0_0_#000,_0_-0.5px_0_#000] cursor-pointer"
                                    onClick={goToLogin}
                                >
                                    Login
                                </div>
                                <div className="self-stretch h-0.5 relative bg-blue-600 w-[35px]" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp