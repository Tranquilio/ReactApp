import React from 'react'
import { Grid, TextField } from "@mui/material"
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'

var code = "Deploy survey";

const Deploy = () => {

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    const clicked = () => {
        setModalOn(true)
    }

    function generateLink() {
        const generateRandomString = () => window.location.href + '/' + Math.random().toString(36).slice(2)
        var link = generateRandomString();
        navigator.clipboard.writeText(link).then(() => alert('Text copied'));
        code = link;
    }

  return (
    <div className="flex px-10">
     
        <Grid container direction="column" gap={4} >
            <div className="text-2xl font-bold">Ready To Deploy Survey?</div>
            
            <div className='ml-12'>
                <Grid item className='flex items-center'>
                    <div className='font-semibold px-4 ml-72'>Survey Name: </div> 
                    {/* Survey Name */}
                    <TextField
                        variant="filled" 
                        label="" // Insert Survey Name Previously Entered in Create Page
                        name="surveyName" 
                        color="secondary" 
                        sx={{ width: 250 }} 
                        focused 
                        disabled
                        />
                </Grid>
            </div>

            <div className='ml-12'>
                <Grid item className='flex items-center'>
                    <div className='font-semibold px-4 ml-64'>Survey Start Date: </div>
                    {/* Survey Start Date */}
                    <TextField
                        variant="filled" 
                        label="" // Insert Survey Start Date Previously Entered in Create Page
                        name="surveyStartDate" 
                        color="secondary" 
                        sx={{ width: 250 }} 
                        focused 
                        disabled
                        />
                </Grid>
            </div>

            <div className='ml-14'>
                <Grid item className='flex items-center'>
                    <div className='font-semibold px-4 ml-64'>Survey End Date: </div>
                    {/* Survey Start Date */}
                    <TextField
                        variant="filled" 
                        label="" // Insert Survey End Date Previously Entered in Create Page
                        name="surveyEndDate" 
                        color="secondary" 
                        sx={{ width: 250 }} 
                        focused 
                        disabled
                        />
                </Grid>
            </div>

            <Link to="">
                    <button className='shadow-xl py-5 px-5 rounded-lg text-white bg-pink-300 hover:bg-pink-400' onClick={clicked} >
                        <a className='tracking-tight md:text-white text-rose-400 px-2'>{code}</a>
                    </button>
            </Link>
            
            {choice && 
                <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2'>{generateLink()}</a>
            }
            
        </Grid>

        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

    </div>
  )
}

export default Deploy