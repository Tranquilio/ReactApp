import Sidebar from '..//components/Sidebar'
import { Fade } from 'react-reveal'
import { useState, useEffect } from 'react'
import {CircleProgress} from 'react-gradient-progress'
import autoprefixer from 'autoprefixer';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

var overall;
var score;

function OverviewPage() {

  const [loaded,setLoad] = useState(false);
  const auth = useContext(AuthContext)

  useEffect(() => {

    async function getScore() {
      const companyName = "Test%20Company"
      const result = await fetch(`http://localhost:5000/api/employees/scores/${companyName}`, {
          method : 'GET',
      }); 
  
      overall =  await result.json(); 
      score = parseInt(overall['Average Score']);
      setLoad(score);
      console.log(overall)
      console.log(score)
    }      
    getScore();

  },[]);

  function colorPicker(value) {
    if(value > 90) {
      return 'rgb(34 197 94)'
    } else if (value > 80) {
      return 'rgb(134 239 172)'
    } else if (value > 60) {
      return 'rgb(250 204 21)'
    } else if (value > 50) {
      return 'rgb(254 202 202)'
    } else {
      return 'rgb(248 113 113)'
    }

  }
  
  // const { data: session, status } = useSession();

  // useEffect(() => {

  //   if(session == null) {
  //     console.log("Pushing to index")
  //     Router.push('/');
  //   }
  // })

  return (  
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  
     
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col w-full overflow-y-auto overflow-x-hidden">
        
        {/* Wellbeing score display */}
        <Fade bottom>
          <div className='m-auto'>
            <div className='text-5xl text-center font-bold tracking-tight'>
            {auth.domain} wellbeing score is
            </div>

            <div className="text-center mt-10">
              <CircleProgress 
                percentage={score} 
                strokeWidth={20} 
                width={400}
                primaryColor={['#0D9488','#99F6E4']}
                secondaryColor="#f0f0f0"
                fontColor={colorPicker(score)}
                fontSize="64px"
              />
            </div>

            <div>
              { 
                (score > 90) ? 
                <div className='text-center mt-12 text-xl'>Awesome! Your organisation is averaging an extremely healthy well-being score</div> :
                (score > 80) ? 
                <div className='text-center mt-12 text-xl'>Great! Your organisation is averaging a very healthy well-being score</div> :
                (score > 60) ? 
                <div className='text-center mt-12 text-xl'>Good job! Your organisation is averaging a healthy well-being score</div> :
                (score > 50) ? 
                <div className='text-center mt-12 text-xl'>Something's going on. Your organisation is averaging a poor well-being score</div> :
                <div className='text-center mt-12 text-xl'>Time to reflect and review! Your organisation is averaging an extremely poor well-being score</div>
              }
            </div>
          </div>
        </Fade>
        
      </div>

  </div>
  );  
}

export default OverviewPage;