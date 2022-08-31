import Sidebar from '../../components/Sidebar'
import {Link} from 'react-router-dom'
import classes from "./nav.module.css"
import { Paper } from '@material-ui/core'
import Preview from '../../components/Preview'
import { Fade } from 'react-reveal'
import { useState } from 'react'

function PreviewPage () {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return ( 
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <div className='-mt-20'>
          <ul className='p-48 flex -mt-10 gap-60'>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/employeeData" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/employeeData">Onboard</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/employeeData/create" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/employeeData/create">Create</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/employeeData/preview" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/employeeData/preview">Preview</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/employeeData/deploy" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/employeeData/deploy">Deploy</Link>
            </li>
          </ul>

          <Fade cascade>
            <div className='px-10'>

              <Paper elevation={3}>
                <div className='p-5 -mt-32'>
                  <Preview />
                </div>
              </Paper>
    
              <div className='text-center'>
                {/* Navigation */}
                <div className='gap-10 mt-10 mb-10 flex justify-center items-center'>
                  <Link to="/profile/employeeData/create">
                    <div className="p-4 rounded-full bg-pink-300 px-10 text-center text-white hover:bg-pink-400">{"<"} Back</div>
                  </Link>

                  <Link to="/profile/employeeData/deploy">
                    <div className="p-4 rounded-full bg-pink-300 px-10 text-center text-white hover:bg-pink-400">Next {">"}</div>
                  </Link>
                </div>
              </div>
              
            </div>
          </Fade>
          
        </div>

      </div>

    </div>

  )
}

export default PreviewPage;