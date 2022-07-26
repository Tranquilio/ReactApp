import React from "react"

function SeniorityTable () {

    return (
        <div class="flex flex-col p-5">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-center">
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
                                        0 to 1 year
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-100 font-light px-6 py-4 whitespace-nowrap">
                                        76
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-100 font-light px-6 py-4 whitespace-nowrap">
                                        82
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-200 font-light px-6 py-4 whitespace-nowrap">
                                        86
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        1 to 2 years
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-300 font-light px-6 py-4 whitespace-nowrap">
                                        91
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-100 font-light px-6 py-4 whitespace-nowrap">
                                        72
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-200 font-light px-6 py-4 whitespace-nowrap">
                                        86
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        2 to 5 years
                                    </td>
                                    <td class="text-sm text-gray-900 bg-red-200 font-light px-6 py-4 whitespace-nowrap">
                                        68
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-100 font-light px-6 py-4 whitespace-nowrap">
                                        74
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-200 font-light px-6 py-4 whitespace-nowrap">
                                        89
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                        5+
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-200 font-light px-6 py-4 whitespace-nowrap">
                                        78
                                    </td>
                                    <td class="text-sm text-gray-900 bg-yellow-100 font-light px-6 py-4 whitespace-nowrap">
                                        75
                                    </td>
                                    <td class="text-sm text-gray-900 bg-green-200 font-light px-6 py-4 whitespace-nowrap">
                                        82
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