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
            const result = await fetch('http://localhost:4000/generate-redirect-token', {
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
            const result = await fetch('http://localhost:4000/verify-dev-name', {
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
            <Grid container justify="center" paddingTop={40} paddingLeft={112}>
                <div className='bg-white border-2 border-gray-200 w-64 p-2 flex items-center mt-5 rounded-xl'>
                    <input onChange={updateName} className="bg-white outline-none border-none text-gray-400 text-sm flex-1" type="text" placeholder='Enter developer password' />
                    <Button onClick={() => verifyDeveloperName(devName)} color="primary" size="small" type="submit" variant="contained">
                        Login
                    </Button>
                </div>
                {isDevNameValid ?
                    null :
                    <div className='mt-5'>
                        <span className="text-sm text-red-300 font-medium 2xl:opacity-100 duration-200">Password is invalid!</span>
                    </div>
                }
            </Grid>
        </div>
    )
}

export default DevAccess;