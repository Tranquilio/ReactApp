import Sidebar from '..//components/Sidebar'
import {useEffect} from "react";
import { Fade } from 'react-reveal';
import SBChart from '..//components/Chart';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
// import FilterButton from '../../components/FilterButton';

function InsightsPage() {

  const [data, setData] = useState(null);

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
      
        <Container sx={{ mt: 20, mb: 4 }} className='relative'>
          <Fade bottom cascade>
            <div className='text-2xl font-semibold text-center mb-10'>Our measurement of your organisational well-being based on 
            <div className='text-rose-300 font-bold text-3xl'>six psychologically valid construct</div>
            </div>
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
          {/*<div className='text-center mt-52'> 
            <FilterButton/>   
            </div>  */}
          </div>

          </Fade>
        </Container>
        
      </div>
    </div>

  );  
}

export default InsightsPage;
     
