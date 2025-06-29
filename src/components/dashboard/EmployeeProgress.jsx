import React, { useState } from "react";

const EmployeeProgress = () => {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [showOutletDropdown, setShowOutletDropdown] = useState(false);

  const tabs = [
    { name: "Tasks", count: 10 },
    { name: "Issues", count: 10 },
    { name: "Forms", count: 10 },
  ];

  const outlets = ["Employee 1", "Employee 2", "Employee 3"];

  const employeeData = [
    { name: "Anita", department: "IT Services", assigned: 90, ongoing: 90, overdue: 90, completed: "90%" },
    { name: "Rahul", department: "Human Resources", assigned: 31, ongoing: 31, overdue: 31, completed: "31%" },
    { name: "Priya", department: "Sales Division", assigned: 45, ongoing: 45, overdue: 45, completed: "45%" },
    { name: "Vikram", department: "Research and Development", assigned: 79, ongoing: 79, overdue: 79, completed: "79%" },
    { name: "Anita", department: "IT Services", assigned: 90, ongoing: 90, overdue: 90, completed: "90%" },
  ];


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
        <div className="flex justify-between items-center mb-[4px]">
          <h2 className="text-sm font-semibold text-primary">Employee wise progress</h2>
          <div className="flex gap-[12px] items-center">
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
            </div>{" "}
            <img
              src="/assets/icons/share.svg"
              alt="share"
              className="p-[10px] hover:bg-gray-100 rounded-lg"
            />
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
      <div className="h-[212px] overflow-y-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#F2F4F6] ">
              <th className="px-[8px] py-[12px] text-left font-medium">Name</th>
              <th className="px-[8px] py-[12px] text-left font-medium">Department</th>
              <th className="px-[8px] py-[12px] text-left font-medium">Assigned</th>
              <th className="px-[8px] py-[12px] text-left font-medium">Ongoing</th>
              <th className="px-[8px] py-[12px] text-left font-medium">Overdue</th>
              <th className="px-[8px] py-[12px] text-left font-medium">Completed</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => (
              <tr
                key={index}
                className={'border border-b-[#EBEBEB]'}
              >
                <td className="p-[12px] text-primary ">{employee.name}</td>
                <td className="p-[12px] text-primary">{employee.department}</td>
                <td className="p-[12px] text-primary">{employee.assigned}</td>
                <td className="p-[12px] text-primary">{employee.ongoing}</td>
                <td className="p-[12px] text-primary">{employee.overdue}</td>
                <td className="p-[12px] text-primary">{employee.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeProgress;
