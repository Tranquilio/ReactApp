// import Link from "next/link";
import { useState } from "react";
// import { Fade } from "react-reveal";
import { useEffect } from "react";
import classes from "./surveyinfo.module.css";
// import { useSession } from "next-auth/react";

var code = "Deploy survey"


function SurveyInfo() {

    const [emailCsvInfo, setCsv] = useState(null);
    const [metricsCsvInfo, setCsv2] = useState(null);
    const [deployState, setDeploy] = useState(false);


    async function getEmailCsvData() {
        //Call api get answers (should get username and replace in the api path)

        //console.log({session});
        //var name = session.user.name

        const result = await fetch('/api/csv/email/jojo', {
            method : 'GET',
        });
        var data =  await result.json();
        //console.log(data);
        setCsv(data.csvInfo);
    }

    async function getMetricCsvData() {
        //Call api get answers (should get username and replace in the api path)

        //console.log({session});
        //var name = session.user.name

        const result = await fetch('/api/csv/metric/jojo', {
            method : 'GET',
        });
        var data =  await result.json();
        console.log(data);
        setCsv2(data.csvInfo);
    }

    // const { data: session, status } = useSession();
    
    useEffect(() => {
        // getEmailCsvData();
        // getMetricCsvData();
    },[]);



    function parseCSV(input, mode) {
        var output = [];
        // split on lines
        const lines = input.split(/\r\n/); //Os specific
        const headers = lines[0].split(',');
        for(var i = 1; i < lines.length; i++) {
            var currObject = {};
            const data = lines[i].split(',');
            for(var j = 0; j < headers.length; j++) {
                currObject[headers[j]] = data[j];
            }
            output.push(currObject);
        }
        console.log(output)
        if(mode == 1) {
            setCsv(output);
        } else {
            setCsv2(output);
        }
    }

    function changeHandler(event) {
        console.log(event.target.files[0]);
        var read = new FileReader();

        read.readAsBinaryString(event.target.files[0]);

        read.onloadend = function(){
            //console.log(read.result);
            var obtain = (event.target.name == 1) ? 1 : 0;
            console.log(obtain);
            parseCSV(read.result, obtain);
        }
    }

    async function submitHandler1() {
        console.log();
        if(emailCsvInfo == null) {
            return;
        }

        //console.log({session});
        //var name = session.user.name

        // const response = await fetch('/api/csv/email', {
        //     method : 'POST',
        //     //Cant seem to get session from useSession need doubleCheck
        //     body: JSON.stringify({user: "jojo", csvInfo: emailCsvInfo}),
        // });
        // console.log(response.status);
    }

    async function submitHandler2() {
        console.log();
        if(emailCsvInfo == null) {
            return;
        }

        //console.log({session});
        //var name = session.user.name

        // const response = await fetch('/api/csv/metric', {
        //     method : 'POST',
        //     //Cant seem to get session from useSession need doubleCheck
        //     body: JSON.stringify({user: "jojo", csvInfo: metricsCsvInfo}),
        // });
        // console.log(response.status);
    }

    function showEmailData() {
        //Make into table
        return (emailCsvInfo == null) ? "" : emailCsvInfo.map((value, index) => {
            return (
                <div className={classes.email} key={index}>{value["email"]}</div>
            )
        });
    }

    function showMetricData() {
        //Shows only months but should eventually make into table
        return (metricsCsvInfo == null) ? "" : metricsCsvInfo.map((value, index) => {
            return (
                <div className={classes.email} key={index}>{value["month"]}</div>
            )
        });
    }

    function generateLink() {
        const generateRandomString = () => window.location.href + '/' + Math.random().toString(36).slice(2)
        var link = generateRandomString();
        navigator.clipboard.writeText(link).then(() => alert('Text copied'));
        code = link;
    }
    
    return <div className={classes.container}>
        <div className={classes.row}>
            {/* Email csv */}
            <div className={classes.column}>
                <input type="file" onChange={changeHandler} name="1" accept=".csv"></input>
                <br></br>
                <div>{showEmailData()}</div>
                <br></br>
                <button onClick={submitHandler1} disabled={(emailCsvInfo == null)}>Save</button>
            </div>
            

            {/* Metric csv */}
            <div className={classes.column}>
                <input type="file" onChange={changeHandler} name="2" accept=".csv"></input>
                <br></br>
                <div>{showMetricData()}</div>
                <br></br>
                <button onClick={submitHandler2} disabled={(emailCsvInfo == null)}>Save</button>
            </div>

            {/* Preview Survey */}
            {/* <Link href="/survey">
                <button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400'>Preview survey here</button>
            </Link> */}

        </div>
        {/* Deploy Survey button */}
        {/* <Link href="">
            <button className='shadow-xl py-5 px-5 mt-10 rounded-full text-white bg-rose-300 hover:bg-rose-400' onClick={
                () => {
                    (!deployState) ? generateLink() : () => {};
                    setDeploy(true);
                }}> 
                <a className='tracking-tight md:text-white text-rose-400 md:font-bold font-semibold px-2 text-xl'>{code}</a>
            </button>
        </Link> */}
    </div>
}

export default SurveyInfo;