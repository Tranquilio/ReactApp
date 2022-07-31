import Sidebar from '../..//components/Sidebar'
import {Link} from 'react-router-dom'
import classes from "./nav.module.css"
import Deploy from '../../components/Deploy'
import { Paper } from '@material-ui/core'
import { Fade } from 'react-reveal'
import { useState } from 'react'

function DeployPage() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (  
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-pink-50'>  

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
      {/* Content */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <div className='-mt-20'>
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
      
          <Fade cascade>
            <div className='text-center -mt-32 px-10'>

              <Paper elevation={3}>
                <div className='p-5 -ml-4'>
                  <Deploy />
                </div>
              </Paper>

              {/* Navigation */}
              <div className='gap-10 mt-10 mb-10 flex justify-center items-center'>
                <Link to="/profile/survey/preview">
                  <div className="p-4 rounded-full bg-pink-400 px-10 text-center text-white hover:bg-pink-500">{"<"} Back</div>
                </Link>
              </div>
              
            </div>
          </Fade>
        </div>

      </div>

    </div>
  );
}

export default DeployPage;