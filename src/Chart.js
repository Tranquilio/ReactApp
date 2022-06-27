import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
var data;
 
export var output = {};
export var categories = [];
export var scores = [];

function Chart() {

    async function getChartData() {
        //Call api get answers
        const result = await fetch('/api/database', {
            method : 'GET',
        });
        data =  await result.json();
        //console.log(data);
        calcInfo();
    }

    //Calculate information for one person
    function calcInfo() {
        categories = [];
        scores = [];
        var answers = data["answers"];
        var intermediate = {};
        //console.log(answers);
        for(var index in answers) {
            var current = answers[index];
            var cat = current["category"];
            //Instead can simply sum here
            if(intermediate[cat] == undefined) {
                intermediate[cat] = [];
            }
            intermediate[cat].push(current["answer"]);
        }
        //console.log(intermediate);
        for (var key in intermediate) {
            categories.push(key);
            var value = intermediate[key];
            //console.log(value);
            var total = 0;
            for(var index in value) {
                total += parseInt(value[index]);
            }
            //console.log(total);
            output[key] = total / value.length;
            scores.push(total / value.length);
        }
        console.log(output);
        //console.log(categories);
        //console.log(scores);
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
        ticks: {
            suggestedMin: 0,
            suggestedMax: 6,
            beginAtZero: true 
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
                            borderWidth:1,
                        },
                    ],
                }}
                width={500} 
                height={500} 
                options={options}
            />
        </div>
    )
}

export default Chart;
