import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import {Link} from "react-router-dom"
import { Fade } from 'react-reveal'
import Iframe from 'react-iframe'

function TrackPage() {

    // const [summary, setsSummary] = useState("")
  
    async function getSurveySummary() {
        const result = await fetch('/api/typeform/summary', {
            method: 'GET',
        });
        const overall = await result.json();
        // setsSummary(overall);
        result.json().then((response) => console.log(response))
    }
  
    useEffect(() => {
        getSurveySummary()
    }, [])

    return (
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  

        <Sidebar />

        <div className='relative mt-2 h-screen overflow-x-auto overflow-y-hidden p-auto'>
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
            <Iframe url="https://3oms1jii0jw.typeform.com/report/PqwjqxXz/SJTGCbxQW5jS14RB"
                            width="840vw"
                            height="620bh"
                            id=""
                            className=""
                            display="block"
                            position="relative"/>   
            <Fade cascade>
                <div className='grid grid-rows-4 gap-6'>
                    {/* No. of surveys Completed */}
                    <div class="relative pt-1 px-16">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                                Number of surveys completed
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-pink-600">
                                30%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                        </div>
                    </div>
                    {/* Initial survey completion */}
                    <div class="relative pt-1 px-16">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                                Initial Survey Response
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-pink-600">
                                90%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                        </div>
                    </div>
                 {/* Survey Flow */}
                    <div className=''></div>
                    {/* <button onClick={getSurveySummary} className='mt-10 shadow-xl py-5 px-5 rounded-lg text-white bg-pink-300 hover:bg-pink-400'>
                            <a className='tracking-tight md:text-white text-rose-400 px-2'>Get Summary</a>
                    </button> */}
                    {/* Mini-insights boxes */}
                    <div className='absolute inset-x-0 bottom-0 p-16 grid grid-cols-4 grid-rows-2 gap-6'>
                        <div className='py-10 bg-white shadow-lg rounded-sm border border-slate-200 row-span-2 text-black text-center'>Reminders sent: </div>
                        <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-2 text-black text-center'>Most popular response: <br/> Least popular response: </div>
                        <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-2 text-black text-center'>Most popular recommendation: <br/> Least popular recommendation: </div>
                        <div className='py-4 bg-white shadow-lg rounded-sm border border-slate-200 row-span-2 text-black text-center'>Response rate: </div>
                    </div>
                </div>
            </Fade>

        </div> 

    </div>
  )
}

export default TrackPage;