import logo from '../images/Logo.png'
import classes from "../profile/survey/nav.module.css"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { set } from 'mongoose'
import { useNavigate, useLocation } from "react-router-dom"

function LoginForm() {

    const [OTP,setOTP] = useState();
    const [OTPInput,setOTPInput] = useState();
    const [sendEmail,setSendEmail] = useState(false);
    const [email,setEmail] = useState('');
    const [isEmailValid,setIsEmailValid] = useState(true);
    const [isOTPValid,setIsOTPValid] = useState(true);
    const [displayOTPInput,setDisplayOTPInput] = useState(false);

    const navigate = useNavigate();

    const sendOTPEmail = () => {
        async function sendOTP() {
          const result = await fetch('http://localhost:5000/login-init', {
              method : 'POST',
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
                method : 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                email: email,
                })
            });
            const overall =  await result.json(); 
            console.log(overall)
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

    const validateOTPInput = () => {
        if (OTP != OTPInput) {
            setIsOTPValid(false)
        } else {
            navigate("/profile/overview");
        }
    }

  return (   
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className='hidden sm:block'>
        <img className='w-fit h-fit object-contain mt-40' src={logo} alt=""/>
        </div>
        <div className='bg-slate-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-slate-600 p-8 px-8 rounded-lg'>
                <div className='text-4l text-center font-bold mt-16 text-gray-400 '>
                    Sign in to your account!
                </div>
            
                <div></div>
                { !displayOTPInput ? 
                <div>
                    <div className='flex flex-col text-gray-300 py-2'>
                        <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email</span>
                        <div text-black>
                            <input onChange={updateEmail} className="mt-3 " type="text" placeholder=' Enter your email!' />
                        </div>
                    </div>
                    <div className='gap-10 mt-6 flex justify-center items-center'>
                        <Button onClick={validateEmail}>
                            <div className={classes.nextarrow}>Get OTP</div>
                        </Button>
                    </div>
               </div> 
               : 
               <div className='flex flex-col text-gray-300 py-2'>
                <span className="text-sm font-medium 2xl:opacity-100 duration-200">OTP</span>
                    <div text-black>
                        <input onChange={updateOTPInput} className="mt-3 " type="text" placeholder=' Enter your OTP!' />
                    </div>
                    <Button onClick={validateOTPInput}>
                        <div className={classes.nextarrow}>Sign in</div>
                    </Button>
                </div>
                }
                { isEmailValid ? 
                null : 
                <div className='flex flex-col text-red-300 py-2'>
                <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email is invalid!</span>
               </div>
               }
               { isOTPValid ? 
                null : 
                <div className='flex flex-col text-red-300 py-2'>
                <span className="text-sm font-medium 2xl:opacity-100 duration-200">OTP is invalid!</span>
               </div>
               }
            </form>
        </div>
    </div>
    
    )
}

export default LoginForm;