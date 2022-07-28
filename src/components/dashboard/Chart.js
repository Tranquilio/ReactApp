import { useEffect, useState } from "react"
import axios from "axios"
import RadarChart from "react-svg-radar-chart"
  
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
        axes: false,
        size: 300,
        wrapCaptionAt: 20,
        captionMargin: 22,
        zoomDistance: 1.1,
    }

    return (
        <div className="ml-24">
            <RadarChart
            captions={{
              // columns
              JR: 'Job Recognition',
              JD: 'Job Demand',
              JS: 'Job Satisfaction',
              SS: 'Social Support',
              OC: 'Organisation Culture'
            }}
            data={[
                { data: {
                    JR: 0.8,
                    JD: 0.5,
                    JS: 0.9,
                    SS: 0.4,
                    OC: 0.4
                },
                meta: { color: '#CBC3E3' }
            },
            ]}
            options={options}
            size={400}
          />
        </div>
    )
}

export default Chart;
