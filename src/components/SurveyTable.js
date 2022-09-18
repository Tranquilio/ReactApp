import React from "react"
import MaterialTable from "material-table"
import tableIcons from "./MaterialTableIcons"
import { Fade } from "react-reveal"

var XLSX = require("xlsx");

function SurveyTable(props) {

    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    function sendToParent(emails, headers) {
        props.updateState(emails, headers)
    }

    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()

    const convertToJson = (headers,data) => {
        const rows = []
        data.forEach(row => {
            // console.log(row)
            let rowData = {}
            row.forEach((element,index) => {
            rowData[headers[index]] = element
            })
            rows.push(rowData)
        });
        return rows;
    }
    
    const importExcel=(e)=>{
        const file=e.target.files[0]

        const reader = new FileReader()
        reader.onload=(event)=>{
            //parse data
            const bstr = event.target.result
            const workBook = XLSX.read(bstr,{type:"binary"})
        
            //get first sheet
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]

            //convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet,{header:1})

            const headers = fileData[0]

            const heads = headers.map(head=>({title:head,field:head}))
            setColDefs(heads)

            //removing header
            fileData.splice(0,1)
            sendToParent(fileData, headers)

            setData(convertToJson(headers,fileData))
        }

        if(file){
            reader.readAsBinaryString(file)
        } else {
            setData([])
            setColDefs([])
        }
    }           

    return (
        <div className="-mt-40 px-10 text-center">
            <Fade>
                <div className="mr-20 text-xl font-semibold tracking-tight">Insert your excel sheet below</div>
                <input type="file" onChange={importExcel} accept=".xls,.xlsx,.csv" className="py-10" />
                <MaterialTable title="Company Data" 
                    data={data} 
                    columns={colDefs}
                    icons={tableIcons}
                    onRowClick={((event, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                    editable={{
                        onRowAdd: newData => new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]); 
                                resolve();
                            }, 1000);
                        }),
                    }}
                    
                    options={{
                        headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                        },
                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                        })
                    }}
                />
            
            </Fade>
        </div>
    );
}

export default SurveyTable;

