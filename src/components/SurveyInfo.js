import {Link} from "react-router-dom";
import { useState } from "react";
import { Fade } from "react-reveal";
import { useEffect } from "react";
import classes from "./surveyinfo.module.css";
import MaterialTable from "material-table";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var XLSX = require("xlsx");

function SurveyInfo(props) {

    function sendToParent(data) {
        props.updateState(data)
    }

    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()
    const fileData = [];

    const convertToJson = (headers,data) => {
        const rows = []
        data.forEach(row => {
            console.log(row)
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
            sendToParent(fileData)

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
        <div className="-mt-40 ml-11 text-center">
            <div className="mr-20 text-xl font-semibold tracking-tight">Insert your excel sheet below</div>
            <input type="file" onChange={importExcel} accept=".xls,.xlsx,.csv" className="py-10"/>
            {/* <MaterialTable title="Company Data" data={data} columns={colDefs} /> */}
        
            <BootstrapTable data={data} >
            </ BootstrapTable>
        </div>
    );

}

export default SurveyInfo;
