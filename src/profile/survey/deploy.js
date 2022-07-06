import Sidebar from '../..//components/Sidebar'
import {useEffect} from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import Modal from '../..//components/Modal'

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
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey" ? "text-rose-400" : ""}`}>
                  <a href="/profile/survey">Onboard</a>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/create" ? "text-rose-400" : ""}`}>
                  <a href="/profile/survey/create">Create</a>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/preview" ? "text-rose-400" : ""}`}>
                  <a href="/profile/survey/preview">Preview</a>
                </li>
                <li className={`cursor-pointer hover:text-pink-300 ${window.location.pathname == "/profile/survey/deploy" ? "text-rose-400" : ""}`}>
                  <a href="/profile/survey/deploy">Deploy</a>
                </li>
              </ul>
            
            <div className='text-center'>
                <div className='text-2xl font-bold'>
                    Ready to deploy survey?
                </div>
                
                <Link to="">
                    <button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400' onClick={clicked} >
                        <a className='tracking-tight md:text-white text-rose-400 px-2 text-xl'>{code}</a>
                    </button>
                </Link>
            
                {choice &&
                <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2 text-xl'>{generateLink()}</a>
                }
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