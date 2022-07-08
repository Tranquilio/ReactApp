import Sidebar from '../..//components/Sidebar'
import {useEffect} from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import Modal from '../..//components/Modal'
import classes from "./nav.module.css";

var code = "Deploy survey";

function DeployPage() {
    const [deployState, setDeploy] = useState(false);
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
            
                <div className='text-center'>
                <div className='text-2xl font-bold'>
                    Ready to deploy survey?
                </div>
                
                <Link to="">
                    <button className='shadow-xl py-5 px-5 mt-10 rounded-lg text-white bg-pink-400 hover:bg-pink-500' onClick={clicked} >
                        <a className='tracking-tight md:text-white text-rose-400 px-2'>{code}</a>
                    </button>
                </Link>
            
                {choice &&
                <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2'>{generateLink()}</a>
                }

              <div className='gap-10 mt-48 flex justify-center items-center'>
              <Link to="/profile/survey/preview">
              <div className={classes.backarrow}>
                <div className="rotate-180 ">Back</div>
              </div>
              </Link>
              </div>
            </div>

            {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

          </div>
        </div>
    </div>
    </div>
    );
}

export default DeployPage;

{/* <Link to="">
<button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400'>

      // console.log(deployState)
       {if(!deployState) { }
      
           setDeploy(true);
      }
   <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2 text-xl'>{code}</a>
</button>
</Link> */}