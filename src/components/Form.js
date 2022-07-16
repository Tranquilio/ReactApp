import { Grid, TextField } from "@mui/material"
import React, { useState } from "react"
import MenuItem from '@mui/material/MenuItem'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

var text = ""

const departments = [
    {
        label: "Information Technology",
        value: "choice-1"
      },
      {
        label: "Engineering and Architecture",
        value: "choice-2"
      },
      {
        label: "Arts, Culture, and Entertainment",
        value: "choice-3"
      },
      {
        label: "Consumer",
        value: "choice-4"
      },
      {
        label: "Business, Management, and Administration",
        value: "choice-5"
      },
      {
        label: "Communications",
        value: "choice-6"
      },
      {
        label: "Community and Social Services",
        value: "choice-7"
      },
      {
        label: "Education",
        value: "choice-8"
      },
      {
        label: "Installation, Repair, and Maintenance",
        value: "choice-9"
      },
      {
        label: "Government",
        value: "choice-10"
      },
      {
        label: "Health and Medicine",
        value: "choice-11"
      },
      {
        label: "Law and Public Policy",
        value: "choice-12"
      },
      {
        label: "Sales",
        value: "choice-13"
      },
      {
        label: "Others",
        value: "choice-14"
      }
  ];

function Form(props) {

  function updateState(data) {
    props.updateParent(data)
  }

    const [dep, setDep] = useState('');
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
      
      <div className="flex px-10">
     
        <Grid container direction="column" gap={4} >
          <div className="font-semibold">Enter Survey Details</div>
          <Grid item>
            {/* Survey Name */}
            <TextField 
                variant="outlined" 
                label="Survey Name" 
                name="surveyName" 
                color="secondary" 
                sx={{ width: 250 }} 
                focused 
                />
          </Grid>

          <Grid item>
            {/* Survey Start Date */}
            <TextField
                id="startDate"
                label="Survey Start Date"
                type="datetime-local"
                sx={{ width: 250 }}
                InputLabelProps={{
                shrink: true,
                }}
                color="secondary" 
                focused
                value={start}
                onChange={(e) => {
                  setStart(e.target.value);
                }}
                />
          </Grid>

          <Grid item>
            {/* Survey End Date */}
            <TextField
                id="endDate"
                label="Survey End Date"
                type="datetime-local"
                sx={{ width: 250 }}
                InputLabelProps={{
                shrink: true,
                }}
                color="secondary" 
                focused
                value={end}
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
                />
          </Grid>
          
          <Grid item>
            {/* Department */}
            <TextField
                id="outlined-select-dep"
                select
                label="Select Department"
                value={dep}
                onChange={(e) => {
                  setDep(e.target.value);
                }}
                color="secondary"
                focused
                sx={{ width: 250 }}
                >
                {departments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                    
            </TextField>
          </Grid>
        
        </Grid>

        {/* Rich Text Editor */}
        <div className="flex-inline">
        <div className="font-semibold mb-6">Edit Message Template (Click "Next" once you are done)</div>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Dear Employees,
            We are proud to announce that ...</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                text = data
                updateState(text)
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            />
            </div>
    
    </div>
    )
}

export default Form;