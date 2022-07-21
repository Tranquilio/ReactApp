import {Link} from 'react-router-dom'
// import logo from '../Logo.png'
import logo from '../logotext.png'
import downArrow from '../down-arrow.png'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { RiLogoutBoxLine } from 'react-icons/ri'

function Sidebar({
    sidebarOpen,
    setSidebarOpen
    }) {
      
    const location = useLocation();
    const { pathname } = location;
  
    const trigger = useRef(null);
    const sidebar = useRef(null);
  
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!sidebar.current || !trigger.current) return;
        if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
        setSidebarOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!sidebarOpen || keyCode !== 27) return;
        setSidebarOpen(false);
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });
  
    useEffect(() => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded);
      if (sidebarExpanded) {
        document.querySelector('body').classList.add('sidebar-expanded');
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded');
      }
    }, [sidebarExpanded]);
      
  return (

    <div>
      {/* Sidebar backdrop (mobile only) */}
      {/* <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div> */}

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-32' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

        {/* Logo */}
        <img src={logo} height={100} width={200} alt="Logo" /> 
         
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span> */}
            </h3>
            <ul className="mt-3">

            {/* Overview */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('overview') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/overview" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('overview') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path className={`fill-current text-slate-600 ${pathname.includes('overview') && 'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                                <path className={`fill-current text-slate-400 ${pathname.includes('overview') && 'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Overview</span>
                </div>
              </NavLink>
            </li> 

            {/* Insights */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('insights') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/insights" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('insights') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('insights') && 'text-indigo-500'}`} d="M0 20h24v2H0z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('insights') && 'text-indigo-300'}`} d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Insights</span>
                </div>
              </NavLink>
            </li>

            {/* Recommendations */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('recommendation') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/recommendation" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('recommendation') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('recommendation') && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('recommendation') && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Recommendation</span>
                </div>
              </NavLink>
            </li>

            {/* Survey */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('survey') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/survey" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('survey') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('survey') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('survey') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Survey</span>
                </div>
              </NavLink>
            </li>     

            {/* Settings */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('settings') && 'bg-slate-900'}`}>
              <NavLink end to="/" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('settings') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path className={`fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                    <path className={`fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                    <path className={`fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                    <path className={`fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Settings</span>
                </div>
              </NavLink>
            </li>  

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <span className="sr-only">Expand / collapse sidebar</span>
            <Link to="../">
              <RiLogoutBoxLine className='text-slate-400 w-6 h-6'/>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Sidebar

    // <div>

    //     {/* Top bar */}
    //     <div className='shadow-md z-10 absolute w-full'>
    //         <div className='md:flex justify-between bg-white py-0 md:px-6 px-9'>
    //             <div className='font-bold text-3xl cursor-pointer flex items-center mr-3'>
    //                 <img src={logo} width={100} alt="Logo" /> 
    //             </div>
    //             <div className='md:flex md:items-center mr-12 md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in'>
    //                 {/* <div className='px-10 text-pink-400 text-l'>{session["user"]["email"]}</div> */}
    //                 <div className=' mr-10 font-semibold text-l text-slate-600'>Amazon</div>
    //                 <img src={downArrow} width={15} alt="downarrow" /> 
    //                 {/* <Link to="/login">
    //                     <button className={`md:bg-pink-400 text-xl-center py-4 px-6 md:rounded-lg md:hover:bg-pink-500 md:text-right`}>
    //                         <div className='md:text-white text-pink-400 md:font-bold font-semibold'>Sign Out → </div>
    //                     </button>
    //                 </Link> */}
    //             </div>
    //         </div>
    //     </div>
       
    //     {/* Side bar */}
    //     <aside className='sticky top-0 h-screen'>
    //         <div className='shadow-xl text-white flex md:grid-rows-4 h-screen w-36 bg-gradient-to-t from-transparent to-pink-400 p-3 drop-shadow-xl'>
    //             <ul className='text-center'>
    //                 <li className={`mt-28 cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/overview" ? "bg-pink-100 text-pink-400 px-6" : ""}`}>
    //                     <Link to="../profile/overview" element={<OverviewPage/>}>
    //                         <span>
    //                             <div className="flex items-center h-10 mt-auto hover:text-rose-400">
    //                                 <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    //                                 </svg>
    //                                 <span className="text-center ml-2 text-md">Overview</span>
    //                             </div>
    //                         </span>
    //                     </Link>
    //                 </li>
    //                 <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/insights" ? "bg-pink-100 text-pink-400 px-7" : ""}`}>
    //                     <Link to= "/profile/insights" element={<InsightsPage/>}>
    //                         <span>
    //                             <div className="flex items-center h-10 mt-auto hover:text-rose-400">
    //                                 <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //                                 </svg>
    //                                 <span className="text-center ml-2 text-md">Insights</span>
    //                             </div>
    //                         </span>
    //                     </Link>
    //                 </li>
    //                 <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/recommendation" ? "bg-pink-100 text-pink-400 px-3" : ""}`}>
    //                     {/* recommendation page does not exist currently so the below line is throwing errors */}
    //                     {/* <Link to= "/profile/recommendation" element={<RecommendationPage/>} > */}
    //                     <Link to= "/profile/recommendation">
    //                         <span>
    //                             <div className="flex items-center h-10 mt-auto hover:text-rose-400">
    //                                 <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    //                                 </svg>
    //                                 <span className="text-center ml-2 text-md">Recommend</span>
    //                             </div>
    //                         </span>
    //                     </Link>
    //                 </li>
    //                 <li className={`cursor-pointer p-1 rounded-r-lg py-3 ${window.location.pathname === "/profile/survey" ? "bg-pink-100 text-pink-400 px-8" : "/profile/survey/create" ? "bg-pink-100 text-pink-400 px-8" : "/profile/survey/preview" ? "bg-pink-100 text-pink-400 px-8" : "/profile/survey/deploy" ? "bg-pink-100 text-pink-400 px-8" : "" }`}>
    //                     <Link to= "/profile/survey">
    //                         <span>
    //                             <div className="flex items-center h-10 mt-auto hover:text-rose-400">
    //                                 <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
    //                                 </svg>
    //                                 <span className="text-center ml-2 text-md">Survey</span>
    //                             </div>
    //                         </span>
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </aside>
        
    // </div>