import Sidebar from '..//components/Sidebar'
import {useEffect} from "react";
import { Fade } from 'react-reveal';
import SBChart from '..//components/Chart';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
// import FilterButton from '../../components/FilterButton';

function InsightsPage() {

  const [data, setData] = useState(null);

  useEffect(() => {

    async function getData() {
      const result = await fetch('../api/csv2', {
          method : 'GET',
      }); 
  
      const body =  await result.json(); 
      console.log(body);
      
      var data = body;
      return data.csvInfo;
    }  
  
    getData().then((value) => setData(value)); 

  },[]);
  
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
     
      <Container sx={{ mt: 20, mb: 4 }} className='relative'>
            <Fade bottom cascade>
              <div className='text-2xl font-semibold text-center mb-10'>Our measurement of your organisational well-being based on 
              <div className='text-rose-300 font-bold text-3xl'>six psychologically valid construct</div></div>
            <Grid container spacing={53}>

            {/* Box 1 */}
            <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 150,
                width: 300,
                background: 'linear-gradient(to right bottom, pink, white)'
              }}
            >
              <div className='text-xl font-bold text-center text-rose-400'>What is it?</div>
              <div className='mt-10 px-16'></div>
            </Paper>
            </Grid> 
                
            {/* Box 2 */}
            <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 150,
                width: 300,
                background: 'linear-gradient(to right bottom, pink, white)'
              }}
            >
              <div className='text-xl font-bold text-center text-rose-400'>Previous Score</div>
              <div className='mt-10 px-16'></div>
            </Paper>
            </Grid>

            {/* Box 3 */}
            <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 150,
                width: 300,
                background: 'linear-gradient(to right bottom, pink, white)'
              }}
            >
              <div className='text-xl font-bold text-center text-rose-400'>What do we imply?</div>
              <div className='mt-10 px-16'></div>
            </Paper>
            </Grid>
           
            </Grid>
            {/* Chart */}
            <div className='text-rose-400 mt-10 text-xl font-bold tracking-tight text-center mb-10'>Stress Breakdown</div>
            <div className='grid md:grid-cols-2'>
            
              <div className='ml-1 cursor-pointer rounded-lg'>
                <SBChart /> 
              </div>
           

            <div className='text-center mt-52'> 
            {/* <FilterButton/>   */}
            </div> 
            </div>
            </Fade>
            </Container>
      
    </div>
    </div>
            /* <Fade bottom cascade>
            <li>
            <div className='text-rose-400 mb-10 text-4xl font-bold tracking-tight'>Turnover Rate</div>
              <ul className='grid md:grid-cols-3 text-center'>
              <li>
                <div className='text-xl font-bold'>What is it?</div>
                <div className='mt-10 px-16'>The employee turnover rate refers to the percentage of employees who leave the organisation during a certain time period.</div>
              </li>
                <li>
                <Link href = '../insights/tr_insights'>
                <div className='mb-32 ml-1 cursor-pointer border-2 rounded-lg'> 
                <TRChart data={data} metric="turnover" timeline="6"/>   
                </div>
                </Link>
                </li>
                <li>
                  <div className='text-xl font-bold'>What do we imply?</div>
                  <div className='mt-10 px-16'></div>
                </li>
              </ul>
            </li>
            </Fade>
            <Fade bottom cascade>
            <li>
            <div className='text-rose-400 mb-10 text-4xl font-bold tracking-tight'>Absentee Rate</div>
              <ul className='grid md:grid-cols-3 text-center'>
              <li>
                <div className='text-xl font-bold'>What is it?</div>
                <div className='mt-10 px-16'>Measurement of staff absences rate outside of legitimate leaves and off-days.</div>
              </li>
                <li>
                <Link href = '../insights/ar_insights'> 
                <div className='mb-32 ml-1 cursor-pointer border-2 rounded-lg'>
                <ARChart data={data} metric="absentee" timeline="6"/>   
                </div>
                </Link>
                </li>
                <li>
                  <div className='text-xl font-bold'>What do we imply?</div>
                  <div className='mt-10 px-16'></div>
                </li>
              </ul>
            </li>
            </Fade>
            <Fade bottom cascade>
            <li>
            <div className='text-rose-400 mb-10 text-4xl font-bold tracking-tight'>Healthcare Expenditure</div>
              <ul className='grid md:grid-cols-3 text-center'>
              <li>
                <div className='text-xl font-bold'>What is it?</div>
                <div className='mt-10 px-16'></div>
              </li>
                <li>
                <Link href = '../insights/he_insights'> 
                <div className='mb-32 ml-1 cursor-pointer border-2 rounded-lg'>
                <HEChart data={data} metric="healthcare" timeline="6"/>   
                </div>
                </Link>
                </li>
                <li>
                  <div className='text-xl font-bold'>What do we imply?</div>
                  <div className='mt-10 px-16'></div>
                </li>
              </ul>
            </li>
            </Fade> */
     
  );  

}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default InsightsPage;