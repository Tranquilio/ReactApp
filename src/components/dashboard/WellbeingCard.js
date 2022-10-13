import React from 'react'
import LineChart from './LineChart'
import { useState, useEffect } from 'react'
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext'

var overall;
var score;

function WellbeingCard() {

  const [loaded,setLoad] = useState(false);
  const form = useContext(FormContext)

  useEffect(() => {

    async function getScore() {
      const result = await fetch(`http://localhost:5000/api/employees/scores/${form.company}`, {
          method : 'GET',
      }); 
  
      overall =  await result.json(); 
      score = parseInt(overall['Average Score']);
      setLoad(score);
      console.log(overall)
      console.log(score)
    }      
    getScore();

  },[]);

  const chartData = {
    labels: [
      '01-01-2022', '02-01-2022', '03-01-2022', '04-01-2022',
      '05-01-2022', '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022', '12-01-2022',
    ],
    datasets: [
      {
        data: [ 0, 0, 0, 0, 0, 0, 65 ],
        fill: true,
        backgroundColor: "rgb(204 251 241)",
        borderColor: "rgb(94 234 212)",
        borderWidth: 1,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "rgb(204 251 241)",
        pointBorderColor: "rgb(204 251 241)",
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <div className='flex inline gap-2'>
          <h1 className="text-lg font-semibold text-slate-800 mb-2">WELLBEING</h1>
          <header className="flex justify-between items-start mb-2">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </header>
        </div>
        <div className="text-xs font-semibold text-slate-400 mb-1">Average wellbeing score compared to previous months</div>
        <div className="flex items-start mt-5">
          <div className="text-3xl font-bold text-slate-800 mr-2">{score}</div>
          {/* Need to subtract current score to previous month score in the future */}
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+{score}</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='mt-3'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={200} />
      </div>
    </div>
  );
}

export default WellbeingCard;