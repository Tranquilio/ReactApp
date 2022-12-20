import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../components/Sidebar2'
import { Link } from "react-router-dom"
import { Fade } from 'react-reveal'
import { Widget } from '@typeform/embed-react'
import { AuthContext } from '../context/AuthContext'
import { FormContext } from '../context/FormContext'
import emailjs from '@emailjs/browser'
import { Tab } from '@headlessui/react'

import AnnouncementsCard from '../components/assessment/AnnouncementsCard'
import AssessmentsCard from '../components/assessment/AssessmentsCard'
import MonitorCard from '../components/assessment/MonitorCard'
import InfoModal from '../components/assessment/InfoModal'

function AssessmentPage() {
    
    const [active, setActive] = useState("AnnouncementsCard")
    
    return (
        <div className="flex flex-row">
            <Sidebar className="basic-1/6"/>
            <div className="basic-5/6 w-screen font-raleway items-center">
                <ul className=' flex flex-row -ml-16 mt-7 gap-24 items-center list-none justify-center'>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "AnnouncementsCard" ? "font-semibold" : ""}`} onClick={() => setActive("AnnouncementsCard")}>Announcements</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "AssessmentsCard" ? "font-semibold" : ""}`} onClick={() => setActive("AssessmentsCard")}>Assessments</button>
                    </li>
                    <li>
                    <button className={`cursor-pointer bg-white text-blackish-700 text-xl hover:font-semibold py-2 px-4 border-none rounded font-raleway ${active == "MonitorCard" ? "font-semibold" : ""}`} onClick={() => setActive("MonitorCard")}>Monitor</button>
                    </li>                                                              
                </ul>
                <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700 mr-8"/>

                <div>
                    {active == "AnnouncementsCard" && <AnnouncementsCard/>}
                    {active == "AssessmentsCard" && <AssessmentsCard/>}
                    {active == "MonitorCard" && <MonitorCard/>}                    
                </div>
            </div>

            <InfoModal />


        </div>
    )
}

export default AssessmentPage;