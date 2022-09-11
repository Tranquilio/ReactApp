import { useState, useEffect } from 'react'

var dept;
var sales;
var marketing;
var core;
var productDev;
var customer;

function TeamTable () {

    const [loaded,setLoad] = useState(false);

    const form = useContext(FormContext)
    useEffect(() => {

    async function getScore() {
      const result = await fetch(`http://localhost:5000/api/employees/dept/${form.company}`, {
          method : 'GET',
      }); 
  
      dept =  await result.json(); 
      
      core = parseInt(dept['Core']*(100/6)) // Need to change "sales" to "core" in MongoDB (Done)
      marketing = parseInt(dept['Marketing']*(100/6))
      productDev = parseInt(dept['Product Dev']*(100/6))
      sales = parseInt(dept['Sales']*(100/6))
      customer = parseInt(dept['Customer Success']*(100/6))
      
      setLoad(dept);
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

    return (
        <div class="flex flex-col p-5 scrollbar-thin scrollbar-thumb-white-200 scrollbar-track-white-100 overflow-y-scroll overflow-x-hidden scrollbar-thumb-rounded scrollbar-track-rounded h-64">
            <div class="sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="">
                        <table class="min-w-full text-center">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        Department
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
                                        Core
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(core)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {core}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Marketing
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(marketing)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {marketing}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Product Dev
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(productDev)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {productDev}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Sales
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(sales)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {sales}
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker()} font-light px-6 py-4 whitespace-nowrap`}>
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Customer
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker('-')} font-light px-6 py-4 whitespace-nowrap`}>
                                        -
                                    </td>
                                    <td class={`text-sm text-gray-900 ${colorPicker(customer)} font-light px-6 py-4 whitespace-nowrap`}>
                                        {customer}
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

  export default TeamTable