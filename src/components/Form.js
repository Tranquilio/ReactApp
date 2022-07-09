import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

function Form() {

    const [dep, setDep] = useState('');

    const handleChange = (event) => {
        setDep(event.target.value);
    };

    return (
      
      <div className="px-20">

        <Grid container direction="column" gap={3} >
          
          <Grid item gap={6}>
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

          <Grid item gap={6}>
            {/* Survey Date */}
            <TextField
                id="datetime-local"
                label="Survey Date"
                type="datetime-local"
                sx={{ width: 250 }}
                InputLabelProps={{
                shrink: true,
                }}
                color="secondary" 
                focused
                />
          </Grid>
          
          <Grid item gap={6}>
            {/* Department */}
            <TextField
                id="outlined-select-dep"
                select
                label="Select Department"
                value={dep}
                onChange={handleChange}
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
                  console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
              />

          <Grid />

        </Grid> 
    </div>
    )
}

export default Form;