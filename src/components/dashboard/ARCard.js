import React from 'react'
import ARChart from './ARChart';

function ARCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='flex inline gap-4'>
          <div className='text-lg font-semibold text-slate-800 mb-2'>ABSENTEE RATE</div>
          <svg class="h-6 w-6 text-pink-300" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g data-name="20. Office Chair" id="_20._Office_Chair">
              <path class="cls-1" d="M8,26H5.472a2.7,2.7,0,0,1-2.684-2.3L1.315,14.129A2.717,2.717,0,0,1,4,11a1,1,0,0,1,0,2,.717.717,0,0,0-.708.825l1.473,9.568A.711.711,0,0,0,5.472,24H8a1,1,0,0,1,0,2Z"/>
              <path class="cls-1" d="M26.528,26H24a1,1,0,0,1,0-2h2.528a.711.711,0,0,0,.707-.607l1.473-9.569A.717.717,0,0,0,28,13a1,1,0,0,1,0-2,2.716,2.716,0,0,1,2.685,3.128L29.212,23.7A2.7,2.7,0,0,1,26.528,26Z"/>
              <path class="cls-2" d="M21.734,18H10.266a3,3,0,0,1-2.977-3.372l1.5-12A3,3,0,0,1,11.766,0h8.468a3,3,0,0,1,2.977,2.628l.281,2.248a1,1,0,1,1-1.984.248l-.281-2.248A1,1,0,0,0,20.234,2H11.766a1,1,0,0,0-.993.876l-1.5,12A1,1,0,0,0,10.266,16H21.734a1,1,0,0,0,.993-1.124l-.719-5.752a1,1,0,0,1,1.984-.248l.719,5.752A3,3,0,0,1,21.734,18Z"/>
              <path class="cls-2" d="M24,26H8a1,1,0,0,1-1-1V23a3,3,0,0,1,3-3H22a3,3,0,0,1,3,3v2A1,1,0,0,1,24,26ZM9,24H23V23a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1Z"/>
              <path class="cls-2" d="M19,22H13a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v4A1,1,0,0,1,19,22Zm-5-2h4V18H14Z"/>
              <path class="cls-2" d="M18,32H14a1,1,0,0,1-1-1V29a1,1,0,0,1,2,0v1h2V26H14a1,1,0,0,1,0-2h4a1,1,0,0,1,1,1v6A1,1,0,0,1,18,32Z"/>
              <path class="cls-2" d="M21,32H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/>
            </g>
          </svg>
        </div>
        <div className='text-xs font-semibold text-slate-400 mb-1'>Wellbeing score in relation to my organization's absentee rate</div>
        <div className='mt-5'>Stay tuned, to be released soon!</div>
      </header>
      {/* Chart built with Chart.js 3 */}
      <div className=''>
        <ARChart width={595} height={248} /> 
      </div>
    </div>
  );
}

export default ARCard;