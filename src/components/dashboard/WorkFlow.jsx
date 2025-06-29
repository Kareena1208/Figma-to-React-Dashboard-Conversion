import React from "react";

const WorkFlow = () => {
  const workflows = [
    {
      title: "Stock Control Strategies",
      responses: 47,
      tasks: 22,
    },
    {
      title: "How to Handle Inventory",
      responses: 23,
      tasks: 15,
    },
    {
      title: "Inventory Management Tips",
      responses: 56,
      tasks: 30,
    },
    {
      title: "Managing Your Stock Effectively",
      responses: 89,
      tasks: 5,
    },
    {
      title: "Optimizing Your Inventory",
      responses: 35,
      tasks: 18,
    },
    {
      title: "Stock Management Techniques",
      responses: 42,
      tasks: 12,
    },
  ];

  return (
    <div className="border border-[#EBEBEB] rounded-xl w-[100%] md:w-[50%]">
      <div className="p-[12px]">
        <div className="flex justify-between items-center mb-[4px]">
          <h2 className="text-sm font-semibold text-primary">WorkFlows</h2>

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
        <div className="p-[16px] grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="bg-white p-[12px] rounded-lg hover:shadow border border-[#EBEBEB] hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-medium text-primary">
                    {workflow.title}
                  </h3>{" "}
                  <img
                    src="/assets/icons/eye.svg"
                    alt="eye"
                    className="min-h-[20px] min-w-[20px]"
                  />
                </div>
                <div className="flex justify-between mt-[8px]">
                  <span className="text-xs text-[#979797]">
                    Responses {' '}<span className="text-primary">{workflow.responses}
                    </span> 
                  </span>
                  <span className="text-xs text-[#979797]">
                    Tasks {' '}<span className="text-primary">{workflow.tasks}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
