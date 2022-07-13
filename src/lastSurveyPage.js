import React from 'react';

function LastSurveyPage() {

  return (  
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-l from-blue-600 to-purple-600'> 
        <div>
                
            <div className='text-4xl text-gray-200 font-bold tracking-tight'>  
                <div>Great! You're averaging a very healthy well-being{`\n`} score. </div>
                <br/>
                <div>Your Score: {}%</div>
            </div>

            <div className='text-2xl font-semibold text-gray-300 mt-10'>Score Breakdown (Low score means greater stress):</div>
                <div className='text-gray-300 text-xl'>
                <div>Job Demand - {}%</div>
                <div>Job Control - {}%</div>
                <div>Job Recognition - {}%</div>
                <div>Job Satisfaction - {}%</div>
                <div>Social Support - {}%</div>
                <div>Organizational Culture - {}%</div>
            </div>
            
            <div className='text-2xl font-semibold text-gray-300 mt-10'>Want to understand the meaning behind this score?</div>
           
            
            <button className={`md:bg-gray-300 text-xl-center mt-5 content-center align-center p-4 md:rounded-lg md:hover:bg-gray-400 md:text-right`}>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='md:font-bold font-semibold text-lg'>Understand My Stressor!</a>
            </button>

        </div>
    </div>
  );

}

export default LastSurveyPage;