import Sidebar from '..//components/Sidebar'
import { Fade } from 'react-reveal'
import { useState, useEffect } from 'react'

var overall;
var score;

function OverviewPage() {

  const [loaded,setLoad] = useState(false);

  useEffect(() => {

    async function getScore() {
      const result = await fetch('http://localhost:5000/api/employees/scores/all', {
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
  
  // const { data: session, status } = useSession();

  // useEffect(() => {

  //   if(session == null) {
  //     console.log("Pushing to index")
  //     Router.push('/');
  //   }
  // })

  return (  
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-pink-50'>  
     
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden mt-64">
        
        {/* Wellbeing score display */}
        <Fade bottom>
          <div className='text-7xl text-center font-bold tracking-tight'>
          Tranquilio wellbeing score is
          </div>

          <div>
            { (score > 90) ? 
            <div>
              <div className='text-7xl text-center font-bold text-green-400 py-5'>{score}</div>
              <div className='text-center mt-12 text-xl'>Awesome! Your organisation is averaging an extremely healthy well-being score.</div>
            </div> :
              (score > 80) ? 
            <div>
              <div className='text-7xl text-center font-bold text-green-300 py-5'>{score}</div>
              <div className='text-center mt-12 text-xl'>Great! Your organisation is averaging a very healthy well-being score.</div>
            </div> :
              (score > 60) ? 
            <div>
              <div className='text-7xl text-center font-bold text-yellow-400 py-5'>{score}</div>
              <div className='text-center mt-12 text-xl'>Good job! Your organisation is averaging a healthy well-being score.</div>
            </div> :
              (score > 50) ? 
            <div>
              <div className='text-7xl text-center font-bold text-red-200 py-5'>{score}</div>
              <div className='text-center mt-12 text-xl'>Something's going on. Your organisation is averaging a poor well-being score.</div>
            </div> :
            <div>
              <div className='text-7xl text-center font-bold text-red-400 py-5'>{score}</div>
              <div className='text-center mt-12 text-xl'>Time to reflect and review! Your organisation is averaging an extremely poor well-being score.</div>
            </div>
            }
          </div>
        </Fade>

      </div>

  </div>
  );  
}

export default OverviewPage;