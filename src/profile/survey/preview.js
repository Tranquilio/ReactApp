import Sidebar from '../..//components/Sidebar'
import {useEffect} from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

function PreviewPage () {

    return ( 
        <div className='bg-gradient-to-r from-transparent to-pink-50'>
    
        <div className='h-screen'>      
            <div className='flex'>
            <div className='flex z-10'>
             <Sidebar />
            </div>
                <div>
                  <ul className='p-48 flex -mt-10 gap-60'>
                    <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/" ? "text-rose-400" : ""}`}>
                      <a href="/profile/survey/">Onboard</a>
                    </li>
                    <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/create" ? "text-rose-400" : ""}`}>
                      <a href="/profile/survey/create">Create</a>
                    </li>
                    <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/preview" ? "text-rose-400" : ""}`}>
                      <a href="/profile/survey/preview">Preview</a>
                    </li>
                    <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/deploy" ? "text-rose-400" : ""}`}>
                      <a href="/profile/survey/deploy">Deploy</a>
                    </li>
                  </ul>
                
                <Link to="/survey">
                    <button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400'>Preview survey here</button>
                </Link> 
    
              </div>
            </div>
        </div>
        </div>
       
    )
}

export default PreviewPage;