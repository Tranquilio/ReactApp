import React from 'react'
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext'
  
var data;
 
var categories = [];
var scores = [];
var topIndex = [];

const TopStressors = () => {

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
            scores.push(data[key]);
        }

        topScores(scores)

        console.log(categories);
        console.log(scores);
        setLoad(true);
    }

    function topScores(scores) {
    console.log(scores);

    var toSort = [];
    for (var key in scores) {
        toSort.push([key, scores[key]]);
    }

    console.log(toSort);

    toSort.sort(function(a, b) {
        return (a[1] < b[1]) ? 1 : -1;
    });

    console.log(toSort);

    
    for(let i = 0; i < 3; i++) {
        var category = toSort[i][0];
        topIndex.push(category);
    }

    console.log(topIndex)
    return topIndex;
}

    const[loaded, setLoad] = useState(false)

    useEffect(() => {
        getChartData();
    },[]);

  return (
    <div>
        <div>What are your top stressors?</div>
        <ul className='mt-10 space-y-10'>
            <li>
                <div className='font-semibold'>{categories[topIndex[0]]}</div>
                <div>Insert mini description</div>
            </li>
            <li>
                <div className='font-semibold'>{categories[topIndex[1]]}</div>
                <div>Insert mini description</div>
            </li>
            <li>
                <div className='font-semibold'>{categories[topIndex[2]]}</div>
                <div>Insert mini description</div>
            </li>
        </ul>
      
        <button className='mt-10 bg-pink-300 font-semibold rounded-full text-white hover:bg-pink-400 p-3 px-5'>
            <a href="https://www.tranquilio.co/resources">Click me to find more!</a>
        </button>

    </div>
  )
}

export default TopStressors