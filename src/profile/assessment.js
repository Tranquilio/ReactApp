import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../components/Sidebar2'
import { Link } from "react-router-dom"
import { Fade } from 'react-reveal'
import { Widget } from '@typeform/embed-react'
import { AuthContext } from '../context/AuthContext'
import { FormContext } from '../context/FormContext'
import emailjs from '@emailjs/browser'
import { Tab } from '@headlessui/react'

import PrepareCard from '../components/assessment/PrepareCard'
import AnnounceCard from '../components/assessment/AnnounceCard'
import CreateCard from '../components/assessment/CreateCard'
import TestCard from '../components/assessment/TestCard'
import LaunchCard from '../components/assessment/LaunchCard'
import RemindCard from '../components/assessment/RemindCard'
import MonitorCard from '../components/assessment/MonitorCard'

function AssessmentPage() {
    
    const [active, setActive] = useState("PrepareCard")
    
    return (
        <div className="flex flex-row">
            <Sidebar className="basic-1/6"/>
            <div className="basic-5/6 w-screen font-raleway items-center">
                <ul className=' flex flex-row -ml-16 mt-7 gap-24 items-center list-none justify-center'>
                    <li>
                        <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "PrepareCard" ? "font-semibold" : ""}`} onClick={() => setActive("PrepareCard")}>Prepare</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "AnnounceCard" ? "font-semibold" : ""}`} onClick={() => setActive("AnnounceCard")}>Announce</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "CreateCard" ? "font-semibold" : ""}`} onClick={() => setActive("CreateCard")}>Create</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "TestCard" ? "font-semibold" : ""}`} onClick={() => setActive("TestCard")}>Test</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "LaunchCard" ? "font-semibold" : ""}`} onClick={() => setActive("LaunchCard")}>Launch</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "RemindCard" ? "font-semibold" : ""}`} onClick={() => setActive("RemindCard")}>Remind</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "MonitorCard" ? "font-semibold" : ""}`} onClick={() => setActive("MonitorCard")}>Monitor</button>
                    </li>                                                              
                </ul>
                <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700 mr-8"/>

                <div>
                    {active == "PrepareCard" && <PrepareCard/>}
                    {active == "AnnounceCard" && <AnnounceCard/>}
                    {active == "CreateCard" && <CreateCard/>}
                    {active == "TestCard" && <TestCard/>}
                    {active == "LaunchCard" && <LaunchCard/>}
                    {active == "RemindCard" && <RemindCard/>}
                    {active == "MonitorCard" && <MonitorCard/>}                    
                </div>
            </div>



        </div>
    )
}

export default AssessmentPage;