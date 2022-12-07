import logo from '../assets/logotext.png'
import classes from "../profile/employeeData/nav.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import { set } from 'mongoose'
import { useNavigate, useLocation } from "react-router-dom"
import { FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
// import loginVid from '../loginVid.mp4'
import backgroundImg from '../assets/green-marble-texture-background_38607-681.webp'
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
    const [firstScreen, setfirstScreen] = useState(true);

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
                setfirstScreen(false)
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
            const result = await fetch('http://localhost:5000/generate-redirect-token', {
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
            console.log("hello!")
            generateLoginToken()
        }
    }

    return (
        <div className="items-center justify-center h-screen">
            <main className="w-full text-center">
                <div className="bg-white shadow-2xl flex h-screen">
                    {/* Picture Section (Left Side)  */}
                    <div className="w-5/6">
                        <div className='relative'>
                            <img className='w-full h-screen object-cover' src={backgroundImg} />
                            <div className='absolute flex flex-col h-screen text-white w-full h-full top-0 left-0'>
                                <div className='m-auto'>
                                    <div className='text-big font-bold '>Wellbeing Analytics <br /> For your workplace</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sign In Section (Right Side)  */}
                    <div className="w-2/6 p-5 bg-gradient-to-r from-pink-50 to-teal-50">
                        <div className='flex flex-col h-screen -mt-10 items-center'>
                            <div className='m-auto'>
                                <img src={logo} className="text-center" width={250} />
                                <div>
                                    {!displayOTPInput ?
                                        <div>
                                            <div> </div>
                                            <div className='bg-turquoise border-2 border-gray-20 p-4 flex items-center rounded-xl'>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateEmail} className="bg-white outline-none border-none text-gray-400 font-raleway rounded-md text-xl flex-1" type="text" placeholder='Email' />
                                            </div>
                                            <div className='mt-1 px-4'>
                                                <div className="cursor-pointer p-3 rounded-md bg-[#82A284] text-center text-white text-xl font-raleway hover:bg-[#7D9D7F]" onClick={validateEmail}>Get OTP</div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-200 w-64 p-2 flex items-center mt-5 rounded-xl'>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateOTPInput} className="bg-white outline-none border-none text-gray-400 font-raleway text-xl flex-1" type="text" placeholder='Enter OTP' />
                                            </div>
                                            <div className='mt-8 px-4'>
                                                <div className="cursor-pointer p-3 rounded-md bg-[#82A284] text-center text-white text-xl font-raleway hover:bg-[#80A080]" onClick={validateOTPInput}>Sign In</div>
                                            </div>
                                        </div>
                                    }
                                    {isEmailValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-xl text-[#82A284] font-medium 2xl:opacity-100 duration-200">Email is invalid!</span>
                                        </div>
                                    }
                                    {isOTPValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-[#82A284] font-medium 2xl:opacity-100 duration-200">OTP is invalid!</span>
                                        </div>
                                    }       
                                    {firstScreen ?
                                    <div className='mt-2 px-4'>
                                        <div className="cursor-pointer p-3 rounded-md bg-white text-center text-black text-xl font-raleway" onClick={() => navigate("/signup")}>Sign Up</div>
                                    </div>
                                    : 
                                    null
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