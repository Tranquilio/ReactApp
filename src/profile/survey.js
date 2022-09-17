import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from "react-router-dom"
import { Fade } from 'react-reveal'
import { Widget } from '@typeform/embed-react'

function SurveyPage() {

    // const { data: session, status } = useSession();
    const [formId, setFormId] = useState("")
    const [formLink, setFormLink] = useState("")

    const generateFirstFormLink = () => {
        async function obtainTypeformLink() {
            const result = await fetch('http://localhost:5000/api/typeform/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    companyname: "Oracle",
                    title: "Hey guys! Just checking in (30/8/22)",
                    text: "This survey comes to you at a time of great need"
                })
            });
            const overall = await result.json();
            setFormLink(overall)
            setFormId((overall.slice(35)))
        }
        obtainTypeformLink()
    }

    const MyComponent = () => {
        return <Widget id="STOHxflT/?_dangerous-disable-submissions" style={{ width: '50vw', height: '50vh' }} className="my-form" />
    //     return <div><div data-tf-widget="mdUHNTn2" data-tf-opacity="0" data-tf-iframe-props="title=Oracle survey" data-tf-medium="snippet" style="width:100%;height:400px;"></div><script src="//embed.typeform.com/next/embed.js"></script>
    // </div>
    }

    useEffect(() => {
        // generateFirstFormLink()
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

                <Fade cascade>
                    <div className='-mt-32 text-center flex-col mt-auto p-auto'>
                        <div className='grid h-full place-items-center'>
                        <MyComponent />
                        </div>
                        <button className='mt-10 shadow-xl py-5 px-5 rounded-lg text-white bg-pink-300 hover:bg-pink-400'>
                            <a className='tracking-tight md:text-white text-rose-400 px-2'>Deploy</a>
                        </button>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default SurveyPage;