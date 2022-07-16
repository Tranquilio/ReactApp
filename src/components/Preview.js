import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Survey from '../survey';

const Preview = () => {

    const [text, setText] = useState("Dear Employees, We are proud to announce that ...")
    const [startDate, setStartDate] = useState("{Start Date}")
    const [endDate, setEndDate] = useState("{End Date}")
    const [surveyName, setSurvey] = useState("")

    const location = useLocation()
    
    useEffect(() => {
      console.log(location.state)
      if(location.state != null) {
        if(location.state.data != null) {
          setText(location.state.data)
        }
        if(location.state.start != null) {
          setStartDate(location.state.start)
        }
        if(location.state.end != null) {
          setEndDate(location.state.end)
        }
        if(location.state.survey != null) {
          setSurvey(location.state.survey)
        }
      }
    }, [])

  return (
    <div className='px-10 mr-32'>
        {/* Message Template */}
        <div>
        Dear employeeName, as part of our plans to improve workplace wellbeing at companyName , we are pleased to launch our Wellness initiative.<br /> 
        <br />
        What can you gain out of it?<br />
        - A way to understand your daily stressors at work<br />
        - Personalized solutions to help you improve overall wellbeing<br />
        <br />
        So how does it work?<br />
        - Every couple weeks or around any upcoming initiatives, we will send you an email with personalized insights of your stress, complimented with a quick survey for us to better serve you.<br />
        - You would have access to resources and coaching depending on your stress levels.<br />
        <br />
        As part of our initial diagnosis, we are circulating this survey from { startDate } to { endDate }. We look forward to your responses.<br />
        <br />
        Participation is strictly voluntary. Your input will be kept anonymous to us.<br />
        <br />
        If you have any questions regarding this survey, seek adminName or contact number.<br />
        </div>

        {/* Personalized Message from create page */}
        <div className='mt-10'>{surveyName}</div>
        {/* <div>
            <Survey className="overflow-auto"/>
        </div> */}
    </div>
  )
}

export default Preview