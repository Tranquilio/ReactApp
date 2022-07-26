import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
  
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
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                grid: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 6
            }
        }
    }

    return (
        <div>
            <Radar
                data={{
                    labels: ['Job Recognition', 'Job Satisfaction' ,'Job Demand', 'Organizational Culture', 'Job Control', 'Social Support'],
                    datasets: [
                        {
                            label: 'Average Scores',
                            data: ['4','4','4','4','4','4'],
                            backgroundColor: '#E5E2EE',
                            borderColor: '#C3B7E6',
                            borderWidth: 2
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
