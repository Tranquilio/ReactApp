import logo from './images/Logo.png'
import classes from "./profile/survey/nav.module.css"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

function LoginForm() {

    const [OTP,setOTP] = useState();
    const [sentEmail,setSentEmail] = useState(false);

    useEffect(() => {
        if (sentEmail) {
        async function sendOTP() {
          const result = await fetch('http://localhost:5000/login-init', {
              method : 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: generateOTP()
              })
          }); 
        }      
        sendOTP();
    }
      },[sentEmail]);

    const generateOTP = () => {
        setOTP(Math.floor(100000 + Math.random() * 900000))
        return OTP
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
                { !sentEmail ? 
                <div>
                <div className='flex flex-col text-gray-300 py-2'>
                <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email</span>
                    <div text-black>
                    <input className="mt-3 " type="text" placeholder=' Enter your email!' />
                    </div>
                </div>
                <div className='gap-10 mt-6 flex justify-center items-center'>
                    <Button onClick={() => {setSentEmail(true)}}>
                    <div className={classes.nextarrow}>Get OTP</div>
                    </Button>
               </div>
               </div> : 
               <div className='flex flex-col text-gray-300 py-2'>
                <span className="text-sm font-medium 2xl:opacity-100 duration-200">Email</span>
                    <div text-black>
                    <input className="mt-3 " type="text" placeholder=' Enter your OTP!' />
                    </div>
                </div>}
            </form>
        </div>
    </div>
    
    )
}

export default LoginForm;