import {Link} from 'react-router-dom'
import logo from '../images/logotext.png'
import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { RiLogoutBoxLine } from 'react-icons/ri'

function Sidebar() {
      
  const location = useLocation();
  const { pathname } = location;

  const sidebar = useRef(null);
      
  return (
    <div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}    
        className={`flex flex-col relative z-40 left-0 top-0 transform h-screen no-scrollbar w-52 p-4 bg-orange-50 transition-all duration-200 ease-in-out`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Logo */}
          <img src={logo} height={100} width={200} alt="Logo" /> 
        </div>

        {/* Links */}
        <div>
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">PAGES</span>
            </h3>
            <ul className="mt-3">

            {/* Overview */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-slate-900 ${pathname.includes('overview') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/overview" className={`block text-slate-400 hover:text-white truncate transition duration-150 ${pathname.includes('overview') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path className={`fill-current text-slate-600 ${pathname.includes('overview') && 'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                    <path className={`fill-current text-slate-400 ${pathname.includes('overview') && 'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 2xl:opacity-100 duration-200">Overview</span>
                </div>
              </NavLink>
            </li> 

            {/* Insights */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-slate-900 ${pathname.includes('insights') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/insights" className={`block text-slate-400 hover:text-white truncate transition duration-150 ${pathname.includes('insights') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('insights') && 'text-indigo-500'}`} d="M0 20h24v2H0z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('insights') && 'text-indigo-300'}`} d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 2xl:opacity-100 duration-200">Insights</span>
                </div>
              </NavLink>
            </li>

            {/* Recommendations */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-slate-900 ${pathname.includes('recommendation') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/recommendation" className={`block text-slate-400 hover:text-white truncate transition duration-150 ${pathname.includes('recommendation') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('recommendation') && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('recommendation') && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 2xl:opacity-100 duration-200">Recommendation</span>
                </div>
              </NavLink>
            </li>

            {/* Survey */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-slate-900 ${pathname.includes('survey') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/survey" className={`block text-slate-400 hover:text-white truncate transition duration-150 ${pathname.includes('survey') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('survey') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('survey') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 2xl:opacity-100 duration-200">Survey</span>
                </div>
              </NavLink>
            </li>     

            {/* Settings */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-slate-900 ${pathname.includes('settings') && 'bg-slate-900'}`}>
              <NavLink end to="/profile/settings" className={`block text-slate-400 hover:text-white truncate transition duration-150 ${pathname.includes('settings') && 'hover:text-slate-200'}`}>
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path className={`fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                    <path className={`fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                    <path className={`fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                    <path className={`fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                  </svg>
                  <span className="text-sm font-medium ml-3 2xl:opacity-100 duration-200">Settings</span>
                </div>
              </NavLink>
            </li>  

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="mt-auto mb-4 text-slate-400 hover:text-white truncate transition duration-150 hover:bg-slate-900">
          <div className="ml-14">
            <Link to="../">
              <RiLogoutBoxLine className='text-slate-400 w-7 h-7 shrink-0 ml-2' viewBox="0 0 24 24"/>
              <div className="text-sm font-medium 2xl:opacity-100 duration-200">Logout</div>
            </Link>
          </div>
        </div>

      </div>
      
    </div>
  );
}


export default Sidebar