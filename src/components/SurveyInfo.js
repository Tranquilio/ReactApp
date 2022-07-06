// import {Link} from "react-router-dom";
// import { useState } from "react";
// import { Fade } from "react-reveal";
// import { useEffect } from "react";
// import classes from "./surveyinfo.module.css";
// import MaterialTable from "material-table";
// import XLSX from 'xlsx';

// var code = "Deploy survey"

// const EXTENSIONS = ['xlsx','xls','csv']

// function SurveyInfo() {

//     const [colDefs, setColDefs] = useState()
//     const [data, setData] = useState()

//     const getExtension = (file) => {
//         const parts = file.name.split('.')
//         const extension = parts[parts.length-1]
//         return EXTENSIONS.includes(extension);
//     }

//     const convertToJson = (headers,data) => {
//         const rows = []
//         data.forEach(row => {
//             console.log(row)
//             let rowData = {}
//             row.forEach((element,index) => {
//             rowData[headers[index]] = element
//             })
//             rows.push(rowData)
//         });
//         return rows;
//     }
    

//     const importExcel=(e)=>{
//         const file=e.target.files[0]

//         const reader = new FileReader()
//         reader.onload=(event)=>{
//             //parse data
//             const bstr = event.target.result
//             const workBook = XLSX.read(bstr,{type:"binary"})
        

//         //get first sheet
//         const workSheetName = workBook.workSheetNames[0]
//         const workSheet = workBook.Sheets[workSheetName]

//         //convert to array
//         const fileData = XLSX.utils.sheet_to_json(workSheet,{header:1})

//         const headers = fileData[0]

//         const heads = headers.map(head=>({title:head,field:head}))
//         setColDefs(heads)

//         //removing header
//         fileData.splice(0,1)


//         setData(convertToJson(headers,fileData))
//         }

//         if(file){
//         if(getExtension(file)){
//             reader.readAsBinaryString(file)
//         } else {
//             alert("Invalid file input, please select a .xlsx or a .csv file")
//         }
//         } else {
//             setData([])
//             setColDefs([])
//         }
//     }

//     return (
//         <div>
//         <input type="file" onChange={importExcel} />
//         <MaterialTable title="Company Data" data={data} columns={colDefs} />
//         </div>
//     );





//     // const [emailCsvInfo, setCsv] = useState(null);
//     // const [metricsCsvInfo, setCsv2] = useState(null);
//     // const [deployState, setDeploy] = useState(false);


//     // async function getEmailCsvData() {
//     //     //Call api get answers (should get username and replace in the api path)

//     //     //console.log({session});
//     //     //var name = session.user.name

//     //     const result = await fetch('/api/csv/email/jojo', {
//     //         method : 'GET',
//     //     });
//     //     var data =  await result.json();
//     //     //console.log(data);
//     //     setCsv(data.csvInfo);
//     // }

//     // async function getMetricCsvData() {
//     //     //Call api get answers (should get username and replace in the api path)

//     //     //console.log({session});
//     //     //var name = session.user.name

//     //     const result = await fetch('/api/csv/metric/jojo', {
//     //         method : 'GET',
//     //     });
//     //     var data =  await result.json();
//     //     console.log(data);
//     //     setCsv2(data.csvInfo);
//     // }

//     // // const { data: session, status } = useSession();
    
//     // useEffect(() => {
//     //     // getEmailCsvData();
//     //     // getMetricCsvData();
//     // },[]);



//     // function parseCSV(input, mode) {
//     //     var output = [];
//     //     // split on lines
//     //     const lines = input.split(/\r\n/); //Os specific
//     //     const headers = lines[0].split(',');
//     //     for(var i = 1; i < lines.length; i++) {
//     //         var currObject = {};
//     //         const data = lines[i].split(',');
//     //         for(var j = 0; j < headers.length; j++) {
//     //             currObject[headers[j]] = data[j];
//     //         }
//     //         output.push(currObject);
//     //     }
//     //     console.log(output)
//     //     if(mode == 1) {
//     //         setCsv(output);
//     //     } else {
//     //         setCsv2(output);
//     //     }
//     // }

//     // function changeHandler(event) {
//     //     console.log(event.target.files[0]);
//     //     var read = new FileReader();

//     //     read.readAsBinaryString(event.target.files[0]);

//     //     read.onloadend = function(){
//     //         //console.log(read.result);
//     //         var obtain = (event.target.name == 1) ? 1 : 0;
//     //         console.log(obtain);
//     //         parseCSV(read.result, obtain);
//     //     }
//     // }

//     // async function submitHandler1() {
//     //     console.log();
//     //     if(emailCsvInfo == null) {
//     //         return;
//     //     }

//     //     //console.log({session});
//     //     //var name = session.user.name

//     //     // const response = await fetch('/api/csv/email', {
//     //     //     method : 'POST',
//     //     //     //Cant seem to get session from useSession need doubleCheck
//     //     //     body: JSON.stringify({user: "jojo", csvInfo: emailCsvInfo}),
//     //     // });
//     //     // console.log(response.status);
//     // }

//     // async function submitHandler2() {
//     //     console.log();
//     //     if(emailCsvInfo == null) {
//     //         return;
//     //     }

//     //     //console.log({session});
//     //     //var name = session.user.name

//     //     // const response = await fetch('/api/csv/metric', {
//     //     //     method : 'POST',
//     //     //     //Cant seem to get session from useSession need doubleCheck
//     //     //     body: JSON.stringify({user: "jojo", csvInfo: metricsCsvInfo}),
//     //     // });
//     //     // console.log(response.status);
//     // }

//     // function showEmailData() {
//     //     //Make into table
//     //     return (emailCsvInfo == null) ? "" : emailCsvInfo.map((value, index) => {
//     //         return (
//     //             <div className={classes.email} key={index}>{value["email"]}</div>
//     //         )
//     //     });
//     // }

//     // function showMetricData() {
//     //     //Shows only months but should eventually make into table
//     //     return (metricsCsvInfo == null) ? "" : metricsCsvInfo.map((value, index) => {
//     //         return (
//     //             <div className={classes.email} key={index}>{value["month"]}</div>
//     //         )
//     //     });
//     // }

//     // function generateLink() {
//     //     const generateRandomString = () => window.location.href + '/' + Math.random().toString(36).slice(2)
//     //     var link = generateRandomString();
//     //     navigator.clipboard.writeText(link).then(() => alert('Text copied'));
//     //     code = link;
//     // }
    
//     // return <div className={classes.container}>
//     //     <div className={classes.row}>
//     //         {/* Email csv */}
//     //         <div className={classes.column}>
//     //             <input type="file" onChange={changeHandler} name="1" accept=".csv"></input>
//     //             <br></br>
//     //             <Fade>{showEmailData()}</Fade>
//     //             <br></br>
//     //             <button onClick={submitHandler1} disabled={(emailCsvInfo == null)}>Save</button>
//     //         </div>
            

//     //         {/* Metric csv */}
//     //         <div className={classes.column}>
//     //             <input type="file" onChange={changeHandler} name="2" accept=".csv"></input>
//     //             <br></br>
//     //             <Fade>{showMetricData()}</Fade>
//     //             <br></br>
//     //             <button onClick={submitHandler2} disabled={(emailCsvInfo == null)}>Save</button>
//     //         </div>

//     //     </div>
    
//     // </div>
// }

// export default SurveyInfo;