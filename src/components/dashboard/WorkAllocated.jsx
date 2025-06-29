import React, { useState } from "react";

const WorkAllocated = () => {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [showOutletDropdown, setShowOutletDropdown] = useState(false);

  const tabs = [
    { name: "Tasks", count: 10 },
    { name: "Issues", count: 10 },
    { name: "Forms", count: 10 },
  ];

  const outlets = ["Employee 1", "Employee 2", "Employee 3"];

  const cards = {
    Tasks: [
      {
        id: "ID #3789",
        title: "How to Manage Stock",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3787",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
    ],
    Issues: [
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
    ],
    Forms: [
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
      {
        id: "ID #3781",
        title: "Tool for Managing Reservations",
        date: "22 June 2024",
        time: "11:00 am",
        status: "Ongoing",
        category: "Inventory",
      },
    ],
  };

  const renderOutletDropdown = () => {
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
        {outlets.map((outlet, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setShowOutletDropdown(false)}
          >
            {outlet}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-[#EBEBEB] mt-[24px]">
      <div className="p-[12px] pb-[0px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-[4px]">
          <h2 className="text-sm font-semibold text-primary ">Work Allocated</h2>
          <div className="flex gap-[12px] items-center pt-[8px] md:pt-0">
            <div className="relative">
              <button
                className={`w-[166px] bg-[#F2F4F6] py-[8.5px] px-[12px] rounded-lg flex items-center border border-[#F2F4F6] hover:border-gray-300 justify-between h-[32px]`}
                onClick={() => setShowOutletDropdown(!showOutletDropdown)}
              >
                <span className="ml-2 text-sm text-primary">
                  Select Employee
                </span>

                <img src="/assets/icons/chevron-down.svg" alt="outlet" />
              </button>
              {showOutletDropdown && renderOutletDropdown()}
            </div>
            <img
              src="/assets/icons/dots.svg"
              alt="dots"
              className="p-[10px] hover:bg-gray-100 rounded-lg"
            />
          </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-[16px] h-[212px] overflow-y-auto">
        {cards[activeTab].map((card, index) => (
          <div
            key={index}
            className="border border-[#EBEBEB] rounded-lg p-[12px] transition-colors h-[126px] hover:shadow"
          >
            <div>
              <div className="flex justify-between">
                <div className="flex gap-[4px]">
                  <img
                    src="/assets/icons/chevron-up.svg"
                    className="min-h-[16px] min-w-[16px] cursor-pointer"
                    alt="clock"
                  />
                  <span className="text-xs text-[#979797]">{card.id}</span>
                </div>
                <div className="flex gap-[4px]">
                  <img
                    src="../assets/icons/message.svg"
                    className="min-h-[16px] min-w-[16px] cursor-pointer"
                    alt="clock"
                  />
                  <span className="text-xs text-[#979797]">14</span>
                </div>
              </div>
              <h3 className="text-xs font-medium text-primary mt-[8px]">
                {card.title}
              </h3>
              <div className="flex justify-between items-center mt-[8px]">
                <div className="flex gap-[12px] ">
                  <div className="flex  gap-[2px] items-center">
                    <img
                      src="/assets/icons/calendar-dotted.svg"
                      className="min-h-[16px] min-w-[16px] cursor-pointer"
                      alt="calendar"
                    />
                    <p className="text-xs text-[#979797]">{card.date}</p>
                  </div>
                  <div className="flex  gap-[2px] items-center">
                    <img
                      src="/assets/icons/clock.svg"
                      className="min-h-[16px] min-w-[16px] cursor-pointer"
                      alt="clock"
                    />
                    <p className="text-xs text-[#979797]">{card.time}</p>
                  </div>
                </div>
                <div className="w-[20px] h-[20px] bg-[#008745] rounded-full flex text-xs items-center justify-center text-white font-normal leading-[22px]">
                  A
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-[8px]">
              <div className="flex gap-[8px]">
                <img
                  src="/assets/icons/frame.svg"
                  className="min-h-[16px] min-w-[16px] cursor-pointer"
                  alt="inventory"
                />
                <span className="text-xs text-[#D9A541] bg-[#FFF8E5] px-[6px] py-[2px] rounded-md border border-[#FFDD9D]">
                  {card.status}
                </span>
              </div>
              <div className="flex gap-[4px] bg-[#F2F4F6] px-[6px] py-[2px] rounded-lg">
                <img
                  src="/assets/icons/inventory.svg"
                  className="min-h-[16px] min-w-[16px] cursor-pointer"
                  alt="inventory"
                />
                <span className="text-xs text-primary">{card.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkAllocated;
