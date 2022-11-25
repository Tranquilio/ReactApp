import { Stack, MenuButton, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MonthDropdown from "../components/monthDropdown";
import { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar2'

const Overview = () => {

  
  const [wellbeing, setWellbeing] = useState("");

  useEffect(() => {

    async function getWellbeing() {
      const result = await fetch('http://localhost:5000/api/employees/scores/eg5tbesgbnjdav2yud723yy', {
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
    <div>
      <Sidebar />
      Hi!
    {/* <div className="relative bg-white w-full h-[981px] text-left text-2xl text-black font-raleway"> */}
      {/* <div className="absolute top-[0px] left-[0px] w-[226px] h-[981px] text-xl">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[226px] h-[981px]" />
        <div className="absolute top-[79.57px] left-[87px] text-[22px] inline-block w-[100px] h-[28.34px]">
          tranquilio
        </div>
        <div className="absolute top-[176.58px] left-[0px] w-[226px] h-[65.4px]">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(-90deg,_rgba(130,_162,_132,_0.1)_0.3%,_rgba(130,_162,_132,_0))] w-[226px] h-[65.4px]" />
          <div className="absolute top-[0px] left-[223.24px] rounded-[4px] bg-gray-300 w-[2.76px] h-[65.4px]" />
          <div className="absolute top-[27.58px] left-[80px] inline-block w-[66px] h-[13.25px]">
            Overview
          </div>
        </div>
        <div className="absolute top-[771.72px] left-[95px] w-[35.54px] h-[28.34px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[35.54px] h-[28.34px]">
            Help
          </div>
        </div>
        <div className="absolute top-[278.07px] left-[55px] w-[124px] h-[19.62px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[124px] h-[19.62px]">
            Recommendation
          </div>
        </div>
        <div className="absolute top-[353.28px] left-[94px] w-[38px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] inline-block">
            Track
          </div>
        </div>
        <div className="absolute top-[689.97px] left-[84px] w-[58px] h-[18.53px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[58px] h-[18.53px]">
            Settings
          </div>
        </div>
        <div className="absolute top-[851.29px] left-[87px] w-[53px] h-[28.34px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[53px] h-[28.34px]">
            Logout
          </div>
        </div>
        <img
          className="absolute top-[68.67px] left-[36px] w-[45px] h-[45px]"
          alt=""
          src="../ellipse-3.svg"
        />
        <div className="absolute top-[70.85px] left-[47px] text-[36px] text-white inline-block w-[15.16px] h-[22.89px]">
          T
        </div>
      // </div> */}
      {/* <div className="absolute top-[21px] left-[284px] w-[1088px] h-[45.57px]">
        <div className="absolute top-[11.51px] left-[907.07px] font-medium inline-block w-[180.93px] h-[31.62px]">
          Aayush Mathur
        </div>
        <img
          className="absolute top-[0px] left-[1027.34px] w-[44.93px] h-[45px] overflow-hidden"
          alt=""
          src="../arrow-drop-down.svg"
        /> */}
        {/* <div className="absolute top-[10px] left-[890.34px] w-[24.93px] h-[45px] overflow-hidden">
          <MonthDropdown/>
        </div> */}
{/* 
        <div className="absolute top-[13.95px] left-[0px] font-medium inline-block w-[119px] h-[31.62px]">
          Tranquilio Team
        </div>
      </div>
      <img
        className="absolute top-[28px] left-[410px] w-[44.93px] h-[37px] overflow-hidden"
        alt=""
        src="../arrow-drop-down1.svg"
      />
      <div className="absolute top-[73px] left-[284px] bg-gray-200 w-[1064px] h-[1px]" />
      <div className="absolute top-[284px] left-[284px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-xs">
        <div className="absolute top-[13px] left-[13px] text-2xl font-semibold inline-block w-[83px] h-[22px]">
          Wellbeing
        </div>
        <div className="absolute top-[39px] left-[13px] text-base inline-block w-[295px] h-[22px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Average wellbeing score compared to previous months
          </p>
        </div>
        <div className="absolute top-[92px] left-[33px] w-[255.21px] h-[202px] text-sm">
          <div className="absolute top-[188px] left-[32px] w-[223.21px] h-[14px] text-lg">
            <div className="absolute top-[0px] left-[0px] inline-block w-[26.23px]">
              Sept
            </div>
            <div className="absolute top-[0px] left-[69px] inline-block w-[21.19px]">
              Oct
            </div>
            <div className="absolute top-[0px] left-[133px] inline-block w-[24.22px]">
              Nov
            </div>
            <div className="absolute top-[0px] left-[200px] inline-block w-[23.21px]">
              Dec 
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] inline-block w-[30.02px] h-[27px]">
            100
          </div>
          <div className="absolute top-[170px] left-[0px] inline-block w-[12.01px] h-[27px]">
            0
          </div>
          <div className="absolute top-[34px] left-[0px] inline-block w-[22.82px] h-[27px]">
            80
          </div>
          <div className="absolute top-[68px] left-[0px] inline-block w-[22.82px] h-[27px]">
            60
          </div>
          <div className="absolute top-[102px] left-[0px] inline-block w-[21.62px] h-[27px]">
            40
          </div>
          <div className="absolute top-[136px] left-[0px] inline-block w-[21.62px] h-[27px]">
            20
          </div>
        </div>
        <div className="absolute top-[96.75px] left-[79.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
        <div className="absolute top-[96.75px] left-[145.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
        <div className="absolute top-[96.75px] left-[209.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
        <div className="absolute top-[96.75px] left-[209.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.8)] box-border w-[0.5px] h-[179.54px]" />
        <div className="absolute top-[137.5px] left-[209.5px] border-r-[1px_solid_rgba(130,_162,_132,_0.8)] box-border w-[1px] h-[138px]" />
        <div className="absolute top-[96.75px] left-[276.75px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[179.54px]" />
        <img
          className="absolute top-[118px] left-[78px] w-[460.5px] h-[304px]"
          alt=""
          src="../group-44.svg"
        />
        <img
          className="absolute top-[133px] left-[207px] w-[6px] h-[6px]"
          alt=""
          src="../ellipse-4.svg"
        />
        <div className="absolute top-[105px] left-[190px] rounded-[15px] bg-black w-[40px] h-[23px]" />
        <img
          className="absolute top-[127.25px] left-[207.4px] w-[5.2px] h-[3.75px]"
          alt=""
          src="../polygon-1.svg"
        />
        <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px]">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[55px] h-[13px]" />
          <div className="absolute top-[2px] left-[5px] inline-block">
            4 months
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
          />
        </div>
        <div className="absolute top-[64px] left-[13px] bg-gray-200 w-[290px] h-[1px]" />
        <div className="absolute top-[112px] left-[203px] font-semibold text-gray-100 inline-block">
          79%
        </div>
      </div>
      <div className="absolute top-[635px] left-[284px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[692px] h-[320px] overflow-hidden text-xs">
        <div className="absolute top-[13px] left-[13px] text-2xl font-semibold inline-block w-[141px] h-[22px]">
          Stress Breakdown
        </div>
        <div className="absolute top-[39px] left-[13px] text-base inline-block w-[338px] h-[22px]">
          Stress breakdown of your organization based on 6 sub-constructs
        </div>
        <div className="absolute top-[64px] left-[13px] bg-gray-200 w-[662px] h-[1px]" />
        <div className="absolute top-[92px] left-[20px] w-[649px] h-[197px] text-sm">
          <div className="absolute top-[188px] left-[40.49px] w-[608.51px] h-[9px] text-xs">
            <div className="absolute top-[0px] left-[0px] inline-block">
              Work Demand
            </div>
            <div className="absolute top-[0px] left-[108.51px] inline-block">
              Work Control
            </div>
            <div className="absolute top-[0px] left-[208.51px] inline-block">
              Work Satisfaction
            </div>
            <div className="absolute top-[0px] left-[321.51px] inline-block">
              Work Support
            </div>
            <div className="absolute top-[0px] left-[423.51px] inline-block">
              Work Recognition
            </div>
            <div className="absolute top-[0px] left-[510.51px] inline-block">
              Organization Management
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] inline-block w-[37.99px] h-[27px]">
            100
          </div>
          <div className="absolute top-[170px] left-[0px] inline-block w-[15.19px] h-[27px]">
            0
          </div>
          <div className="absolute top-[34px] left-[0px] inline-block w-[28.87px] h-[27px]">
            80
          </div>
          <div className="absolute top-[68px] left-[0px] inline-block w-[28.87px] h-[27px]">
            60
          </div>
          <div className="absolute top-[102px] left-[0px] inline-block w-[27.35px] h-[27px]">
            40
          </div>
          <div className="absolute top-[136px] left-[0px] inline-block w-[27.35px] h-[27px]">
            20
          </div>
        </div>
        <div className="absolute top-[16px] left-[614px] w-[61px] h-[13px]">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[61px] h-[13px]" />
          <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
            This month
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector1.svg"
          />
        </div>
        <div className="absolute top-[188px] left-[60px] w-[55px] h-[84px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[6px]" />
          <div className="absolute top-[6px] left-[0px] bg-gray-500 w-[55px] h-[78px]" />
        </div>
        <div className="absolute top-[143px] left-[167px] w-[55px] h-[129px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[10px]" />
          <div className="absolute top-[10px] left-[0px] bg-gray-500 w-[55px] h-[119px]" />
        </div>
        <div className="absolute top-[128px] left-[274px] w-[55px] h-[144px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[32px]" />
          <div className="absolute top-[32px] left-[0px] bg-gray-500 w-[55px] h-[112px]" />
        </div>
        <div className="absolute top-[150px] left-[381px] w-[55px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[13px]" />
          <div className="absolute top-[13px] left-[0px] bg-gray-500 w-[55px] h-[112px]" />
        </div>
        <div className="absolute top-[138px] left-[489px] w-[55px] h-[134px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[41px]" />
          <div className="absolute top-[41px] left-[0px] bg-gray-500 w-[55px] h-[93px]" />
        </div>
        <div className="absolute top-[115px] left-[595px] w-[55px] h-[157px]">
          <div className="absolute top-[0px] left-[0px] bg-brown w-[55px] h-[16px]" />
          <div className="absolute top-[16px] left-[0px] bg-gray-500 w-[55px] h-[141px]" />
        </div>
        <div className="absolute top-[132px] left-[335px] rounded-[15px] bg-black w-[40px] h-[23px]" />
        <img
          className="absolute h-[0.78%] w-[0.65%] top-[46.09%] right-[48.99%] bottom-[53.13%] left-[50.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector2.svg"
        />
        <div className="absolute top-[136px] left-[347px] font-semibold text-gray-100 inline-block">
          83%
        </div>
        <div className="absolute top-[145px] left-[354px] text-[5px] font-semibold text-gray-300 inline-block">
          20
        </div>
        <img
          className="absolute top-[141.4px] left-[332px] w-[3.75px] h-[5.2px]"
          alt=""
          src="../polygon-11.svg"
        />
        <div className="absolute top-[100px] left-[339px] font-semibold text-gray-100 inline-block">
          79%
        </div>
        <div className="absolute top-[72px] left-[590px] rounded-[10px] bg-brown w-[20px] h-[7px]" />
        <div className="absolute top-[87px] left-[590px] rounded-[10px] bg-gray-500 w-[20px] h-[7px]" />
        <div className="absolute top-[71px] left-[615px] inline-block">
          This month
        </div>
        <div className="absolute top-[87px] left-[615px] inline-block">
          Previous month
        </div>
      </div>
      <div className="absolute top-[284px] left-[656px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-sm text-gray-400">
        <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-red w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
          Team
        </div>
        <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
          Wellbeing score by team
        </div>
        <div className="absolute top-[124px] left-[10px] w-[94px] h-[176px] text-base text-black">
          <div className="absolute top-[0px] left-[19px] inline-block w-[51px] h-[13.23px]">
            Marketing
          </div>
          <div className="absolute top-[40.69px] left-[15px] inline-block w-[65px] h-[13.23px]">
            Product Dev.
          </div>
          <div className="absolute top-[81.39px] left-[30px] inline-block w-[28px] h-[13.23px]">
            Sales
          </div>
          <div className="absolute top-[122.08px] left-[13px] inline-block w-[62px] h-[13.23px]">
            Engineering
          </div>
          <div className="absolute top-[162.77px] left-[0px] inline-block w-[94px] h-[13.23px]">
            Customer Support
          </div>
        </div>
        <div className="absolute top-[65px] left-[13px] bg-gray-200 w-[290px] h-[1px]" />
        <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
        <div className="absolute top-[88px] left-[136px] text-lg text-black inline-block w-[26.23px]">
          Sept
        </div>
        <div className="absolute top-[88px] left-[205px] text-lg text-black inline-block w-[21.19px]">
          Oct
        </div>
        <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block w-[24.22px]">
          Nov
        </div>
        <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[122px] left-[144px] inline-block">65</div>
        <div className="absolute top-[202px] left-[144px] inline-block">52</div>
        <div className="absolute top-[162px] left-[144px] inline-block">76</div>
        <div className="absolute top-[242px] left-[144px] inline-block">83</div>
        <div className="absolute top-[282px] left-[144px] inline-block">85</div>
        <div className="absolute top-[122px] left-[210px] inline-block">80</div>
        <div className="absolute top-[202px] left-[210px] inline-block">65</div>
        <div className="absolute top-[162px] left-[210px] inline-block">78</div>
        <div className="absolute top-[242px] left-[210px] inline-block">86</div>
        <div className="absolute top-[282px] left-[210px] inline-block">90</div>
        <div className="absolute top-[123px] left-[277px] inline-block">82</div>
        <div className="absolute top-[203px] left-[277px] inline-block">79</div>
        <div className="absolute top-[163px] left-[277px] inline-block">85</div>
        <div className="absolute top-[243px] left-[277px] inline-block">85</div>
        <div className="absolute top-[283px] left-[277px] inline-block">92</div>
        <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[55px] h-[13px]" />
          <div className="absolute top-[2px] left-[5px] inline-block">
            3 months
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
          />
        </div>
      </div>
      <div className="absolute top-[284px] left-[1028px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-sm text-gray-400">
        <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-red w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
          Seniority
        </div>
        <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
          Wellbeing score by seniority
        </div>
        <div className="absolute top-[124px] left-[29px] w-[51px] h-[171.77px] text-base text-black">
          <div className="absolute top-[0px] left-[0px] inline-block w-[51px] h-[13.23px]">
            0-0.5 year
          </div>
          <div className="absolute top-[39px] left-[2px] inline-block">
            0.5-1 year
          </div>
          <div className="absolute top-[80px] left-[6px] inline-block">
            1-2 years
          </div>
          <div className="absolute top-[122.08px] left-[5px] inline-block">
            2-3 years
          </div>
          <div className="absolute top-[158.77px] left-[10px] inline-block">
            3+ years
          </div>
        </div>
        <div className="absolute top-[65px] left-[13px] bg-gray-200 w-[290px] h-[1px]" />
        <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
        <div className="absolute top-[88px] left-[136px] text-lg text-black inline-block w-[26.23px]">
          Sept
        </div>
        <div className="absolute top-[88px] left-[205px] text-lg text-black inline-block w-[21.19px]">
          Oct
        </div>
        <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block w-[24.22px]">
          Nov
        </div>
        <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[122px] left-[144px] inline-block">70</div>
        <div className="absolute top-[202px] left-[144px] inline-block">79</div>
        <div className="absolute top-[162px] left-[144px] inline-block">59</div>
        <div className="absolute top-[242px] left-[144px] inline-block">80</div>
        <div className="absolute top-[282px] left-[144px] inline-block">68</div>
        <div className="absolute top-[122px] left-[210px] inline-block">69</div>
        <div className="absolute top-[202px] left-[210px] inline-block">84</div>
        <div className="absolute top-[162px] left-[210px] inline-block">68</div>
        <div className="absolute top-[242px] left-[210px] inline-block">84</div>
        <div className="absolute top-[282px] left-[210px] inline-block">71</div>
        <div className="absolute top-[123px] left-[277px] inline-block">77</div>
        <div className="absolute top-[203px] left-[277px] inline-block">88</div>
        <div className="absolute top-[163px] left-[277px] inline-block">71</div>
        <div className="absolute top-[243px] left-[277px] inline-block">90</div>
        <div className="absolute top-[283px] left-[277px] inline-block">79</div>
        <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[55px] h-[13px]" />
          <div className="absolute top-[2px] left-[5px] inline-block">
            3 months
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
          />
        </div>
      </div>
      <div className="absolute top-[634px] left-[1028px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.15)] w-[320px] h-[320px] overflow-hidden text-sm text-gray-400">
        <div className="absolute top-[115px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[128px] rounded-[3px] bg-red w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[128px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[128px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[14px] left-[13px] text-2xl font-semibold text-black inline-block w-[83px] h-[22px]">
          Initiative
        </div>
        <div className="absolute top-[40px] left-[13px] text-base text-black inline-block w-[295px] h-[22px]">
          Wellbeing score by company initiatives.
        </div>
        <div className="absolute top-[65px] left-[13px] bg-gray-200 w-[290px] h-[1px]" />
        <div className="absolute top-[87.75px] left-[111.25px] border-r-[0.5px_solid_rgba(130,_162,_132,_0.5)] box-border w-[0.5px] h-[218.5px]" />
        <div className="absolute top-[88px] left-[131px] text-lg text-black inline-block">
          Before
        </div>
        <div className="absolute top-[88px] left-[199px] text-lg text-black inline-block">
          During
        </div>
        <div className="absolute top-[88px] left-[269px] text-lg text-black inline-block">
          After
        </div>
        <div className="absolute top-[115px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[195px] rounded-[3px] bg-orange w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[195px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[115px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[195px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[155px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[235px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[275px] left-[260px] rounded-[3px] bg-gray-500 w-[43px] h-[27px]" />
        <div className="absolute top-[122px] left-[144px] inline-block">70</div>
        <div className="absolute top-[202px] left-[144px] inline-block">59</div>
        <div className="absolute top-[162px] left-[144px] inline-block">66</div>
        <div className="absolute top-[242px] left-[144px] inline-block">80</div>
        <div className="absolute top-[282px] left-[144px] inline-block">68</div>
        <div className="absolute top-[122px] left-[210px] inline-block">69</div>
        <div className="absolute top-[202px] left-[210px] inline-block">84</div>
        <div className="absolute top-[162px] left-[210px] inline-block">68</div>
        <div className="absolute top-[242px] left-[210px] inline-block">84</div>
        <div className="absolute top-[282px] left-[210px] inline-block">71</div>
        <div className="absolute top-[123px] left-[277px] inline-block">77</div>
        <div className="absolute top-[203px] left-[277px] inline-block">88</div>
        <div className="absolute top-[163px] left-[277px] inline-block">71</div>
        <div className="absolute top-[243px] left-[277px] inline-block">90</div>
        <div className="absolute top-[283px] left-[277px] inline-block">79</div>
        <div className="absolute top-[17px] left-[248px] w-[55px] h-[13px] text-xs text-black">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[55px] h-[13px]" />
          <div className="absolute top-[2px] left-[5px] inline-block">
            3 months
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
          />
        </div>
        <div className="absolute top-[124px] left-[32px] w-[53px] h-[171.77px] text-base text-black">
          <div className="absolute top-[0px] left-[0px] inline-block">
            Initiative A
          </div>
          <div className="absolute top-[39px] left-[0px] inline-block">
            Initiative B
          </div>
          <div className="absolute top-[80px] left-[0px] inline-block">
            Initiative C
          </div>
          <div className="absolute top-[122.08px] left-[0px] inline-block">
            Initiative D
          </div>
          <div className="absolute top-[158.77px] left-[0px] inline-block">
            Initiative E
          </div>
        </div>
      </div>
      <img
        className="absolute top-[935px] left-[1257px] rounded-[10px] w-[130px] h-[37px]"
        alt=""
        src="../rectangle-110.svg"
      />
      <div className="absolute top-[948px] left-[1278px] text-base inline-block">
        Export to PDF
      </div>
      <div className="absolute top-[114px] left-[284px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden">
        <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[83px] h-[22px]">
          Overview
        </div>
        <div className="absolute top-[62px] left-[16px] text-base inline-block w-[162px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Your recent well-being score and change from previous month
          </p>
        </div>
        {/* Button */}
        {/* <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[61px] h-[13px]" />
          <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
            This month
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector1.svg"
          />
        </div>
        <div className="absolute top-[96px] left-[239px] text-sm font-medium text-gray-300 inline-block">
          10
        </div>
        <div className="absolute top-[72px] left-[224px] text-[20px] font-semibold inline-block">
          {wellbeing}
        </div>
        <img
          className="absolute h-[2.03%] w-[1.56%] top-[68.51%] right-[25.94%] bottom-[29.46%] left-[72.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector6.svg"
        />
        <img
          className="absolute top-[34px] left-[190px] w-[100px] h-[100px]"
          alt=""
          src="../group-51.svg"
        />
      </div>
      <div className="absolute top-[114px] left-[1028px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden">
        <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[157px] h-[22px]">
          Revenue Generated
        </div>
        <div className="absolute top-[40px] left-[16px] text-base inline-block w-[289px]">
          Approximate revenue generated based on current-wellbeing insights this
          month
        </div>
        <div className="absolute top-[85px] left-[113px] w-[94px] h-[38px] text-3xl text-gray-300">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
            $7,144
          </div>
        </div>
        <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[61px] h-[13px]" />
          <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
            This month
          </div>
          <img
            className="absolute h-[23.08%] w-[9.09%] top-[38.46%] right-[7.27%] bottom-[38.46%] left-[83.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[114px] left-[656px] w-[320px] h-[148px]">
        <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-gray-600 shadow-[0px_4px_5px_1px_rgba(130,_162,_132,_0.1)] w-[320px] h-[148px] overflow-hidden">
          <div className="absolute top-[13px] left-[16px] font-semibold inline-block w-[90px] h-[22px]">
            Cost Saved
          </div>
          <div className="absolute top-[40px] left-[19px] text-base inline-block w-[289px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Approximate cost saved based on current well-being insights this
              month
            </p>
          </div>
          <img
            className="absolute h-[1.23%] w-[1.73%] top-[11.49%] right-[4.83%] bottom-[87.29%] left-[93.44%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector8.svg"
          />
        </div>
        <div className="absolute top-[84px] left-[111px] w-[98px] h-[38px] text-3xl text-gray-300">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
            $4,233
          </div>
        </div>
        <div className="absolute top-[11px] left-[248px] w-[61px] h-[13px] text-xs">
          <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-gray-700 w-[61px] h-[13px]" />
          <div className="absolute top-[2px] left-[5.55px] inline-block w-[46.58px]">
            This month
          </div>
        </div>
      </div>
      <div className="absolute top-[935.5px] left-[1358.5px] border-r-[1px_solid_rgba(130,_162,_132,_0.5)] box-border w-[1px] h-[37px]" />
      <img
        className="absolute h-[0.31%] w-[0.36%] top-[97.04%] right-[1.86%] bottom-[2.65%] left-[97.79%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
    </div> */}
    </div>
  );
};

export default Overview;
