import React from 'react'
import BarChart from "./BarChart"
import TopStressors from './TopStressors'

function SBCard() {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='text-lg font-semibold text-slate-800 mb-2'>STRESS BREAKDOWN</div>
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