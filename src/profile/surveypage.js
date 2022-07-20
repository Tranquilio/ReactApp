import Sidebar from '../components/Sidebar'
import SurveyInfo from '../components/SurveyInfo'
import classes from "./survey/nav.module.css"
import {Link} from "react-router-dom"
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Fade } from 'react-reveal'

function SurveyPage() {

  const [emails, setEmails] = useState(null)  
  const [headers, setHeaders] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function sendEmails() {
    console.log(emails)
    var templateParams = {}
    var nameIndex = -1
    var emailIndex  = -1
    for(var index in headers) {
      //Regex better
      if(headers[index] === "name" || headers[index] === "Name") {
        nameIndex = index
      } else if (headers[index] === "email" || headers[index] === "Email") {
        emailIndex = index
      }
    }
    // console.log(nameIndex)
    // console.log(emailIndex)

    //If insufficient parameters in csv
    if(nameIndex < 0 || emailIndex < 0) {
      alert("csv file must contain a name column, email column")
      return
    }

    for(var email of emails) {
      templateParams = {
        to_email : email[emailIndex],
        to_name : email[nameIndex],
        message : "Email stuff works"
      };

      emailjs.send('service_9qvnw1f', 'template_cbesht4', templateParams, "maCgHWvsClEv8nkvk")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    }
  }

  function updateEmails(emails, headers) {
    console.log(emails)
    setEmails(emails)
    setHeaders(headers)
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
              <Link to="/profile/survey/preview">Preview</Link>
            </li>
            <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname === "/profile/survey/deploy" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
              <Link to="/profile/survey/deploy">Deploy</Link>
            </li>
          </ul>
            
          <Fade cascade>  
            {/* Component for Insertion File and Excel Table  */}
            <SurveyInfo updateState={updateEmails}/>

            {/* Navigation */}
            <div className='gap-10 mt-6 mb-10 flex justify-center items-center'>
              <button onClick={sendEmails} disabled={emails == null}>Test emails</button>
              <Link to="/profile/survey/create">
                <div className={classes.nextarrow}>Next</div>
              </Link>
            </div>
          </Fade>
        </div>

      </div>

    </div>
  );  
}

export default SurveyPage;