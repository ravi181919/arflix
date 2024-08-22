import React from "react";

const Dropdown = ({title, option, trendingFunc}) => {
  return (
    <div className="relative inline-block w-40 bg-zinc-600 h-fit pr-[2px] rounded-md overflow-hidden">
      <select
        defaultValue="0"
        onChange={trendingFunc}
        name="filter"
        id="filter"
        className="bg-transparent text-sm border-none outline-none text-zinc-400 font-medium py-2 w-full px-5 rounded-md pr-8"
      >
        <option value="0" className="text-xs file:" disabled>
          {title}
        </option>
        {option.map((option, optionIndex) => <option value={option} className="text-xs font-medium text-red-500" key={optionIndex}  >
          {option.toUpperCase()}
        </option> )}
      </select>
    </div>
  );
};

export default Dropdown;
