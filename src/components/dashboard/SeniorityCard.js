import React from 'react'
import SeniorityTable from './SeniorityTable'

function SeniorityCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </header>
        <h1 className="text-lg font-semibold text-slate-800 mb-2">SENIORITY</h1>
        <div className="text-xs font-semibold text-slate-400 mb-1">Wellbeing breakdown by seniority</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div>
        {/* Change the height attribute to adjust the chart height */}
        <SeniorityTable />
      </div>
    </div>
  );
}

export default SeniorityCard;