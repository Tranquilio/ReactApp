import { Stack, MenuButton, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MonthDropdown from "../components/monthDropdown";
import { useEffect, useState, useContext } from "react";
import Sidebar from '../components/Sidebar2'
import { AuthContext } from '../context/AuthContext'

const Overview = () => {

  
  const [wellbeing, setWellbeing] = useState("");
  const auth = useContext(AuthContext)

  useEffect(() => {

    async function getWellbeing() {
      const result = await fetch(`http://localhost:5000/api/employees/scores/${auth.cid}`, {
        method: 'GET',
      });
      result.json().then((response) => {
        console.log(response)
        setWellbeing(response["average"])
      })
    }
  
    getWellbeing();
  
    },[]);

  return (
    <div className="flex flex-row">
      <Sidebar className="basic-1/6" />
      <div classname="basic-5/6 bg-black">Hi!</div>
    </div>
  );
};

export default Overview;
