import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../Logo.png'
import OverviewPage from '../profile/overview';
import InsightsPage from "../profile/insights";

class Sidebar extends Component {

render(){
  return (
    <div>

        {/* Top bar */}
        <div className='shadow-md z-10 absolute w-full'>
            <div className='md:flex justify-between bg-white py-0 md:px-6 px-9'>
                <div className='font-bold text-3xl cursor-pointer flex items-center mr-3'>
                    <img src={logo} width={180} alt="Logo" /> 
                </div>
                <div className='md:flex md:items-center mr-12 md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in'>
                    {/* <div className='px-10 text-pink-400 text-l'>{session["user"]["email"]}</div> */}
                    <div className='mr-10 font-semibold text-xl text-pink-400'>Welcome John!</div>
                    <Link to="/login">
                        <button className={`md:bg-pink-400 text-xl-center py-4 px-6 md:rounded-lg md:hover:bg-pink-500 md:text-right`}>
                            <div className='md:text-white text-pink-400 md:font-bold font-semibold'>Sign Out → </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
       
        {/* Side bar */}
        <aside className='sticky top-0 h-screen'>
            <div className='shadow-xl text-white flex md:grid-rows-4 h-screen w-36 bg-gradient-to-t from-transparent to-pink-400 p-3'>
                <ul className='text-center'>
                    <li className={`mt-28 cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/overview" ? "bg-pink-100 text-pink-400 px-6" : ""}`}>
                        <Link to="../profile/overview" element={<OverviewPage/>}>
                            <span>
                                <div className="flex items-center h-10 mt-auto hover:text-rose-400">
                                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="text-center ml-2 text-md">Overview</span>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/insights" ? "bg-pink-100 text-pink-400 px-7" : ""}`}>
                        <Link to= "/profile/insights" element={<InsightsPage/>}>
                            <span>
                                <div className="flex items-center h-10 mt-auto hover:text-rose-400">
                                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-center ml-2 text-md">Insights</span>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/recommendation" ? "bg-pink-100 text-pink-400 px-3" : ""}`}>
                        {/* recommendation page does not exist currently so the below line is throwing errors */}
                        {/* <Link to= "/profile/recommendation" element={<RecommendationPage/>} > */}
                        <Link to= "/profile/recommendation">
                            <span>
                                <div className="flex items-center h-10 mt-auto hover:text-rose-400">
                                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <span className="text-center ml-2 text-md">Recommend</span>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === ("/profile/survey" || "/profile/survey/create" || "/profile/survey/preview" || "/profile/survey/deploy") ? "bg-pink-100 text-pink-400 px-8" : ""}`}>
                        <Link to= "/profile/survey">
                            <span>
                                <div className="flex items-center h-10 mt-auto hover:text-rose-400">
                                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>
                                    <span className="text-center ml-2 text-md">Survey</span>
                                </div>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
        
    </div>
  )
    }
}

export default Sidebar