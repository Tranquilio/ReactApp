import React from 'react'
import LineChart from './LineChart'

function WellbeingCard() {

  const chartData = {
    labels: [
      '01-01-2022', '02-01-2022', '03-01-2022', '04-01-2022',
      '05-01-2022', '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022', '12-01-2022',
    ],
    datasets: [
      {
        data: [ 0, 82, 86 ],
        fill: true,
        backgroundColor: "#E5E2EE",
        borderColor: "#C3B7E6",
        borderWidth: 1,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "#C3B7E6",
        pointBorderColor: "#C3B7E6",
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </header>
        <h1 className="text-lg font-semibold text-slate-800 mb-2">WELLBEING</h1>
        <div className="text-xs font-semibold text-slate-400 mb-1">Average wellbeing score compared to previous months</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">86</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+4</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="mt-1">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={200} />
      </div>
    </div>
  );
}

export default WellbeingCard;