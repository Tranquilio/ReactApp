import logo from '../images/logotext1.png'
import classes from "../profile/survey/nav.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import { set } from 'mongoose'
import { useNavigate, useLocation } from "react-router-dom"
import { FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
import loginVid from '../loginVid.mp4'
import { AuthContext } from '../context/AuthContext'

function LoginForm() {
    const auth = useContext(AuthContext)
    const [OTP, setOTP] = useState();
    const [OTPInput, setOTPInput] = useState();
    const [sendEmail, setSendEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isOTPValid, setIsOTPValid] = useState(true);
    const [displayOTPInput, setDisplayOTPInput] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const navigate = useNavigate();

    const sendOTPEmail = () => {
        async function sendOTP() {
            const result = await fetch('http://localhost:5000/login-init', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    otp: generateOTP()
                })
            });
        }
        sendOTP()
    }

    const generateOTP = () => {
        const otp = ((Math.floor(100000 + Math.random() * 900000)))
        const stringOTP = otp.toString()
        setOTP(stringOTP)
        return stringOTP
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }

    const validateEmail = () => {
        async function verifyEmail() {
            const result = await fetch('http://localhost:5000/verify-email-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                })
            });
            const overall = await result.json();
            if (overall.message == "Email is valid") {
                sendOTPEmail()
                setDisplayOTPInput(true)
            } else {
                setIsEmailValid(false)
            }
        }
        verifyEmail()
    }

    const updateOTPInput = (event) => {
        setOTPInput(event.target.value)
        setIsOTPValid(true)
    }

    const generateLoginToken = () => {
        async function navigateToPage(token) {
            console.log(token)
            auth.login(email, token)
        }
        async function generateToken() {
            const result = await fetch('http://localhost:4000/generate-redirect-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                })
            });
            const { token } = await result.json();
            navigateToPage(token)
        }
        generateToken()
    }

    const validateOTPInput = () => {
        if (OTP != OTPInput) {
            setIsOTPValid(false)
        } else {
            generateLoginToken()
        }
    }

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        //     <div className='hidden sm:block'>
        //     <img className='w-fit h-fit object-contain mt-40' src={logo} alt=""/>
        //     </div>
        //     <div className='bg-slate-800 flex flex-col justify-center'>
        //         <form className='max-w-[400px] w-full mx-auto bg-slate-600 p-8 px-8 rounded-lg'>
        //             <div className='text-4l text-center font-bold mt-16 text-gray-400 '>
        //                 Sign in to your account!
        //             </div>

        //             <div></div>
        //             { !displayOTPInput ? 
        //             <div>
        //                 <div className='flex flex-col text-gray-300 py-2'>
        //                     <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email</span>
        //                     <div text-black>
        //                         <input onChange={updateEmail} className="mt-3 " type="text" placeholder=' Enter your email!' />
        //                     </div>
        //                 </div>
        //                 <div className='gap-10 mt-6 flex justify-center items-center'>
        //                     <Button onClick={validateEmail}>
        //                         <div className={classes.nextarrow}>Get OTP</div>
        //                     </Button>
        //                 </div>
        //            </div> 
        //            : 
        //            <div className='flex flex-col text-gray-300 py-2'>
        //             <span className="text-sm font-medium 2xl:opacity-100 duration-200">OTP</span>
        //                 <div text-black>
        //                     <input onChange={updateOTPInput} className="mt-3 " type="text" placeholder=' Enter your OTP!' />
        //                 </div>
        //                 <Button onClick={validateOTPInput}>
        //                     <div className={classes.nextarrow}>Sign in</div>
        //                 </Button>
        //             </div>
        //             }
        //             { isEmailValid ? 
        //             null : 
        //             <div className='flex flex-col text-red-300 py-2'>
        //             <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email is invalid!</span>
        //            </div>
        //            }
        //            { isOTPValid ? 
        //             null : 
        //             <div className='flex flex-col text-red-300 py-2'>
        //             <span className="text-sm font-medium 2xl:opacity-100 duration-200">OTP is invalid!</span>
        //            </div>
        //            }
        //         </form>
        //     </div>
        // </div>

        <div className="items-center justify-center h-screen">
            <main className="w-full text-center">
                <div className="bg-white shadow-2xl flex h-screen">
                    {/* Picture Section (Left Side)  */}
                    <div className="w-5/6">
                        <div className='relative'>
                            <video className='w-full h-screen object-cover' src={loginVid} autoPlay loop muted boomerang />
                            <div className='absolute flex flex-col h-screen text-white w-full h-full top-0 left-0'>
                                <div className='m-auto'>
                                    <div className='text-7xl font-bold '>Make Work, <br /> Stress Free</div>
                                    <div className='text-xl mt-5 opacity-80'>Start by finding out your potential work stressors</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sign In Section (Right Side)  */}
                    <div className="w-2/6 p-5 bg-gradient-to-r from-pink-100 to-teal-50">
                        <div className='flex flex-col h-screen -mt-10 items-center'>
                            <div className='m-auto'>
                                <img src={logo} className="text-center" width={300} />
                                <div>
                                    {!displayOTPInput ?
                                        <div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-20 p-2 flex items-center rounded-xl'>
                                                <div></div>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateEmail} className="bg-white outline-none border-none text-gray-400 text-sm flex-1" type="text" placeholder='Email' />
                                            </div>
                                            <div className='mt-10 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-pink-400 text-center text-white hover:bg-pink-500" onClick={validateEmail}>Get OTP</div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-200 w-64 p-2 flex items-center mt-5 rounded-xl'>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateOTPInput} className="bg-white outline-none border-none text-gray-400 text-sm flex-1" type="text" placeholder='Enter OTP' />
                                            </div>
                                            <div className='mt-10 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-pink-400 text-center text-white hover:bg-pink-500" onClick={validateOTPInput}>Sign In</div>
                                            </div>
                                        </div>
                                    }
                                    {isEmailValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-red-300 font-medium 2xl:opacity-100 duration-200">Email is invalid!</span>
                                        </div>
                                    }
                                    {isOTPValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-red-300 font-medium 2xl:opacity-100 duration-200">OTP is invalid!</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LoginForm;