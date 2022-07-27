import React from 'react'
import SBChart from "./Chart"

function SBCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='text-lg font-semibold text-slate-800 mb-2'>STRESS BREAKDOWN</div>
        <div className='text-xs font-semibold text-slate-400 mb-1'>The stressor breakdown of your organisation. Your score increased by 20 points compared to previous month</div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <SBChart /> 
    </div>
  );
}

export default SBCard;