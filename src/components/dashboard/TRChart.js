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

var arrayX = [51, 72, 76, 89, 76, 61, 71, 72, 88, 90, 80, 60]
var arrayY = [9.5, 8, 4, 2, 1, 7, 7, 5, 3, 2, 3, 9]
var value;
var a, b, c;
var add, square;
var sum = 0;
var arrayXY = [];
var arr = [];

const TRChart = () => {

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
    <div className='md:p-10 p-5'>
      <div className='py-5 m-auto'>
          <Scatter options={options} data={data} />
      </div>
      <div>Summary</div>
      <div>{calcPValue(12, arrayX, arrayY)}</div>
    </div>
  )
}

export default TRChart