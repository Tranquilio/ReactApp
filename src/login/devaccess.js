import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import * as React from "react";
import logo from '../assets/logotext1.png'
import classes from "../profile/employeeData/nav.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { set } from 'mongoose'
import { useNavigate, useLocation } from "react-router-dom"
import { FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
// import loginVid from '../loginVid.mp4'
import { AuthContext } from '../context/AuthContext'


function DevAccess() {
    const auth = useContext(AuthContext)
    const [devName, setDevName] = useState('');
    const [isDevNameValid, setIsDevNameValid] = useState(true);

    const updateName = (event) => {
        setDevName(event.target.value)
        setIsDevNameValid(true)
    }

    const generateLoginToken = () => {

        async function navigateToPage(token) {
            console.log(token)
            auth.login("DEVACCESS", token)
        }
        async function generateToken() {
            const result = await fetch('https://55o91qpfqi.execute-api.ap-southeast-1.amazonaws.com/dev/generate-redirect-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: "DEVACCESS",
                })
            });
            const { token } = await result.json();
            navigateToPage(token)
        }
        generateToken()
    }

    const verifyDeveloperName = (name) => {
        async function verifyDevName(name) {
            const result = await fetch("https://55o91qpfqi.execute-api.ap-southeast-1.amazonaws.com/dev/verify-dev-name", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                })
            });
            const overall = await result.json();
            if (overall.message == 'Name is invalid') {
                setIsDevNameValid(false)
            } else {
                generateLoginToken()
            }
        }
        verifyDevName(name)
    }

    return (
        <div>
            <div className='mt-5'>
                <span className="text-sm text-[#82A284] font-medium 2xl:opacity-100 duration-200">Hello there developer!</span>
            </div>
            <div className='bg-white border-2 border-gray-200 w-64 p-2 flex items-center mt-5 rounded-xl'>
                <input onChange={updateName} className="bg-white outline-none border-none text-gray-400 text-xl flex-1" type="text" placeholder='Enter developer password' />
                    <button onClick={() => verifyDeveloperName(devName)} color="primary" size="small" type="submit" variant="contained">
                        Login
                    </button>
            </div>
                 {isDevNameValid ?
                    null :
                    <div className='mt-5'>
                        <span className="text-xl text-red-300 font-medium 2xl:opacity-100 duration-200">Password is invalid!</span>
                    </div>
                }
        </div>
    )
}

export default DevAccess;