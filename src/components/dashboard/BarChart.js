import { useContext, useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FormContext } from '../../context/FormContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
var data;
var categories = [];
var scores = [];

const Chart = () => {

  const form = useContext(FormContext)
  
  async function getChartData() {

    //Call api get answers
    const result = await fetch(`http://localhost:5000/api/scores/${form.company}`, {
      method : 'GET',
    }); 

    data =  await result.json(); 
    calcInfo(data)
    
    console.log(data)
}

  //Calculate information for one person
  function calcInfo(data) {
      categories = [];
      scores = [];
      
      for (var key in data) {
          categories.push(key);
          scores.push(data[key]*100/6);
      }

      console.log(categories);
      console.log(scores);
      setLoad(true);
  }

  const[loaded, setLoad] = useState(false)

  useEffect(() => {
      getChartData();
  },[]);


  function displayChart() {
      return (loaded) ? scores : [];
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Stressors',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          display: false
        },
        beginAtZero: true
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: scores,
        backgroundColor: "rgb(204 251 241)",
      }
    ],
  };

  return (
    <div className="md:px-10 mb-16 md:mb-0">
      <div className="text-center mb-10">
          How are your stressors distributed?
      </div>
      <Bar
        options={options} 
        data={chartData}
        width={400}
        height={350}
      />
    </div>
  )
}

export default Chart;
