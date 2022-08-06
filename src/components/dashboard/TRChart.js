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
import { Line, Scatter } from 'react-chartjs-2';

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

    /* function calcSum(arrayOne, arrayTwo, type) {
      var sum = 0;

      //(Σxy) - Sum of multiplication of x and y values
      if(type == multi) {
        for (i = 0; i < arrayOne.size(); i++) {
          arrayOne[i] = arrayOne[i]*arrayTwo[i];
          sum += arrayOne[i] + sum;
        }
      }

      //(Σx) or (Σy) - Sum of x or y values
      if(type == add) {
        for (i = 0; i < arrayOne.size(); i++) {
          sum += arrayOne[i] + sum;
        }
      }

      //(Σx^2) or (Σy^2) - Sum of square of x or y values
      if(type == square) {
        for (i = 0; i < arrayOne.size(); i++) {
          arrayOne[i] = arrayOne[i]*arrayOne[i];
        }
        for (j = 0; j < arrayOne.size(); j++) {
          sum += arrayOne[j] + sum;
        }
      }

      return sum;
    }

    function calcPValue(size, arrayOne, arrayTwo) {
      // Array One - X axis
      // Array Two - Y axis
      // R = [n(Σxy) – (Σx) (Σy)] ÷ √{[nΣx2− (Σx)2] [nΣy2− (Σy)2]}
      var value;
      var a;
      var b;
      var c;

      // Part A
      a = [size*(calcSum(arrayOne, arrayTwo, multi)) - (calcSum(arrayOne, null, add))*(calcSum(null, arrayTwo, add))]
      // Part B
      b = [size*(calcSum(arrayOne, null, square)) - (calcSum(arrayOne, null, multi))*(calcSum(arrayOne, null, multi))]
      // Part C
      c = [size*(calcSum(null, arrayTwo, square)) - (calcSum(null, arrayTwo, multi))*(calcSum(null, arrayTwo, multi))]

      // The R value that must be within -1 and 1
      value = a/sqrt(b*c)

      return value;
    } */

    const options = {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.4,
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
              beforeLabel: function(context) {
                return `${context.raw.month}`;
              },
              label: function(context) {
                return `Wellbeing Score: ${context.raw.x} Turnover: ${context.raw.y}`;
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
            min: 50,
            max: 100,
            grid: {
              display: false
            }
          }
        }
      };

    const data = {
        datasets: [
          {
            data: [
              {x: 51 ,y: 9.5, month: 'January'},
              {x: 72 ,y: 8, month: 'February'},
              {x: 76 ,y: 4, month: 'March'},
              {x: 89 ,y: 2, month: 'April'},
              {x: 96 ,y: 1, month: 'May'},
              {x: 61 ,y: 7, month: 'June'},
              {x: 71 ,y: 7, month: 'July'},
              {x: 72 ,y: 5, month: 'August'},
              {x: 88 ,y: 3, month: 'September'},
              {x: 90 ,y: 2, month: 'October'},
              {x: 80 ,y: 3, month: 'Novermber'},
              {x: 60 ,y: 9, month: 'December'},
            ],
            showLine: false,
            borderColor: 'rgb(204 251 241)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 4
          },
        ],
      };

  return (
    <div className='mt-5 p-10 mr-10'>
        <Scatter options={options} data={data} />
        <div className='mt-2'>Summary</div>
    </div>
  )
}

export default TRChart