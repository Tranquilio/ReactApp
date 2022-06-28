// import { getSession } from 'next-auth/react';
// import Sidebar from './sidebar'
// import {useSession} from "next-auth/react"
// import {useEffect} from "react";
// import { useState } from 'react';
// import Recommendation from '.Recommendation';
// import { Fade } from 'react-reveal';
// import { output } from '../../components/charts/SBChart';
// import Link from 'next/link';

// var data = {};
// var object = [];
// var topIndex = [];

// // const { data: session, status } = useSession();

// // useEffect(() => {

// //   if(session == null) {
// //     console.log("Pushing to index")
// //     Router.push('/');
// //   }
// // })

// function RecommendationPage() {

//     const [loaded, setLoad] = useState(false);

//     useEffect(() => {
  
//     async function getData() {
//       const result = await fetch('../api/recommendation_data', {
//           method : 'GET',
//       }); 
  
//       const body =  await result.json(); 
//       console.log(body);
      
//       data = body;

//       //async function so call here to run synchronously
//       generateObject(data);
      
//       // console.log(output);
//     }  

//     async function getIndex() {
//       const result = await fetch('../api/topStressors', {
//           method : 'GET',
//       }); 
  
//       topIndex =  await result.json(); 
//       console.log(topIndex);
//       setLoad(true);
//     }   
 
    
//     getData(); 
//     getIndex();

//     function generateObject(body) {
//       for(var num in body) {
//       const insight = body[num]; // From Id of stressor to end of description under that stressor
//       //As the type is a key cant access easily
//       var type;
//       for(var key in insight) { 
//         if(key != "_id") {
//           type = key 
//         }
//       }
  
//       const description = insight[type];
//       const first = description[0];
//       const second = description[1]; 
//       const third = description[2];
//       const fourth = description[3];
//         object.push({stressor: type , descriptionOne: first, descriptionTwo: second, descriptionThree: third, descriptionFour: fourth}) 
//       }
//         console.log(object);
//     }    

//   },[]);

//     function displayData(index) {
//       var stressor = (loaded) ? object[index]["stressor"] : "";
//       var descriptionOne = (loaded) ? object[index]["descriptionOne"] : "";
//       var descriptionTwo = (loaded) ? object[index]["descriptionTwo"] : "";
//       var descriptionThree = (loaded) ? object[index]["descriptionThree"] : "";
//       var descriptionFour = (loaded) ? object[index]["descriptionFour"] : "";

//       return {stressor: stressor , descriptionOne: descriptionOne, descriptionTwo: descriptionTwo, descriptionThree: descriptionThree, descriptionFour: descriptionFour}
//     } 

  
//   //   const { data: session, status } = useSession();

//   // useEffect(() => {

//   //   if(session == null) {
//   //     console.log("Pushing to profile")
//   //     Router.push('/');
//   //   }
//   // })

//   return (   
//     <div className='bg-gradient-to-r from-transparent to-pink-50'>    
//       <div className='flex'>
//         <Sidebar />   
//         <div className='p-48 -mt-12 -mb-16 text-center'>  
//           <div className='text-2xl text-center px-center mb-10 font-bold tracking-tight'>
//           What can you do about the
//           <p className='text-rose-400 inline'> top stressors </p> 
//           your company is facing? 
//           </div>

//           <div className='grid grid-rows-2 grid-flow-col'>
//             <ul className='mt-20'>
//               {/* Reading of stressors and descriptions */}  
//               {topIndex.map((value, index) => {    
//                   return (
//                     <li obj={topIndex} key={index} >{
//                     <Recommendation stressor={displayData(value).stressor} descriptionOne={displayData(value).descriptionOne} descriptionTwo={displayData(value).descriptionTwo} descriptionThree={displayData(value).descriptionThree} descriptionFour={displayData(value).descriptionFour}/>
//                     }  
//                     </li>      
//                   )     
//               })}      
//             </ul>
//             {/* Contact coach button */}
//             <div className='mt-10 text-center justify-center'>
//               <div className='font-semibold tracking-tight text-xl'>Do you want a professional coach to help with the stressors and reach new heights?</div>
//                 <Link href="">
//                   <button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400'> 
//                     <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2 text-xl'>Book a slot now!</a>
//                   </button>
//                 </Link>
//             </div>
//           </div> 

//           </div>
          
          
          
//         </div> 
      

      
//      </div>  
//   );  
// }

// // export async function getServerSideProps(context) {
// //   const session = await getSession({ req: context.req });

// //   if (!session) {
// //     return {
// //       redirect: {
// //         destination: '/auth',
// //         permanent: false,
// //       },
// //     };
// //   }

// //   return {
// //     props: { session },
// //   };
// // }

// export default RecommendationPage;