import Sidebar from '..//components/Sidebar2'
import React from 'react'
import WellbeingCard from '../components/dashboard/WellbeingCard'
import TeamCard from '../components/dashboard/TeamCard'
import SeniorityCard from '../components/dashboard/SeniorityCard'
import SBCard from '../components/dashboard/SBCard'
import Banner from '../components/dashboard/Banner'
import ARCard from '../components/dashboard/ARCard'
import TRCard from '../components/dashboard/TRCard'

function InsightsPage() {
  
  // const { data: session, status } = useSession();

  // useEffect(() => {

  //   if(session == null) {
  //     console.log("Pushing to index") 
  //     Router.push('/');
  //   }
  // })

  return (  
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  
      {/* Makes the sidebar fixed on the left */}
      {/* <div className="relative grid grid-cols-3 gap-4 overflow-y-auto bg-black"> */}
      <Sidebar />

      <div className="relative grid grid-cols-3 w-screen gap-5 overflow-y-auto overflow-x-hidden m-4 scrollbar-hide">


          {/* <WellbeingCard /> */}
        {/* Overall background */}
        {/* <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"> */}

          {/* <div className="grid grid-cols-12 gap-6 bg-white"> */}
            <div className="flex-1"><WellbeingCard /></div>
            <div className="flex-1"><TeamCard /></div>
            <div className="flex-1"><SeniorityCard /></div>
            <div className="flex-1"><SBCard /></div>
            <div className="flex-1"><ARCard /></div>
            <div className="flex-1"><TRCard /></div>
            <div className="flex-1"><TRCard /></div>


             {/* This div cluster is temporary until then the new features come */}
            {/* <div className='col-span-12'> */}
              {/* <SBCard /> */}
            {/* </div> */}
            
            {/* <ARCard /> */}
            {/* <TRCard /> */}
      </div>
      
     </div>
  );  
}

export default InsightsPage;





