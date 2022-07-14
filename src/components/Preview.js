import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Survey from '../survey';

const Preview = () => {

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
    <div>
        {/* Message Template */}
        <div>{text}</div>
        {/* <div>
            <Survey className="overflow-auto"/>
        </div> */}
    </div>
  )
}

export default Preview