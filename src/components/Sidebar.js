import React from 'react'
import {useState, useEffect} from "react";
import Image from 'next/image'
import { signOut } from "next-auth/react";
import Link from 'next/link';
import {VscAccount} from 'react-icons/vsc';
import {GrOverview} from 'react-icons/gr';
import {RiSurveyLine} from 'react-icons/ri';
import {MdOutlineRecommend} from 'react-icons/md';
import {CgInsights} from 'react-icons/cg';
import {GiExitDoor} from 'react-icons/gi';
import {useSession} from "next-auth/react"
import Router from 'next/router';


const Sidebar = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    const Menu = [
        { title: "Overview", Link: "../profile/overview", icon: GrOverview },
        { title: "Insights", Link: "../profile/insights", icon: CgInsights},
        { title: "Recommendations", Link: "../profile/recommendation", icon: MdOutlineRecommend},
        { title: "Survey", Link: "../profile/survey", icon: RiSurveyLine},
    ]

// const { data: session, status } = useSession();

// useEffect(() => {

//     if(session == null) {
//     console.log("Pushing to index")
//     Router.push('/');
//     }
// })

// console.log(scores)
// console.log(session["user"]["email"])

  return (
    <div>
        {/* Top bar */}
        <div className='shadow-md z-10 absolute w-full'>
        <div className='md:flex justify-between bg-white py-0 md:px-6 px-9'>
            <div className='font-bold text-3xl cursor-pointer flex items-center'>
                <Link href="/">
                <Image src={"/../public/images/Logo.png"} width={140} height={120} />
                </Link>
            </div>
            <div className='md:flex md:items-center mr-12 md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in'>
            {/* <div className='px-10 text-pink-400 text-l'>{session["user"]["email"]}</div> */}
            <Link href="/login">
            <GiExitDoor className='cursor-pointer' size={50} />
            </Link>
            </div>
        </div>
        </div>

        {/* Side bar */}
        <aside className='sticky top-0 h-screen'>
        <div className='shadow-xl text-center flex items-center md:grid-rows-4 h-screen w-44 bg-rose-200 p-5'>
            <ul className='text-center'>
            {Menu.map((menu, index) => (
                <li key={index} className='cursor-pointer hover:bg-rose-100 rounded-md py-3'>
                    <Link href= {menu.Link}>
                        <span>
                            <menu.icon className='ml-14' size={32}/>
                            <p className='font-semibold text-gray-500'>{menu.title}</p>
                        </span>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
        </aside>

    </div>
  )
}

export default Sidebar