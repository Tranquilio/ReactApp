import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { Fade } from 'react-reveal'
import { Widget } from '@typeform/embed-react'
import { AuthContext } from '../../context/AuthContext'
import { FormContext } from '../../context/FormContext'
import emailjs from '@emailjs/browser'

function AnnounceCard() {

  const auth = useContext(AuthContext)
  const form = useContext(FormContext)

  const [formId, setFormId] = useState("")
  const [formLink, setFormLink] = useState("")

  const generateFirstFormLink = () => {
      async function obtainTypeformLink() {
          const result = await fetch('http://localhost:5000/api/typeform/generate', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  companyname: "Oracle",
                  title: "Hey guys! Just checking in (30/8/22)",
                  text: "This survey comes to you at a time of great need"
              })
          });
          const overall = await result.json();
          setFormLink(overall)
          setFormId((overall.slice(35)))
      }
      obtainTypeformLink()
  }

  async function getEmployeeData() {
      const result = await fetch(`http://localhost:5000/api/employees/profiles/${form.company}`, {
          method: 'GET',
      });
      const overall = await result.json();
      console.log(overall);
      return(overall);
  }

  async function sendEmails() {
      //Retrieve email list from MongoDB
      var templateParams = {}
      var employeeData = await getEmployeeData()
      console.log(employeeData)
      
      for (var data of employeeData) {
          console.log(data);
        templateParams = {
          To_Email: data['email'],
          Employee_Name: data['name'],
          Company_Name: auth.domain,
          Survey_Link: form.formLink
        };
  
        emailjs.send('service_2suw4zs', 'template_z12igba', templateParams, "UCAOXByZZOnY9TBF1")
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function (error) {
            console.log('FAILED...', error);
          });
      }
    }


  const MyComponent = () => {
      return <Widget id="STOHxflT/?_dangerous-disable-submissions" style={{ width: '50vw', height: '50vh' }} className="my-form" />
  //     return <div><div data-tf-widget="mdUHNTn2" data-tf-opacity="0" data-tf-iframe-props="title=Oracle survey" data-tf-medium="snippet" style="width:100%;height:400px;"></div><script src="//embed.typeform.com/next/embed.js"></script>
  // </div>
  }

  useEffect(() => {
      // generateFirstFormLink()
  }, []) 


  return (
    <div>
        <MyComponent/>
    </div>
  );
}

export default AnnounceCard;