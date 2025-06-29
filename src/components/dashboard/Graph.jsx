import React, { useState } from "react";

const Graph = () => {
  const [activeTab, setActiveTab] = useState("Tasks");

  const tabs = [
    { name: "Tasks", count: 10 },
    { name: "Issues", count: 10 },
    { name: "Forms", count: 10 },
  ];

  return (
    <div className="border border-[#EBEBEB] rounded-xl w-[100%] md:w-[50%]">
      <div className="p-[12px] pb-[0px]">
        <div className="flex justify-between items-center mb-[4px]">
          <h2 className="text-sm font-semibold text-primary">
          Department wise allocation
          </h2>

          <img
            src="/assets/icons/dots.svg"
            alt="dots"
            className="p-[10px] hover:bg-gray-100 rounded-lg"
          />
        </div>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 pb-2 pt-[2px] text-xs font-normal border-b-2  ${
                activeTab === tab.name
                  ? "text-[#008745] border-[#008745]"
                  : " text-primary border-white hover:border-gray-300"
              }`}
            >
              {tab.name}{" "}
              <span
                className={`w-[20px] h-[20px] rounded-full ${
                  activeTab === tab.name ? "bg-[#EBF7ED]" : "bg-[#F2F4F6] "
                } text-xs text-center py-[1px] px-[2px]`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="border-b border-[#EBEBEB]"></div>
      <div className="h-[212px] overflow-y-auto">graph here</div>
    </div>
  );
};

export default Graph;
