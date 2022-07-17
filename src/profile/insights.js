import Sidebar from '..//components/Sidebar'
import { Fade } from 'react-reveal'
import SBChart from '..//components/Chart'
import Paper from '@mui/material/Paper'

function InsightsPage() {

  // const [data, setData] = useState(null);

  // useEffect(() => {

  //   async function getData() {
  //     const result = await fetch('../api/csv2', {
  //         method : 'GET',
  //     }); 
  
  //     const body =  await result.json(); 
  //     console.log(body);
      
  //     var data = body;
  //     return data.csvInfo;
  //   }  
  
  //   getData().then((value) => setData(value)); 

  // },[]);
  
  // const { data: session, status } = useSession();

  // useEffect(() => {

  //   if(session == null) {
  //     console.log("Pushing to index") 
  //     Router.push('/');
  //   }
  // })

  return (  
    <div className='bg-gradient-to-r from-transparent to-pink-50'>  
      <div className='flex'>
        
        <div className='flex z-10'>
          <Sidebar />
        </div>
      
        <div className='mt-32 ml-10 mb-4'>
          <Fade bottom cascade>

            <div className='grid grid-cols-3'>
             
              <div>
                {/* Wellbeing */}
                <Paper
                  sx={{
                    p: 3,
                    height: 250,
                    width: 400,
                  }}
                >

                <div className='text-xl font-bold text-center text-pink-400'>WELLBEING</div>
                <div className='text-right mt-1'>Average wellbeing scores compared to previous months</div>
                
                </Paper>

                {/* Highlights */}
                <div className='mt-10'>
                  <div className='text-xl font-bold text-pink-400'>HIGHLIGHTS</div>
                  <div>You reached the highest wellbeing score this month</div>
                </div>
              </div>

              <div>
                <Paper sx={{
                    p: 3,
                    height: 440,
                    width: 820,
                  }}
                >
                  {/* Stress Breakdown and Chart */}
                  <div className='text-pink-400 text-xl font-bold'>STRESS BREAKDOWN</div>
                  <div className='mt-1'>The stressor breakdown of your organisation. Your score increased by 20 points compared to previous month</div>            
                  <div className='ml-1 cursor-pointer rounded-lg mt-10'>
                    <SBChart /> 
                  </div>
                </Paper>
                
                <div className='grid grid-cols-2'>
                  {/* Teams */}
                  <div>
                    <Paper
                      sx={{
                        p: 3,
                        height: 200,
                        width: 410,
                      }}
                    >
                      <div className='text-xl font-bold text-pink-400'>TEAMS</div>
                      <div className='mt-1'>Wellbeing breakdown by team</div>
                    </Paper>
                  </div>

                  {/* Seniority */}
                  <div className='ml-48'>
                    <Paper
                      sx={{
                        p: 3,
                        height: 200,
                        width: 410,
                      }}
                      className='ml-1'
                    >
                      <div className='text-xl font-bold text-pink-400'>SENIORITY</div>
                      <div className='mt-1'>Wellbeing breakdown by seniority</div>
                    </Paper>
                  </div>
                </div>
              </div>

              </div>
      
          </Fade>
        </div>
        
      </div>
    </div>
  );  
}

export default InsightsPage;
     
