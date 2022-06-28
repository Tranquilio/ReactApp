import Sidebar from '../components/Sidebar'
import SurveyInfo from '../components/SurveyInfo';

function SurveyPage() {
  return (  
    <div className='bg-gradient-to-r from-transparent to-pink-50'>
    
    <div className='h-screen'>      
        <div className='flex'>
            <Sidebar />    
        {/* Add in the file upload box and the table */}
            <SurveyInfo></SurveyInfo>
        </div>
    </div>
    </div>
  );  
}

export default SurveyPage;