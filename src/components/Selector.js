import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import industries from "./industries";

const Selector = () => {
  const [industries, setIndustries] = useState(['Abortion Policy/Anti-Abortion',
  'Information Technology',
  'Engineering',
  'Architecture',
  'Consulting',
  'Communications',
  'Community and Social Services',
  'Education',
  'Government',
  'Health and Medicine',
  'Law and Public Policy']);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-green w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-green-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select industry"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-green mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter industry name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {industries?.map((industry) => (
          <li
            key={industry}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              industry.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              industry.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (industry.toLowerCase() !== selected.toLowerCase()) {
                setSelected(industry);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {industry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;