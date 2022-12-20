import {Link} from 'react-router-dom'
import logo from '../assets/logotext.png'
import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FormContext } from '../context/FormContext'

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

function Sidebar() {
    const auth = useContext(AuthContext)
    const form = useContext(FormContext)
  
    const location = useLocation();
    const { pathname } = location;
  
    const sidebar = useRef(null);
  
    const logout = () => {
      auth.logout()
      form.clearFormContext()
    }

    return (
      // <div className='flex h-screen overflow-hidden'>

      <div id="sidebar" ref={sidebar} className="relative bg-white w-1/6 h-screen flex flex-col p-[20px] box-border items-start justify-between text-left text-4xl text-blackish-700 font-raleway">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex flex-row p-[8px] box-border items-center justify-start gap-[12px]">
            <div className="relative w-[32px] h-[32px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-gray-500 w-[32px] h-[32px]" />
              <img
                className="absolute top-[8.8px] left-[9.76px] w-[14.4px] h-[14.4px]"
                alt=""
                src="../public-sidebar/polygon-1.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              tranquilio
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <NavLink style={{textDecoration: 'none'}} end to="/profile/overview" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px]">
            <button className={`[border:none] p-[12px] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] hover:bg-gray-1200 ${pathname.includes('overview') ? "bg-gray-1200" : "bg-[transparent] hover:transparent"}`}>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/uhomealt.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Overview
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>

            <NavLink style={{textDecoration: 'none'}} end to="/profile/insights" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px]">
            <button className={`[border:none] p-[12px] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] hover:bg-gray-1200 ${pathname.includes('insights') ? "bg-gray-1200" : "bg-[transparent] hover:transparent"}`}>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/uanalysis.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Insights
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <b className="relative text-lg leading-[16px] inline-block font-raleway text-white text-center">
                    2
                  </b>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>
            
            <NavLink style={{textDecoration: 'none'}} end to="/profile/assessment" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px]">
            <button className={`[border:none] p-[12px] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] hover:bg-gray-1200 ${pathname.includes('assessment') ? "bg-gray-1200" : "bg-[transparent] hover:transparent"}`}>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/ucalender.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Assessment
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/upluscircle.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>

            <NavLink style={{textDecoration: 'none'}} end to="/profile/recommendation" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px]">
            <button className={`[border:none] p-[12px] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] hover:bg-gray-1200 ${pathname.includes('recommendation') ? "bg-gray-1200" : "bg-[transparent] hover:transparent"}`}>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/ubox.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Recommendation
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>

            <NavLink style={{textDecoration: 'none'}} end to="/profile/employeeData" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px]">
            <button className={`[border:none] p-[12px] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] hover:bg-gray-1200 ${pathname.includes('employeeData') ? "bg-gray-1200" : "bg-[transparent] hover:transparent"}`}>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/ucreatedashboard.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">{`Data & Integration`}</div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown3.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-lg">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <NavLink style={{textDecoration: 'none'}} end to="/profile/insights" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px] hover:bg-gray-1200 focus:bg-gray-1200">
                <button className="cursor-pointer [border:none] p-[12px] bg-[transparent] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] focus:bg-gray-1200"> 
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/ubell.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Notifications
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/upluscircle.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>

            <NavLink style={{textDecoration: 'none'}} end to="/profile/settings" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px] hover:bg-gray-1200 focus:bg-gray-1200">
                <button className="cursor-pointer [border:none] p-[12px] bg-[transparent] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] focus:bg-gray-1200">
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/usetting.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Settings
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown3.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>

            <NavLink onClick={() => {logout()}} style={{textDecoration: 'none'}} end to="/login" className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch rounded-[4px] flex flex-col items-center justify-center gap-[0px] hover:bg-gray-1200 focus:bg-gray-1200">
              <button className="cursor-pointer [border:none] p-[12px] bg-[transparent] self-stretch rounded-[4px] flex flex-row box-border items-center justify-center gap-[16px] focus:bg-gray-1200">
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                  alt=""
                  src="../public-sidebar/usignoutalt.svg"
                />
                <div className="flex-1 relative text-2xl leading-[20px] font-medium font-raleway text-blackish-700 text-left inline-block">
                  Logout
                </div>
                <img
                  className="relative w-[20px] h-[20px] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="../public-sidebar/uangledown3.svg"
                />
                <div className="rounded-[2000px] bg-red-100 hidden flex-col p-[2px_6px] box-border items-start justify-start">
                  <div className="relative text-lg leading-[16px] font-raleway text-white text-center inline-block">
                    2
                  </div>
                </div>
              </button>
              <div className="self-stretch relative bg-gray-700 h-[2px] shrink-0 hidden" />
            </NavLink>
            
          </div>
          <div className="self-stretch flex flex-row p-[12px] box-border items-center justify-center gap-[8px]">
            <div className="relative w-[40px] h-[40px] shrink-0 overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[7000px] bg-white [border:1px_solid_#d9d9d9] box-border overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                    alt=""
                    src="../public-sidebar/1-2@2x.png"
                  />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[282.34px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../public-sidebar/59@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative leading-[16px] inline-block">
                Michael Smith
              </div>
              <div className="self-stretch relative leading-[14px] text-blackish-600 inline-block">
                michaelsmith12@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  };
  
  export default Sidebar;
  