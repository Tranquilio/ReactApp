import TeamTable from './TeamTable'
import React from 'react'

function TeamCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
          </svg>
        </header>
        <h1 className="text-lg font-semibold text-slate-800 mb-2">TEAM</h1>
        <div className="text-xs font-semibold text-slate-400 mb-1">Wellbeing breakdown by team</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='md:m-auto'>
        {/* Change the height attribute to adjust the chart height */}
        <TeamTable width={595} height={248} />
      </div>
    </div>
  );
}

export default TeamCard;