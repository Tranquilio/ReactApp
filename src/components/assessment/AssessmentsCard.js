import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import LaunchModal from '../assessment/LaunchModal'
import TestModal from '../assessment/TestModal'


function AssessmentsCard() {

  const [subject, setSubject] = useState();

  const updateSubject = (event) => {
    setSubject(event.target.value)
}

  return (
    <div className="h-4/5 flex items-center justify-center">
      <div className="w-2/3 rounded-md flex items-center justify-center flex-col border border-gray py-4 px-36 text-black spacing-3">
        Launch Assessment Email Template
        <input onChange={updateSubject} className="w-4/5 mt-4 rounded-sm border border-gray-200 text-[14px]" type="text" placeholder='Subject' />
        <textarea onChange={updateSubject} className="w-4/5 h-full mt-4 rounded-sm border border-gray-200 text-[14px]" rows={20} value='Dear employeeName, as part of our plans to improve workplace wellbeing at companyName , we are pleased to launch our Wellness initiative.
          What can you gain out of it?
          - A way to understand your daily stressors at work
          - Personalized solutions to help you improve overall wellbeing

          So how does it work?
          - Every couple weeks or around any upcoming initiatives, we will send you an email with personalized insights of your stress, complimented with a quick survey for us to better serve you.
          - You would have access to resources and coaching depending on your stress levels.

          As part of our initial diagnosis, we are circulating this survey from {Start Date} to {End Date}. We look forward to your responses.

          Participation is strictly voluntary. Your input will be kept anonymous to us.

          If you have any questions regarding this survey, seek adminName or contact number.
          Dear Employees, We are proud to announce that ...'/>
      
        <div className="flex flex-row space-x-6 p-6">
          <LaunchModal />
          <TestModal />
        </div>
        

      </div>
   </div>
  );
}

export default AssessmentsCard;