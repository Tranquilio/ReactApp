import Sidebar from '../..//components/Sidebar'
import {useEffect} from "react";
import classes from "./nav.module.css";
import Form from '../..//components/Form'
import { Paper, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Grid, TextField } from "@mui/material";

// const useStyles = makeStyles(theme => ({
//   pageContent: {
//     margin: theme.spacing(5),
//     padding: theme.spacing(3)
//   }
// }))
var test = 7;

function CreatePage() {

  // const classes = useStyles();

    return (
    <div className='bg-gradient-to-r from-transparent to-pink-50'>
    
    <div className='h-screen'>      
        <div className='flex'>
        <div className='flex z-10'>
         <Sidebar />
        </div>
            <div>
              <ul className='p-48 flex -mt-10 gap-60'>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey">Onboard</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/create" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/create">Create</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/preview" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/preview">Preview</Link>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/deploy" ? "text-pink-500 border-b-4 border-pink-500" : ""}`}>
                  <Link to="/profile/survey/deploy">Deploy</Link>
                </li>
              </ul>
            
              <div className='text-center -mt-32 ml-11'>
              
              <Paper elevation={3}>
                <div className='p-5'>
                <Form />
                </div>
              </Paper>

              <div className='gap-10 mt-16 flex justify-center items-center'>
              <Link to="/profile/survey">
              <div className={classes.backarrow}>
                <div className="rotate-180 ">Back</div>
              </div>
              </Link>

              
              {/* <Link to='/profile/survey/preview' params={test}> */}
              <Link to={{ pathname: `/profile/survey/preview`, state: { foo: 'bar'} }}>

              <div className={classes.nextarrow}>Next</div>
              </Link>
              </div>
            
              </div>
              
          </div>
        </div>
    </div>
    </div>
    );
}

export default CreatePage;