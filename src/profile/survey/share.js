import React from 'react'
import Sidebar from '../../components/Sidebar2'
import {Link} from "react-router-dom"
import { Fade } from 'react-reveal'

const SharePage = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  

        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        {/* <div className="relative flex flex-col flex-1"> */}
        {/* <div className='m-auto'> */}
            {/* <Paper elevation={3} className='p-10'> */}
            {/* <div className='text-3xl font-bold'>Stay tuned, Feature releasing soon! 🔥</div> */}

            {/* Description */}
            {/* <li className='mt-10 mb-2'>Recieve monthly reports on your organization's wellbeing insights</li> */}
            {/* <li>Easily deploy, customize, and manage employee surveys in minutes</li> */}
            {/* </Paper>   */}
            {/* </div>   */}
        {/* </div> */}
        <div className='relative h-screen overflow-x-auto overflow-y-hidden p-auto'>
            <ul className='p-48 flex flex-row -mt-32 gap-96 items-center'>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                <Link to="/profile/survey">Design</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/track" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                <Link to="/profile/survey/track">Track</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/share" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                <Link to="/profile/survey/share">Share</Link>
            </li>
            </ul> 
            
            <Fade cascade>  
                <div className='-mt-44 p-16 h-4/5 grid grid-cols-2 gap-6'>
                    {/* Employer Summary */}
                    <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 text-black text-center'>
                        <div>
                            <div className='text-lg text-left px-6'>Employer Summary</div>
                        </div>
                    </div>
                    {/* Employee Summary */}
                    <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 text-black text-center'>
                        <div>
                            <div className='text-lg text-left px-6'>Employee Summary</div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div> 

    </div>
  )
}

export default SharePage