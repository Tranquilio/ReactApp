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
import { AuthContext } from '../context/AuthContext'
import Selector from '../components/Selector'

function SignUpForm() {
    const auth = useContext(AuthContext)
    const [OTP, setOTP] = useState();
    const [OTPInput, setOTPInput] = useState();
    //const [sendEmail, setSendEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [cid, setCid] = useState(true);
    const [uid, setUid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [IsCompanyNameValid, setIsCompanyNameValid] = useState(true);
    const [isOTPValid, setIsOTPValid] = useState(true);
    //const [displayOTPInput, setDisplayOTPInput] = useState(false);
    const [signUpState, setSignUpState] = useState(1);

    const navigate = useNavigate();

    const generateOTP = () => {
        const otp = ((Math.floor(100000 + Math.random() * 900000)))
        const stringOTP = otp.toString()
        setOTP(stringOTP)
        return stringOTP
    }

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

    
    const updateOTPInput = (event) => {
        setOTPInput(event.target.value)
        setIsOTPValid(true)
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }

    const updateCompanyName = (event) => {
        setCompanyName(event.target.value)
        setIsCompanyNameValid(true)
    }

    const goBack = () => {
        setSignUpState(signUpState-1)
    }

    const validateEmail = () => {

        //verify Email - validity of an email 
        //check if email exists already in Mongo
        // check if cid exists

        var cid = Math.random().toString(36).replace('0.', '')

        async function checkCid() {
            const result = await fetch('http://localhost:5000/checkId-unique', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cid: cid
                })
            });
            const output = await result.json();
            if (output == true) {
                const uid = Math.random().toString(36).replace('0.', '')
                setUid(uid)
                setCid(cid)
                sendOTPEmail()
                setSignUpState(2)
            } else {
                cid = Math.random().toString(36).replace('0.', '')
                checkCid()
            }
        }

        async function obtainCompanyDetails() {
            const result = await fetch('http://localhost:5000/obtain-company-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                })
            });
            const companyDetails = await result.json();
            if (companyDetails == null) {
                checkCid()
            } else {
                setIsEmailValid(false)
            }
        }

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
                obtainCompanyDetails()
            } else {
                setIsEmailValid(false)
            }
        }
        verifyEmail()
    }

    const validateCompanyName = () => {
        async function verifyCompanyName() {
            if (companyName == '') {
                setIsCompanyNameValid(false)
            } else {
                setSignUpState(4)
            }
        }
        verifyCompanyName()
    }

    const validateOTPInput = () => {
        if (OTP != OTPInput) {
            setIsOTPValid(false)
        } else {
            setSignUpState(3)
        }
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

    const saveCompanyInformation = () => {
        //Generate an id
        //Verify id
        //Uid
        //populate company
        //populate the user profile
        async function saveCompanyInformation() {
            const company = await fetch('http://localhost:5000/save-company-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data : {
                        name: companyName,
                        cid: cid,
                        members: [uid],
                        admins: [uid],
                        link: null
                    }
                })
            });
            const profile = await fetch('http://localhost:5000/save-profile-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data : {
                        uid: uid,
                        cid: cid,
                        age: null,
                        gender: null,
                        industry: null,
                        seniority: null,
                        job: null,
                        email: email
                    }
                })
            });           
        }
        saveCompanyInformation()
        generateLoginToken()
    }



    return (
        <div className="items-center justify-center h-screen">
            <main className="w-full text-center">
                <div className="bg-white shadow-2xl flex h-screen">
                    {/* Picture Section (Left Side)  */}
                    <div className="w-5/6">
                        <div className='relative'>
                            {/* <video className='w-full h-screen object-cover' src={loginVid} autoPlay loop muted boomerang /> */}
                            <div className='absolute flex flex-col h-screen text-white w-full h-full top-0 left-0'>
                                <div className='m-auto'>
                                    <div className='text-7xl font-bold '>Make Work, <br /> Stress Free</div>
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
                                    {signUpState == 1 ?
                                        <div>
                                            <div className='mt-5 p-3'>
                                                 <span className="text-xl text-[#82A284] font-medium 2xl:opacity-100 duration-200">Enter your company email address!</span>
                                            </div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-20 p-2 flex items-center rounded-xl'>
                                                <div></div>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateEmail} className="bg-white outline-none border-none text-gray-400 text-xl flex-1" type="text" placeholder='Email' />
                                            </div>
                                            <div className='mt-2 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-[#82A284] text-center text-white text-xl hover:bg-[#008631]" onClick={validateEmail}>Next</div>
                                            </div>
                                        </div>
                                        : 
                                        null
                                    }
                                    {signUpState == 2 ?
                                        <div>
                                            <div className='mt-5 p-3'>
                                                 <span className="text-xl text-[#82A284] font-medium 2xl:opacity-100 duration-200">Enter the OTP sent to your email!</span>
                                            </div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-20 p-2 flex items-center rounded-xl'>
                                                <div></div>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateOTPInput} className="bg-white outline-none border-none text-gray-400 text-xl flex-1" type="text" placeholder='OTP' />
                                            </div>
                                            <div className='mt-2 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-[#82A284] text-center text-white text-xl hover:bg-[#008631]" onClick={validateOTPInput}>Next</div>
                                            </div>
                                        </div>
                                        : 
                                        null
                                    }
                                    {signUpState == 3 ?
                                        <div>
                                            <div className='mt-5 p-3'>
                                                 <span className="text-xl text-[#82A284] font-medium 2xl:opacity-100 duration-200">Enter your company name!</span>
                                            </div>
                                            <div> </div>
                                            <div className='bg-white border-2 border-gray-20 p-2 flex items-center rounded-xl'>
                                                <div></div>
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input onChange={updateCompanyName} className="bg-white outline-none border-none text-gray-400 text-xl flex-1" type="text" placeholder='Company Name' />
                                            </div>
                                            <div className='mt-2 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-[#82A284] text-center text-white text-xl hover:bg-[#008631]" onClick={validateCompanyName}>Next</div>
                                            </div>
                                        </div>
                                        : 
                                        null
                                    }
                                    {signUpState == 4 ?
                                        <div>
                                            <div className='mt-5 p-3'>
                                                 <span className="text-xl text-[#82A284] font-medium 2xl:opacity-100 duration-200">Select the industries that your company is involved in</span>
                                            </div>
                                            <div> </div>
                                            <Selector />
                                            <div className='mt-2 px-12'>
                                                <div className="cursor-pointer p-3 rounded-full bg-[#82A284] text-center text-white text-xl hover:bg-[#008631]" onClick={saveCompanyInformation}>Submit and Proceed to Log In!</div>
                                            </div>
                                        </div>
                                        : 
                                        null
                                    }
                                    {isEmailValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-[#82A284] font-medium 2xl:opacity-100 duration-200">Email is invalid!</span>
                                        </div>
                                    }
                                    {isOTPValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-[#82A284] font-medium 2xl:opacity-100 duration-200">OTP is invalid!</span>
                                        </div>
                                    }
                                    {IsCompanyNameValid ?
                                        null :
                                        <div className='mt-5'>
                                            <span className="text-sm text-[#82A284] font-medium 2xl:opacity-100 duration-200">Please enter a name for your company!</span>
                                        </div>
                                    }
                                    {signUpState == 1 ?
                                    <div className='mt-2 px-4'>
                                        <div className="cursor-pointer p-3 rounded-full bg-[#fa8072] text-center text-white text-xl hover:bg-[#FF0000]" onClick={() => navigate('/login')}>Back to Login</div>
                                    </div>
                                    : 
                                    <div className='mt-2 px-4'>
                                        <div className="cursor-pointer p-3 rounded-full bg-[#fa8072] text-center text-white text-xl hover:bg-[#FF0000]" onClick={goBack}>Back</div>
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

export default SignUpForm;