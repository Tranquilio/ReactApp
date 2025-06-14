import React from 'react'
import TRChart from './TRChart';

function TRCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='flex inline gap-4'>
          <div className='text-lg font-semibold text-slate-800 mb-2'>TURNOVER RATE</div>
          <svg class="h-6 w-6 text-pink-300" fill="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g data-name="21. Switch" id="_21._Switch">
              <path class="cls-1" d="M7,10a5,5,0,1,1,5-5A5.006,5.006,0,0,1,7,10ZM7,2a3,3,0,1,0,3,3A3,3,0,0,0,7,2Z"/>
              <path class="cls-1" d="M4,16H2a1,1,0,0,1-.98-.8l-1-5A1,1,0,0,1,.553,9.105l3.6-1.8A1,1,0,1,1,5.047,9.1L2.13,10.553,2.82,14H4a1,1,0,0,1,0,2Z"/>
              <path class="cls-1" d="M12,16H8a1,1,0,0,1,0-2h3.18l.69-3.447L8.953,9.1a1,1,0,1,1,.894-1.789l3.6,1.8A1,1,0,0,1,13.98,10.2l-1,5A1,1,0,0,1,12,16Z"/>
              <path class="cls-1" d="M25,26a5,5,0,1,1,5-5A5.006,5.006,0,0,1,25,26Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,25,18Z"/>
              <path class="cls-1" d="M22,32H20a1,1,0,0,1-.98-.8l-1-5a1,1,0,0,1,.533-1.091l3.6-1.8a1,1,0,1,1,.894,1.789L20.13,26.553,20.82,30H22a1,1,0,0,1,0,2Z"/>
              <path class="cls-1" d="M30,32H26a1,1,0,0,1,0-2h3.18l.69-3.447L26.953,25.1a1,1,0,1,1,.894-1.789l3.6,1.8A1,1,0,0,1,31.98,26.2l-1,5A1,1,0,0,1,30,32Z"/>
              <path class="cls-2" d="M25,14a1,1,0,0,1-1-1V11a5.006,5.006,0,0,0-5-5H17a1,1,0,0,1,0-2h2a7.008,7.008,0,0,1,7,7v2A1,1,0,0,1,25,14Z"/>
              <path class="cls-2" d="M17,8a1,1,0,0,1-.707-.293l-2-2a1,1,0,0,1,0-1.414l2-2a1,1,0,1,1,1.414,1.414L16.414,5l1.293,1.293A1,1,0,0,1,17,8Z"/>
              <path class="cls-2" d="M13,28H11a5.006,5.006,0,0,1-5-5V19a1,1,0,0,1,2,0v4a3,3,0,0,0,3,3h2a1,1,0,0,1,0,2Z"/>
              <path class="cls-2" d="M13,30a1,1,0,0,1-.707-1.707L13.586,27l-1.293-1.293a1,1,0,0,1,1.414-1.414l2,2a1,1,0,0,1,0,1.414l-2,2A1,1,0,0,1,13,30Z"/>
            </g>
          </svg>
        </div>
        <div className='text-xs font-semibold text-slate-400 mb-1'>Wellbeing score in relation to my organization's turnover rate</div>
        <div className='mt-5'>Stay tuned, to be released soon!</div>
      </header>
      {/* Chart built with Chart.js 3 */}
      <div>
        <TRChart width={595} height={248} /> 
      </div>
    </div>
  );
}

export default TRCard;