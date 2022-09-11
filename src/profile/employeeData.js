import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import SurveyInfo from '../components/SurveyTable'
import classes from "./employeeData/nav.module.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Fade } from 'react-reveal'
import { Paper } from '@material-ui/core'
const emoji = require("emoji-dictionary")

function EmployeeDataPage() {
  const auth = useContext(AuthContext)
  const [emails, setEmails] = useState(null)
  const [headers, setHeaders] = useState(null)

  function sendEmails() {
    console.log(emails)
    var templateParams = {}
    var nameIndex = -1
    var emailIndex = -1
    for (var index in headers) {
      //Regex better
      if (headers[index] === "name" || headers[index] === "Name") {
        nameIndex = index
      } else if (headers[index] === "email" || headers[index] === "Email") {
        emailIndex = index
      }
    }
    // console.log(nameIndex)
    // console.log(emailIndex)

    //If insufficient parameters in csv
    if (nameIndex < 0 || emailIndex < 0) {
      alert("csv file must contain a name column, email column")
      return
    }

    for (var email of emails) {
      templateParams = {
        To_Email: email[emailIndex],
        Employee_Name: email[nameIndex],
        Company_Name: auth.domain,
        Survey_Link: form.link
      };

      emailjs.send('service_2suw4zs', 'template_z12igba', templateParams, "UCAOXByZZOnY9TBF1")
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
  }

  // async function sendEmail() {
  //   const result = await fetch('http://localhost:5000/login-mongo', {
  //       method : 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: "test2@tranquilio.com"
  //       })
  //   }); 
  // }

  //TODO: Click Button to CREATE Typeform Link
  async function createSurvey() {
    const result = await fetch('http://localhost:5000/api/typeform/test', {
      method: 'GET',
    });
    result.json().then((response) => console.log(response))
  }

  //TODO: Retrieve Typeform Link for the company and send it to employees' email.
  // async function sendEmail() {
  //   const result = await fetch('https://api.typeform.com/generate', {
  //       method : 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer tfp_EyfCPEreBUqzemumbWLoN4PU2abqQrcPfRiJ5MjMEXsL_3pco8hRkTLxitT"
  //       },
  //       body: JSON.stringify({
  //         companyName: "Test company",
  //         text: "Some text here"
  //       })

  //   }); 
  //   result.json().then((response) => console.log(response))
  // }

  function updateEmails(emails, headers) {
    console.log(emails)
    setEmails(emails)
    setHeaders(headers)
  }

  return (
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>

      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1">
        {/* <div className='m-auto'> */}
        {/* <Paper elevation={3} className='p-10'> */}
        {/* <div className='text-3xl font-bold'>Stay tuned, Feature releasing soon! 🔥</div> */}

        {/* Description */}
        {/* <li className='mt-10 mb-2'>Recieve monthly reports on your organization's wellbeing insights</li> */}
        {/* <li>Easily deploy, customize, and manage employee surveys in minutes</li> */}
        {/* </Paper>   */}
        {/* </div>   */}
      </div>
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

          <SurveyInfo updateState={updateEmails} />


          <div className='gap-10 mt-6 mb-10 flex justify-center items-center'>
            {/* <button onClick={sendEmail} >Test emails</button> */}
            <button onClick={sendEmails} >Send Emails</button>
            <Link to="/profile/employeeData/create">
              <div className="p-4 rounded-full bg-pink-300 px-10 text-center text-white hover:bg-pink-400">Next {">"}</div>
            </Link>
          </div>
        </Fade>

      </div>

    </div>
  );
}

export default EmployeeDataPage;