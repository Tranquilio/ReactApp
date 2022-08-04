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

const TRChart = () => {

    const labels = ['70', '75', '80', '90', '70', '75', '80', '90', '70', '75', '80', '90'];

    const options = {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.raw.month}`;
              }
            }
          }
        },
        scales: {
          y: {
            title: {
                display: true,
                text: 'Turnover',
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
            grid: {
              display: false
            }
          }
        }
      };

    const data = {
        labels,
        datasets: [
          {
            data: [3, 3, 7, 4, 8, 9, 1, 2, 8, 9, 1, 2],
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

export default TRChart