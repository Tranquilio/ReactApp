import Sidebar from '../components/Sidebar'
import SurveyInfo from '../components/SurveyInfo';
import classes from "./survey/nav.module.css";
import {Link} from "react-router-dom";

function SurveyPage() {
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
              
            {/* Component for Insertion File and Excel Table  */}
            <SurveyInfo />

            <div className='gap-10 mt-6 flex justify-center items-center'>
              <Link to="/profile/survey/create">
                <div className={classes.nextarrow}>Next</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default SurveyPage;