import { useState, useEffect } from 'react'

var seniority;
var zeroToHalf;
var halfToOne;
var oneToTwo;
var twoToThree;
var threeOrMore;

function SeniorityTable () {

    const [loaded,setLoad] = useState(false);
    const form = useContext(FormContext)

    useEffect(() => {

    async function getScore() {
      const result = await fetch(`http://localhost:5000/api/employees/seniority/${form.company}`, {
          method : 'GET',
      }); 
  
      seniority =  await result.json(); 
      
      //Modified to not have years
      zeroToHalf = parseInt(seniority['0-0.5']*(100/6))
      halfToOne = parseInt(seniority['0.5-1']*(100/6))
      oneToTwo = parseInt(seniority['1-2']*(100/6))
      twoToThree = parseInt(seniority['2-3']*(100/6))
      threeOrMore = parseInt(seniority['3+']*(100/6))
      
      setLoad(seniority);
    }      
    getScore();

    },[]);

    function colorPicker(value) {
        if (value >= 90) {
            return 'bg-green-200'
        } else if (value >= 80) {
            return 'bg-green-100'
        } else if (value >= 70) {
            return 'bg-yellow-100'
        } else if (value >= 60) {
            return 'bg-yellow-200'
        } else if (value >= 50) {
            return 'bg-red-100'
        } else if (value < 50) {
            return 'bg-red-200'
        } else if (value === "-") {
            return 'bg-gray-100'
        }
    }

 // There are 2 0-0.5 year
 //   {"0-0.5":3.5,"0.5-1 Year":4.1875,"1-2 Years":3.84375,"2-3 Years":4.125,"0-0.5 Year":3.46875,"3+ Years":4.5}

    return (
        <div class="flex flex-col p-5 scrollbar-thin scrollbar-thumb-white-200 scrollbar-track-white-100 overflow-y-scroll overflow-x-hidden scrollbar-thumb-rounded scrollbar-track-rounded h-64">
            <div class="sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block sm:px-6 lg:px-8">
                    <div class="m-auto">
                        <table class="text-center m-auto">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        Experience
                                    </th>
                                    <th scope="col" class="text-sm font-normal text-gray-900 px-6 py-4">
                                        Jun
                                    </th>
                                    <th scope="col" class="text-sm font-normal text-gray-900 px-6 py-4">
                                        July
                                    </th>
                                    <th scope="col" class="text-sm font-normal text-gray-900 px-6 py-4">
                                        Aug
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        0 to 0.5 year
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(zeroToHalf)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {zeroToHalf}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        0.5 to 1 year
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(halfToOne)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {halfToOne}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                      
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        1 to 2 years
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(oneToTwo)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {oneToTwo}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                       
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        2 to 3 years
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(twoToThree)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {twoToThree}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        3+
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(threeOrMore)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {threeOrMore}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

  export default SeniorityTable

