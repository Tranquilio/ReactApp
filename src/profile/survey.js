import React from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from "react-router-dom"
import { Fade } from 'react-reveal'

function surveyPage() {
  
    // const { data: session, status } = useSession();

    // useEffect(() => {

    //     if(session == null) {
    //     console.log("Pushing to profile")
    //     Router.push('/');
    //     }
    // })

  return (   
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  

        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="relative flex flex-col flex-1">
        {/* <div className='m-auto'> */}
            {/* <Paper elevation={3} className='p-10'> */}
            {/* <div className='text-3xl font-bold'>Stay tuned, Feature releasing soon! 🔥</div> */}

            {/* Description */}
            {/* <li className='mt-10 mb-2'>Recieve monthly reports on your organization's wellbeing insights</li> */}
            {/* <li>Easily deploy, customize, and manage employee surveys in minutes</li> */}
            {/* </Paper>   */}
            {/* </div>   */}
        </div>
        <div className='-mt-20 overflow-x-auto overflow-y-hidden p-auto'>
            <ul className='p-48 flex -mt-10 gap-96 '>
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
            <div className='-mt-44 h-4/5 p-16 grid grid-cols-4 grid-rows-4 gap-6'>
                <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-3 col-span-1 text-black text-center'>Toggle between survey types - general, JD, JC, eNPS</div>
                <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-3 col-span-2 text-black text-center'>Survey Preview</div>
                <div className='relative py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-4 col-span-1 text-black text-center'>
                    <div className='m-auto px-4'>Send Survey Interval - Send Reminder Date -</div>
                    <div className='absolute inset-x-0 bottom-10'>
                        <button className='shadow-xl py-5 px-5 rounded-lg text-white bg-pink-300 hover:bg-pink-400'>
                            <a className='tracking-tight md:text-white text-rose-400 px-2'>Deploy</a>
                        </button>
                    </div>
                </div>
                <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 col-span-3 text-black text-center'>Write a message (templates - first survey, new initiative, content))</div>
            </div>
            </Fade>

        </div> 

    </div>
)
}

export default surveyPage;