// const InsightsPage = () => {
//   return (
//     <div className="relative bg-white w-full h-[898px] text-left text-sm text-black font-raleway">
//       <div className="absolute top-[196px] left-[31px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-xs">
//         <div className="absolute top-[13px] left-[13px] text-2xl font-semibold inline-block w-[83px] h-[22px]">
//           Wellbeing
//         </div>
//         <div className="absolute top-[39px] left-[13px] text-base inline-block w-[295px] h-[22px]">
//           <p className="[margin-block-start:0] [margin-block-end:0px]">
//             Average wellbeing score compared to previous months
//           </p>
//         </div>
//         <div className="absolute top-[92px] left-[33px] w-[255.21px] h-[202px] text-sm">
//           <div className="absolute top-[188px] left-[32px] w-[223.21px] h-[14px] text-lg">
//             <div className="absolute top-[0px] left-[0px] inline-block w-[26.23px]">
//               Sept
//             </div>
//             <div className="absolute top-[0px] left-[69px] inline-block w-[21.19px]">
//               Oct
//             </div>
//             <div className="absolute top-[0px] left-[133px] inline-block w-[24.22px]">
//               Nov
//             </div>
//             <div className="absolute top-[0px] left-[200px] inline-block w-[23.21px]">
//               Dec
//             </div>
//           </div>
//           <div className="absolute top-[0px] left-[0px] inline-block w-[30.02px] h-[27px]">
//             100
//           </div>
//           <div className="absolute top-[170px] left-[0px] inline-block w-[12.01px] h-[27px]">
//             0
//           </div>
//           <div className="absolute top-[34px] left-[0px] inline-block w-[22.82px] h-[27px]">
//             80
//           </div>
//           <div className="absolute top-[68px] left-[0px] inline-block w-[22.82px] h-[27px]">
//             60
//           </div>
//           <div className="absolute top-[102px] left-[0px] inline-block w-[21.62px] h-[27px]">
//             40
//           </div>
//           <div className="absolute top-[136px] left-[0px] inline-block w-[21.62px] h-[27px]">
//             20
//           </div>
//         </div>
//         <div className="absolute top-[96.75px] left-[79.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
//         <div className="absolute top-[96.75px] left-[145.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
//         <div className="absolute top-[96.75px] left-[209.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
//         <div className="absolute top-[96.75px] left-[209.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.8)] box-border w-[0.5px] h-[179.54px]" />
//         <div className="absolute top-[137.5px] left-[209.5px] border-r-[1px_solid_rgba(130,_162,_132,_0.8)] box-border w-[1px] h-[138px]" />
//         <div className="absolute top-[96.75px] left-[276.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
//         <img
//           className="absolute top-[118px] left-[78px] w-[200px] h-[157.5px]"
//           alt=""
//           src="../group-44.svg"
//         />
//         <img
//           className="absolute top-[133px] left-[207px] w-[6px] h-[6px]"
//           alt=""
//           src="../ellipse-4.svg"
//         />
//         <div className="absolute top-[105px] left-[190px] rounded-[15px] bg-black w-[40px] h-[23px]" />
//         <img
//           className="absolute top-[127.25px] left-[207.4px] w-[5.2px] h-[3.75px]"
//           alt=""
//           src="../polygon-1.svg"
//         />
//         <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px]">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[55px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5px] inline-block">
//             4 months
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector.svg"
//           />
//         </div>
//         <div className="absolute top-[64px] left-[13px] bg-gray-400 w-[290px] h-[1px]" />
//         <div className="absolute top-[112px] left-[203px] font-semibold text-gray-100 inline-block">
//           79%
//         </div>
//       </div>
//       <div className="absolute top-[547px] left-[31px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[692px] h-[320px] overflow-hidden text-xs">
//         <div className="absolute top-[13px] left-[13px] text-2xl font-semibold inline-block w-[141px] h-[22px]">
//           Stress Breakdown
//         </div>
//         <div className="absolute top-[39px] left-[13px] text-base inline-block w-[338px] h-[22px]">
//           Stress breakdown of your organization based on 6 sub-constructs
//         </div>
//         <div className="absolute top-[64px] left-[13px] bg-gray-400 w-[662px] h-[1px]" />
//         <div className="absolute top-[92px] left-[20px] w-[649px] h-[197px] text-sm">
//           <div className="absolute top-[188px] left-[40.49px] w-[608.51px] h-[9px] text-xs">
//             <div className="absolute top-[0px] left-[0px] inline-block">
//               Work Demand
//             </div>
//             <div className="absolute top-[0px] left-[108.51px] inline-block">
//               Work Control
//             </div>
//             <div className="absolute top-[0px] left-[208.51px] inline-block">
//               Work Satisfaction
//             </div>
//             <div className="absolute top-[0px] left-[321.51px] inline-block">
//               Work Support
//             </div>
//             <div className="absolute top-[0px] left-[423.51px] inline-block">
//               Work Recognition
//             </div>
//             <div className="absolute top-[0px] left-[510.51px] inline-block">
//               Organization Management
//             </div>
//           </div>
//           <div className="absolute top-[0px] left-[0px] inline-block w-[37.99px] h-[27px]">
//             100
//           </div>
//           <div className="absolute top-[170px] left-[0px] inline-block w-[15.19px] h-[27px]">
//             0
//           </div>
//           <div className="absolute top-[34px] left-[0px] inline-block w-[28.87px] h-[27px]">
//             80
//           </div>
//           <div className="absolute top-[68px] left-[0px] inline-block w-[28.87px] h-[27px]">
//             60
//           </div>
//           <div className="absolute top-[102px] left-[0px] inline-block w-[27.35px] h-[27px]">
//             40
//           </div>
//           <div className="absolute top-[136px] left-[0px] inline-block w-[27.35px] h-[27px]">
//             20
//           </div>
//         </div>
//         <div className="absolute top-[16px] left-[614px] w-[61px] h-[13px]">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[61px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
//             This month
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector1.svg"
//           />
//         </div>
//         <div className="absolute top-[188px] left-[60px] w-[55px] h-[84px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[6px]" />
//           <div className="absolute top-[6px] left-[0px] bg-gray-1000 w-[55px] h-[78px]" />
//         </div>
//         <div className="absolute top-[143px] left-[167px] w-[55px] h-[129px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[10px]" />
//           <div className="absolute top-[10px] left-[0px] bg-gray-1000 w-[55px] h-[119px]" />
//         </div>
//         <div className="absolute top-[128px] left-[274px] w-[55px] h-[144px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[32px]" />
//           <div className="absolute top-[32px] left-[0px] bg-gray-1000 w-[55px] h-[112px]" />
//         </div>
//         <div className="absolute top-[150px] left-[381px] w-[55px] h-[125px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[13px]" />
//           <div className="absolute top-[13px] left-[0px] bg-gray-1000 w-[55px] h-[112px]" />
//         </div>
//         <div className="absolute top-[138px] left-[489px] w-[55px] h-[134px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[41px]" />
//           <div className="absolute top-[41px] left-[0px] bg-gray-1000 w-[55px] h-[93px]" />
//         </div>
//         <div className="absolute top-[115px] left-[595px] w-[55px] h-[157px]">
//           <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[16px]" />
//           <div className="absolute top-[16px] left-[0px] bg-gray-1000 w-[55px] h-[141px]" />
//         </div>
//         <div className="absolute top-[132px] left-[335px] rounded-[15px] bg-black w-[40px] h-[23px]" />
//         <img
//           className="absolute h-[0.78%] w-[0.65%] top-[46.09%] right-[48.99%] bottom-[53.13%] left-[50.36%] max-w-full overflow-hidden max-h-full"
//           alt=""
//           src="../vector2.svg"
//         />
//         <div className="absolute top-[136px] left-[347px] font-semibold text-gray-100 inline-block">
//           83%
//         </div>
//         <div className="absolute top-[145px] left-[354px] text-2xs font-semibold text-gray-500 inline-block">
//           20
//         </div>
//         <img
//           className="absolute top-[141.4px] left-[332px] w-[3.75px] h-[5.2px]"
//           alt=""
//           src="../polygon-11.svg"
//         />
//         <div className="absolute top-[100px] left-[339px] font-semibold text-gray-100 inline-block">
//           79%
//         </div>
//         <div className="absolute top-[72px] left-[590px] rounded-[10px] bg-brown w-[20px] h-[7px]" />
//         <div className="absolute top-[87px] left-[590px] rounded-[10px] bg-gray-1000 w-[20px] h-[7px]" />
//         <div className="absolute top-[71px] left-[615px] inline-block">
//           This month
//         </div>
//         <div className="absolute top-[87px] left-[615px] inline-block">
//           Previous month
//         </div>
//       </div>
//       <div className="absolute top-[196px] left-[775px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-gray-800">
//         <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-red-200 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
//           Seniority
//         </div>
//         <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
//           Wellbeing score by seniority
//         </div>
//         <div className="absolute top-[124px] left-[29px] w-[51px] h-[171.77px] text-base text-black">
//           <div className="absolute top-[0px] left-[0px] inline-block w-[51px] h-[13.23px]">
//             0-0.5 year
//           </div>
//           <div className="absolute top-[39px] left-[2px] inline-block">
//             0.5-1 year
//           </div>
//           <div className="absolute top-[80px] left-[6px] inline-block">
//             1-2 years
//           </div>
//           <div className="absolute top-[122.08px] left-[5px] inline-block">
//             2-3 years
//           </div>
//           <div className="absolute top-[158.77px] left-[10px] inline-block">
//             3+ years
//           </div>
//         </div>
//         <div className="absolute top-[65px] left-[13px] bg-gray-400 w-[290px] h-[1px]" />
//         <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
//         <div className="absolute top-[88px] left-[136px] text-lg text-black inline-block w-[26.23px]">
//           Sept
//         </div>
//         <div className="absolute top-[88px] left-[205px] text-lg text-black inline-block w-[21.19px]">
//           Oct
//         </div>
//         <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block w-[24.22px]">
//           Nov
//         </div>
//         <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[122px] left-[144px] inline-block">70</div>
//         <div className="absolute top-[202px] left-[144px] inline-block">79</div>
//         <div className="absolute top-[162px] left-[144px] inline-block">59</div>
//         <div className="absolute top-[242px] left-[144px] inline-block">80</div>
//         <div className="absolute top-[282px] left-[144px] inline-block">68</div>
//         <div className="absolute top-[122px] left-[210px] inline-block">69</div>
//         <div className="absolute top-[202px] left-[210px] inline-block">84</div>
//         <div className="absolute top-[162px] left-[210px] inline-block">68</div>
//         <div className="absolute top-[242px] left-[210px] inline-block">84</div>
//         <div className="absolute top-[282px] left-[210px] inline-block">71</div>
//         <div className="absolute top-[123px] left-[277px] inline-block">77</div>
//         <div className="absolute top-[203px] left-[277px] inline-block">88</div>
//         <div className="absolute top-[163px] left-[277px] inline-block">71</div>
//         <div className="absolute top-[243px] left-[277px] inline-block">90</div>
//         <div className="absolute top-[283px] left-[277px] inline-block">79</div>
//         <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[55px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5px] inline-block">
//             3 months
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector.svg"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[546px] left-[775px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-gray-800">
//         <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-red-200 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
//           Initiative
//         </div>
//         <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
//           Wellbeing score by company initiatives
//         </div>
//         <div className="absolute top-[65px] left-[13px] bg-gray-400 w-[290px] h-[1px]" />
//         <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
//         <div className="absolute top-[88px] left-[131px] text-lg text-black inline-block">
//           Before
//         </div>
//         <div className="absolute top-[88px] left-[199px] text-lg text-black inline-block">
//           During
//         </div>
//         <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block">
//           After
//         </div>
//         <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[122px] left-[144px] inline-block">70</div>
//         <div className="absolute top-[202px] left-[144px] inline-block">59</div>
//         <div className="absolute top-[162px] left-[144px] inline-block">66</div>
//         <div className="absolute top-[242px] left-[144px] inline-block">80</div>
//         <div className="absolute top-[282px] left-[144px] inline-block">68</div>
//         <div className="absolute top-[122px] left-[210px] inline-block">69</div>
//         <div className="absolute top-[202px] left-[210px] inline-block">84</div>
//         <div className="absolute top-[162px] left-[210px] inline-block">68</div>
//         <div className="absolute top-[242px] left-[210px] inline-block">84</div>
//         <div className="absolute top-[282px] left-[210px] inline-block">71</div>
//         <div className="absolute top-[123px] left-[277px] inline-block">77</div>
//         <div className="absolute top-[203px] left-[277px] inline-block">88</div>
//         <div className="absolute top-[163px] left-[277px] inline-block">71</div>
//         <div className="absolute top-[243px] left-[277px] inline-block">90</div>
//         <div className="absolute top-[283px] left-[277px] inline-block">79</div>
//         <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[55px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5px] inline-block">
//             3 months
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector.svg"
//           />
//         </div>
//         <div className="absolute top-[124px] left-[32px] w-[53px] h-[171.77px] text-base text-black">
//           <div className="absolute top-[0px] left-[0px] inline-block">
//             Initiative A
//           </div>
//           <div className="absolute top-[39px] left-[0px] inline-block">
//             Initiative B
//           </div>
//           <div className="absolute top-[80px] left-[0px] inline-block">
//             Initiative C
//           </div>
//           <div className="absolute top-[122.08px] left-[0px] inline-block">
//             Initiative D
//           </div>
//           <div className="absolute top-[158.77px] left-[0px] inline-block">
//             Initiative E
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[198px] left-[406px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-gray-800">
//         <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-red-200 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
//           Team
//         </div>
//         <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
//           Welbeing Score by team
//         </div>
//         <div className="absolute top-[65px] left-[13px] bg-gray-400 w-[290px] h-[1px]" />
//         <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
//         <div className="absolute top-[88px] left-[131px] text-lg text-black inline-block">
//           Before
//         </div>
//         <div className="absolute top-[88px] left-[199px] text-lg text-black inline-block">
//           During
//         </div>
//         <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block">
//           After
//         </div>
//         <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-1000 w-[43px] h-[27px]" />
//         <div className="absolute top-[122px] left-[144px] inline-block">65</div>
//         <div className="absolute top-[202px] left-[144px] inline-block">52</div>
//         <div className="absolute top-[162px] left-[144px] inline-block">83</div>
//         <div className="absolute top-[242px] left-[144px] inline-block">76</div>
//         <div className="absolute top-[282px] left-[144px] inline-block">85</div>
//         <div className="absolute top-[122px] left-[210px] inline-block">80</div>
//         <div className="absolute top-[202px] left-[210px] inline-block">65</div>
//         <div className="absolute top-[162px] left-[210px] inline-block">86</div>
//         <div className="absolute top-[242px] left-[210px] inline-block">78</div>
//         <div className="absolute top-[282px] left-[210px] inline-block">90</div>
//         <div className="absolute top-[123px] left-[277px] inline-block">82</div>
//         <div className="absolute top-[203px] left-[277px] inline-block">79</div>
//         <div className="absolute top-[163px] left-[277px] inline-block">85</div>
//         <div className="absolute top-[243px] left-[277px] inline-block">85</div>
//         <div className="absolute top-[283px] left-[277px] inline-block">92</div>
//         <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[55px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5px] inline-block">
//             3 months
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector.svg"
//           />
//         </div>
//         <div className="absolute top-[124px] left-[32px] w-[65px] h-[184.77px] text-base text-black">
//           <div className="absolute top-[0px] left-[0px] inline-block">
//             Marketing
//           </div>
//           <div className="absolute top-[39px] left-[0px] inline-block">
//             Engineering
//           </div>
//           <div className="absolute top-[80px] left-[0px] inline-block">
//             Sales
//           </div>
//           <div className="absolute top-[122.08px] left-[0px] inline-block">
//             Product Dev.
//           </div>
//           <div className="absolute top-[158.77px] left-[0px] inline-block">
//             <p className="[margin-block-start:0] [margin-block-end:0px]">
//               Customer
//             </p>
//             <p className="m-[0]">Support</p>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[26px] left-[31px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden text-2xl">
//         <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[83px] h-[22px]">
//           Overview
//         </div>
//         <div className="absolute top-[44px] left-[16px] text-base inline-block w-[162px]">
//           <p className="[margin-block-start:0] [margin-block-end:0px]">
//             Your recent well-being score and change from previous month
//           </p>
//         </div>
//         <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[61px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
//             This month
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector1.svg"
//           />
//         </div>
//         <div className="absolute top-[34px] left-[190px] flex flex-col items-center justify-center gap-[0px] text-3xl">
//           <img
//             className="relative w-[100px] h-[100px] shrink-0 z-[0]"
//             alt=""
//             src="../ellipse-6.svg"
//           />
//           <img
//             className="absolute m-[0_!important] top-[1px] left-[0px] rounded-[10px] w-[100px] h-[100px] shrink-0 z-[1]"
//             alt=""
//             src="../ellipse-5.svg"
//           />
//           <div className="absolute m-[0_!important] top-[35px] left-[36px] font-semibold inline-block z-[2]">
//             89%
//           </div>
//           <div className="m-[0_!important] absolute top-[59px] left-[42.5px] flex flex-row p-[10px] box-border items-start justify-start gap-[10px] z-[3] text-sm text-gray-500">
//             <img
//               className="absolute m-[0_!important] h-[24.28%] w-[27.78%] top-[50.72%] right-[72.22%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full z-[0]"
//               alt=""
//               src="../vector7.svg"
//             />
//             <div className="absolute m-[0_!important] top-[0px] left-[7px] font-medium inline-block z-[1]">
//               10
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[26px] left-[775px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden text-2xl">
//         <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[157px] h-[22px]">
//           Revenue Generated
//         </div>
//         <div className="absolute top-[40px] left-[16px] text-base inline-block w-[289px]">
//           Approximate revenue generated based on current-wellbeing insights this
//           month
//         </div>
//         <div className="absolute top-[85px] left-[113px] w-[94px] h-[38px] text-6xl text-gray-500">
//           <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
//             $7,144
//           </div>
//         </div>
//         <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[61px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
//             This month
//           </div>
//           <img
//             className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector1.svg"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[26px] left-[403px] w-[320px] h-[148px] text-2xl">
//         <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-gray-1100 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden">
//           <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[90px] h-[22px]">
//             Cost Saved
//           </div>
//           <div className="absolute top-[40px] left-[19px] text-base inline-block w-[289px]">
//             <p className="[margin-block-start:0] [margin-block-end:0px]">
//               Approximate cost saved based on current well-being insights this
//               month
//             </p>
//           </div>
//           <img
//             className="absolute h-[1.23%] w-[1.73%] top-[11.49%] right-[4.83%] bottom-[87.29%] left-[93.44%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="../vector9.svg"
//           />
//         </div>
//         <div className="absolute top-[84px] left-[111px] w-[98px] h-[38px] text-6xl text-gray-500">
//           <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
//             $4,233
//           </div>
//         </div>
//         <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
//           <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-1200 w-[61px] h-[13px]" />
//           <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
//             This month
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsightsPage;
