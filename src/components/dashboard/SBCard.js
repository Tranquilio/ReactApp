import React from 'react'
import BarChart from "./BarChart"
import TopStressors from './TopStressors'

function SBCard() {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='flex inline gap-4'>
          <div className='text-lg font-semibold text-slate-800 mb-2'>STRESS BREAKDOWN</div>
          <svg width="24px" height="24px" class="h-6 w-6 text-pink-300" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.84 2.998v17.999a2.983 2.983 0 0 1-2.967 2.998 2.98 2.98 0 0 1-.368-.02 3.06 3.06 0 0 1-2.61-3.1V3.12A3.06 3.06 0 0 1 19.51.02a2.983 2.983 0 0 1 3.329 2.978zM4.133 18.055a2.973 2.973 0 1 0 0 5.945 2.973 2.973 0 0 0 0-5.945zm7.872-9.01h-.05a3.06 3.06 0 0 0-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 0 0 3.57-2.927v-8.959a2.983 2.983 0 0 0-2.978-2.988z"/>
          </svg>
        </div>
        <div className='text-xs font-semibold text-slate-400 mb-1'>The stressor breakdown of your organisation. Come learn where you can improve!</div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className='md:flex md:flex-row md:grid grid-cols-2 text-center p-10'>  
        <BarChart /> 
        <TopStressors />
      </div>
    </div>
  );
}

export default SBCard;