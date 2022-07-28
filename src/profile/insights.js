import Sidebar from '..//components/Sidebar'
import React from 'react'
import WellbeingCard from '../components/dashboard/WellbeingCard'
import TeamCard from '../components/dashboard/TeamCard'
import SeniorityCard from '../components/dashboard/SeniorityCard'
import SBCard from '../components/dashboard/SBCard'
import Banner from '../components/dashboard/Banner'
import ARCard from '../components/dashboard/ARCard'
import TRCard from '../components/dashboard/TRCard'

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
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-pink-50'>  
 
      {/* Sidebar */}
      <Sidebar />
     
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <Banner />
          <div className="grid grid-cols-12 gap-6">
            <TeamCard />
            <WellbeingCard />
            <SeniorityCard />

            {/*  This div cluster is temporary until then the new features come */}
            <div></div>
            <div></div> 
            <div></div>

            <SBCard />
            <ARCard />
            <TRCard />
          </div>
        </div>

      </div>

    </div>
  );  
}

export default InsightsPage;