import React from 'react';

function LastSurveyPage() {

  return (  
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-l from-blue-600 to-purple-600'> 
        <div>
                
            <div className='text-4xl text-gray-200 font-bold tracking-tight'>  
                <div>Great! You're averaging a very healthy well-being{`\n`} score. </div>
                <br/>
                <div>Your Score: {} out of 100</div>
            </div>

            <div className='text-2xl font-semibold text-gray-300 mt-10'>Score Breakdown (Low score means greater stress):</div>
                <div className='text-gray-300 text-xl'>
                <div>Job Demand - {}/6</div>
                <div>Job Control - {}/6</div>
                <div>Job Recognition - {}/6</div>
                <div>Job Satisfaction - {}/6</div>
                <div>Social Support - {}/6</div>
                <div>Organizational Culture - {}/6</div>
            </div>
            
            <div className='text-2xl font-semibold text-gray-300 mt-10'>Want to understand the meaning behind this score?</div>
            <button className={`md:bg-gray-300 text-xl-center mt-5 content-center align-center p-4 md:rounded-lg md:hover:bg-gray-400 md:text-right`}>
                    <div className='md:font-bold font-semibold text-lg'>Understand My Stressor!</div>
            </button>

        </div>
    </div>
  );

}

export default LastSurveyPage;