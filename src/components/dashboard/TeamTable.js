import { useState, useEffect } from 'react'

var dept;
var sales;
var marketing;
var core;
var productDev;
var customer;

function TeamTable () {

    const [loaded,setLoad] = useState(false);

    useEffect(() => {

    async function getScore() {
      const result = await fetch('http://localhost:5000/api/employees/dept/all', {
          method : 'GET',
      }); 
  
      dept =  await result.json(); 
      
      core = parseInt(dept['sales']*(100/6)) // Need to change "sales" to "core" in MongoDB
      marketing = parseInt(dept['Marketing']*(100/6))
      productDev = parseInt(dept['Product Dev']*(100/6))
      sales = parseInt(dept['Sales']*(100/6))
      customer = parseInt(dept['Customer Success']*(100/6))
      
      setLoad(dept);
    }      
    getScore();

    },[]);

    return (
        <div class="flex flex-col p-5 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-indigo-100 overflow-y-scroll overflow-x-hidden scrollbar-thumb-rounded scrollbar-track-rounded h-64">
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
                                    <td class="text-sm text-gray-900 bg-gray-100 font-light px-6 py-4 whitespace-nowrap">
                                        -
                                    </td>
                                    <td class="text-sm text-gray-900 bg-red-300 font-light px-6 py-4 whitespace-nowrap">
                                        {core}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Marketing
                                    </td>
                                    <td class="text-sm text-gray-900 bg-gray-100 font-light px-6 py-4 whitespace-nowrap">
                                        -
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-200 font-light px-6 py-4 whitespace-nowrap">
                                        {marketing}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Product Dev
                                    </td>
                                    <td class="text-sm text-gray-900 bg-gray-100 font-light px-6 py-4 whitespace-nowrap">
                                        -
                                    </td>
                                    <td class="text-sm text-gray-900 bg-red-300 font-light px-6 py-4 whitespace-nowrap">
                                        {productDev}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Sales
                                    </td>
                                    <td class="text-sm text-gray-900 bg-gray-100 font-light px-6 py-4 whitespace-nowrap">
                                        -
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-200 font-light px-6 py-4 whitespace-nowrap">
                                        {sales}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        Customer
                                    </td>
                                    <td class="text-sm text-gray-900 bg-gray-100 font-light px-6 py-4 whitespace-nowrap">
                                        -
                                    </td>
                                    <td class="text-sm text-gray-900 bg-red-200 font-light px-6 py-4 whitespace-nowrap">
                                        {customer}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        
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