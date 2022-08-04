import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ARChart = () => {

    const labels = ['70', '75', '80', '90', '70', '75', '80', '90', '70', '75', '80', '90', ];

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            title: {
                display: true,
                text: 'Attendance',
              },
            min: 0,
            max: 10,
            grid: {
              display: false
            },
            beginAtZero: true
          },
          x: {
            title: {
                display: true,
                text: 'Wellbeing Score',
              },
            min: 0,
            max: 100,
            grid: {
              display: false
            },
            beginAtZero: true
          }
        }
      };

    const data = {
        labels,
        datasets: [
          {
            data: [6, 2, 9, 3, 6, 2, 9, 3, 6, 2, 9, 3],
            borderColor: 'rgb(204 251 241)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

  return (
    <div className='mt-5 p-10'>
        <Line options={options} data={data} />
        <div className='mt-2'>Summary</div>
    </div>
  )
}

export default ARChart