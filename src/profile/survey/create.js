import Sidebar from '../..//components/Sidebar'
import {useState} from "react"
import classes from "./nav.module.css"
import Form from '../..//components/Form'
import { Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'

function CreatePage() {

  const [currData, updateData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function getUpdates(data) {
    //console.log("Updating")
    //console.log(data)
    updateData(data)
    //console.log(currData)
  }

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
              <Link to="/profile/survey/preview" state={currData}>Preview</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/deploy" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/survey/deploy">Deploy</Link>
            </li>
          </ul>
        
          <Fade cascade>
            <div className='-mt-32 px-10'>
            
              <Paper elevation={3}>
                <div className='p-5'>
                  <Form updateParent = {getUpdates} />
                </div>
              </Paper>

              {/* Navigation */}
              <div className='gap-10 mt-16 mb-10 flex justify-center items-center'>
                <Link to="/profile/survey">
                  <div className={classes.backarrow}>
                    <div className="rotate-180 ">Back</div>
                  </div>
                </Link>

                {/* <Link to='/profile/survey/preview' params={test}> */}
                <Link to="/profile/survey/preview" state={currData}>
                  <div className={classes.nextarrow}>Next</div>
                </Link>
              </div>
          
            </div>
          </Fade>     
        </div>

      </div>

    </div>
  );
}

export default CreatePage;