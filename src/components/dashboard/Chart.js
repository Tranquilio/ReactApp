import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
var data;
 
export var output = {};
export var categories = [];
export var scores = [];

function Chart() {

    async function getChartData() {
        //Call api get answers
        const result = await axios.get('http://localhost:5000/api/scores')
        data =  await result.data;
        console.log(data);
        calcInfo(data);
    }

    //Calculate information for one person
    function calcInfo(data) {
        categories = [];
        scores = [];
        
        for (var key in data) {
            categories.push(key);
            scores.push(data[key]);
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
        maintainAspectRatio: false,
        scale: {
            ticks: {
                display: false,
                min: 0,
                max: 6,
                beginAtZero: true
            }
        }
      
    };

    return (
        <div>
            <PolarArea 
                data={{
                    labels: categories,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: displayChart(),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                            ],
                            borderWidth:0,
                        },
                    ],
                }}
                width={300} 
                height={300} 
                options={options}
            />
        </div>
    )
}

export default Chart;
