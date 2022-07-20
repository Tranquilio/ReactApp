import Sidebar from '..//components/Sidebar'
import { Fade } from 'react-reveal'
import SBChart from '..//components/Chart'
import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import DashboardCard01 from '../components/DashboardCard01'

function InsightsPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-pink-50'>  
 
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <DashboardCard01 />
          </div>
        </div>

      </div>
    </div>
  );  
}

export default InsightsPage;

{/* <div className='mt-32 ml-10 mb-4'>
<Fade bottom cascade>

  <div className='grid grid-cols-3'>
   
    <div>
      {/* Wellbeing */}
//       <Paper
//         sx={{
//           p: 3,
//           height: 250,
//           width: 400,
//         }}
//       >

//       <div className='text-xl font-bold text-center text-pink-400'>WELLBEING</div>
//       <div className='text-right mt-1'>Average wellbeing scores compared to previous months</div>
      
//       </Paper>

//       {/* Highlights */}
//       <div className='mt-10'>
//         <div className='text-xl font-bold text-pink-400'>HIGHLIGHTS</div>
//         <div>You reached the highest wellbeing score this month</div>
//       </div>
//     </div>

//     <div>
//       <Paper sx={{
//           p: 3,
//           height: 440,
//           width: 820,
//         }}
//       >
//         {/* Stress Breakdown and Chart */}
//         <div className='text-pink-400 text-xl font-bold'>STRESS BREAKDOWN</div>
//         <div className='mt-1'>The stressor breakdown of your organisation. Your score increased by 20 points compared to previous month</div>            
//         <div className='ml-1 cursor-pointer rounded-lg mt-10'>
//           <SBChart /> 
//         </div>
//       </Paper>
      
//       <div className='grid grid-cols-2'>
//         {/* Teams */}
//         <div>
//           <Paper
//             sx={{
//               p: 3,
//               height: 200,
//               width: 410,
//             }}
//           >
//             <div className='text-xl font-bold text-pink-400'>TEAMS</div>
//             <div className='mt-1'>Wellbeing breakdown by team</div>
//           </Paper>
//         </div>

//         {/* Seniority */}
//         <div className='ml-48'>
//           <Paper
//             sx={{
//               p: 3,
//               height: 200,
//               width: 410,
//             }}
//             className='ml-1'
//           >
//             <div className='text-xl font-bold text-pink-400'>SENIORITY</div>
//             <div className='mt-1'>Wellbeing breakdown by seniority</div>
//           </Paper>
//         </div>
//       </div>
//     </div>

//     </div>

// </Fade>
//</div> 
     
