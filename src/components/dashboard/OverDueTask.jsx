import React from "react";

const OverDueTask = () => {
  const employeeData = [
    {
      taskName: "Menu Planning",
      assignTo: "Ajay",
      status: "Overdue",

      dueDate: "12-07-2024",
    },
    {
      taskName: "Staff Scheduling",
      assignTo: "Niraj",
      status: "Overdue",
      dueDate: "01-08-2023",
    },
    {
      taskName: "Inventory management",
      assignTo: "Vijay",
      status: "Overdue",
      dueDate: "02-09-2022",
    },
    {
      taskName: "Customer Feedback Analysis",
      assignTo: "Arvind",
      status: "Overdue",
      dueDate: "11-06-2025",
    },
    {
      taskName: "Inventory management",
      assignTo: "Vijay",
      status: "Overdue",
      dueDate: "02-09-2022",
    },
  ];

  return (
    <div className="border border-[#EBEBEB] rounded-xl w-[100%] md:w-[50%]">
      <div className="p-[12px]">
        <div className="flex justify-between items-center mb-[4px]">
          <div className="flex gap-[4px] items-center">
            <h2 className="text-sm font-semibold text-primary">
              Overdue tasks
            </h2>
            <div className="w-[20px] h-[20px] rounded-full bg-[#F2F4F6] text-primary text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[12px] items-center">
            <img
              src="/assets/icons/share.svg"
              alt="share"
              className="min-h-[20px]  min-w-[20px] hover:bg-gray-100 rounded-lg object-cover p-[5px]"
            />
            <img
              src="/assets/icons/dots.svg"
              alt="dots"
              className="p-[10px] hover:bg-gray-100 rounded-lg min-h-[10px] min-w-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-[#EBEBEB]"></div>
      <div className="h-[212px] overflow-y-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#F2F4F6] ">
              <th className="px-[8px] py-[12px] text-left font-medium">
                Task Name
              </th>
              <th className="px-[8px] py-[12px] text-left font-medium">
                Assigned to
              </th>
              <th className="px-[8px] py-[12px] text-left font-medium">
                Status
              </th>
              <th className="px-[8px] py-[12px] text-left font-medium">
                Due date
              </th>
              <th className="px-[8px] py-[12px] text-center font-medium">
                Reassign
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => (
              <tr
                key={index}
                className={"border border-b-[#EBEBEB] rounded-lg"}
              >
                <td className="p-[12px] text-primary ">{employee.taskName}</td>
                <td className="p-[12px] text-primary">{employee.assignTo}</td>
                <td className="p-[12px] text-primary">
                  <span className="bg-[#FFF0E5] border-[0.5px] border-[#FF6D00] px-[6px] py-[3px] rounded-md text-[#FF6D00]">
                    {employee.status}
                  </span>
                </td>
                <td className="p-[12px] text-primary ">{employee.dueDate}</td>
                <td className="p-[12px] text-primary flex justify-center">
                  <img
                    src="/assets/icons/reAssign.svg"
                    alt="reAssign"
                    className=" min-h-[10px] min-w-[10px]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverDueTask;
