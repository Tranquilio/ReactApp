import Sidebar from '..//components/Sidebar'
import {useEffect} from "react";

var average;
var sum = 0;
var avg;
var topScores = [];

function OverviewPage() {

  useEffect(() => {

    async function getScore() {
      const result = await fetch('../api/topScores', {
          method : 'GET',
      }); 
  
      topScores =  await result.json(); 
      console.log(topScores);
      calcAvg(topScores);
    }   
    
    getScore();

    function calcAvg(scores) {
      for (var num in scores) {
        sum += scores[num];
      }
      // console.log(sum)
      average = Math.ceil(sum) / 3;
      // console.log(average)
      avg = Math.ceil(average)
       console.log(avg)
    }

  },[]);
  
  // const { data: session, status } = useSession();

  // useEffect(() => {

  //   if(session == null) {
  //     console.log("Pushing to index")
  //     Router.push('/');
  //   }
  // })
  
  // // console.log(scores)
  // console.log(session)

  return (  
    
    <div className='bg-gradient-to-r from-transparent to-pink-50'>
    <div className='flex h-screen'>

    <Sidebar />
  
        <div className='m-auto'>
          {/* Wellbeing score display */}
          {/* <Fade bottom> */}
            <div className='text-5xl text-center font-bold tracking-tight'>
            Tranquilio wellbeing score is
            </div>
            <div>
            { (avg == 6) ? 
            <div>
              <div className='text-5xl text-center font-bold text-green-400 py-5'>100</div>
              <div className='text-center mt-12 text-lg'>Awesome! Your organisation is averaging an extremely healthy well-being score.</div>
            </div> :
              (avg == 5) ? 
              <div>
                <div className='text-5xl text-center font-bold text-green-200 py-5'>80</div>
                <div className='text-center mt-12 text-lg'>Great! Your organisation is averaging a very healthy well-being score.</div>
              </div> :
              (avg == 3 || avg == 4) ? 
              <div>
                <div className='text-5xl text-center font-bold text-yellow-400 py-5'>50</div>
                <div className='text-center mt-12 text-lg'>Good job! Your organisation is averaging a healthy well-being score.</div>
              </div> :
              (avg == 1 || avg == 2) ? 
              <div>
                <div className='text-5xl text-center font-bold text-red-200 py-5'>20</div>
                <div className='text-center mt-12 text-lg'>Something's going on. Your organisation is averaging a poor well-being score.</div>
              </div> :
              <div>
                <div className='text-5xl text-center font-bold text-red-400 py-5'>0</div>
                <div className='text-center mt-12 text-lg'>Time to reflect and review! Your organisation is averaging an extremely poor well-being score.</div>
              </div>
            }
            </div>
            {/* </Fade> */}
        </div>
    </div>
    </div>
  );  
}

export default OverviewPage;