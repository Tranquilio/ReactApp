import Sidebar from '../..//components/Sidebar'
import {Link, useLocation} from 'react-router-dom';
import classes from "./nav.module.css";
import { useEffect, useState } from 'react';

function PreviewPage () {

    const [text, setText] = useState("Dear Employees, We are proud to announce that ...")
    const location = useLocation()
    useEffect(() => {
      console.log(location.state)
      if(location.state != null) {
        if(location.state.data != null) {
          setText(location.state.data)
        }
      }
    }, [])

    return ( 
        <div className='bg-gradient-to-r from-transparent to-pink-50'>     
          <div className='flex'>

            <div className='flex z-10'>
              <Sidebar />
            </div>

            <div>
              <ul className='p-48 flex -mt-10 gap-60'>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey">Onboard</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/create" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/create">Create</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/preview" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/preview">Preview</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/deploy" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/deploy">Deploy</Link>
                </li>
              </ul>
 
              <div className='text-center'>

              <div className='font-bold text-2xl'>Message to your Employees</div>
              {/* Edited text by the HR */}
              <div>{text}</div>

              <Link to="/survey">
                  <button className='shadow-xl py-5 px-5 mt-10 rounded-lg text-white bg-pink-400 hover:bg-pink-500'>Preview survey here</button>
              </Link> 
              
              {/* <div className='ml-16 p-20 overflow-auto'>
                <Survey />
              </div> */}
                
                <Link to="/survey">
                    <button className='shadow-xl py-5 px-5 mt-10 rounded-lg text-white bg-pink-400 hover:bg-pink-500'>Preview survey here</button>
                </Link> 
                  
                <div className='gap-10 mt-48 mb-10 flex justify-center items-center'>
                  <Link to="/profile/survey/create">
                    <div className={classes.backarrow}>
                      <div className="rotate-180 ">Back</div>
                    </div>
                  </Link>

                  <Link to="/profile/survey/deploy">
                    <div className={classes.nextarrow}>Next</div>
                  </Link>
                </div>
      
              </div>

            </div>
          </div>
        </div>      
    )
}

export default PreviewPage;