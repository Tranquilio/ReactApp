import React from 'react'

function TRCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 brightness-50">
      <header className="px-5 py-4 border-b border-slate-100">
        <div className='text-lg font-semibold text-slate-800 mb-2'>TURNOVER RATE</div>
        <div className='text-xs font-semibold text-slate-400 mb-1'>Stay Tuned, To be released soon!</div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <SBChart width={595} height={248} />  */}
    </div>
  );
}

export default TRCard;