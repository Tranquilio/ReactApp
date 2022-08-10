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
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

var arrayX = [56, 70, 78, 87, 93, 65, 75, 76, 85, 90, 80, 60]
var arrayY = [6, 8, 4, 2, 1, 7, 7, 5, 3, 2, 3, 9]
var value;
var a, b, c;
var add, square;
var sum = 0;
var arrayXY = [];
var arr = [];

const ARChart = () => {

  function calcPValue(size, arrayX, arrayY) {
    // Array X  - X axis
    // Array Y - Y axis
    // R = [n(Σxy) – (Σx) (Σy)] ÷ √{[nΣx2− (Σx)2] [nΣy2− (Σy)2]}
    for (var i = 0; i < arrayX.length; i++) {
      arrayXY[i] = arrayX[i] * arrayY[i];
    }
  
    // Part A [n(Σxy) – (Σx) (Σy)]
    a = [size*(calcSum(arrayXY, add)) - (calcSum(arrayX, add))*(calcSum(arrayY, add))]
    // Part B [nΣx2− (Σx)2]
    b = [size*(calcSum(arrayX, square)) - (calcSum(arrayX, add))*(calcSum(arrayX, add))]
    // Part C [nΣy2− (Σy)2]
    c = [size*(calcSum(arrayY, square)) - (calcSum(arrayY, add))*(calcSum(arrayY, add))]

    // The R value that must be within -1 and 1
    value = a/(Math.sqrt(b*c));

    return value
  }

  function calcSum(array, type) {

    //(Σx) or (Σy) - Sum of x or y values
    if(type === add) {
      for (var i = 0; i < array.length; i++) {
        sum = array[i] + sum;
      }
      return sum/2;
    }

    //(Σx^2) or (Σy^2) - Sum of square of x or y values
    if(type === square) {
      for (var i = 0; i < array.length; i++) {
        arr[i] = array[i]*array[i];
        sum = arr[i] + sum;
      }
      return sum/2;
    }

  }

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
              return `Wellbeing Score: ${context.raw.x} Attendance: ${context.raw.y}`;
            }
          }
        }
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
          min: 50,
          max: 100,
          grid: {
            display: false
          },
          beginAtZero: true
        }
      }
    };

    const data = {
        datasets: [
          {
            data: [
              {x: 56 ,y: 6, month: 'January'},
              {x: 70 ,y: 8, month: 'February'},
              {x: 78 ,y: 4, month: 'March'},
              {x: 87 ,y: 2, month: 'April'},
              {x: 93 ,y: 1, month: 'May'},
              {x: 65 ,y: 7, month: 'June'},
              {x: 75 ,y: 7, month: 'July'},
              {x: 76 ,y: 5, month: 'August'},
              {x: 85 ,y: 3, month: 'September'},
              {x: 90 ,y: 2, month: 'October'},
              {x: 80 ,y: 3, month: 'Novermber'},
              {x: 60 ,y: 9, month: 'December'},
            ],
            showLine: false,
            borderColor: 'rgb(204 251 241)',
            pointBackgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 4
          },
        ],
      };

  return (
    <div className='md:p-10 p-5'>
      <div className='py-5 m-auto'>
          <Scatter options={options} data={data} />
      </div>
      <div>Summary</div>
      <div>{calcPValue(12, arrayX, arrayY)}</div>
    </div>
  )
}

export default ARChart