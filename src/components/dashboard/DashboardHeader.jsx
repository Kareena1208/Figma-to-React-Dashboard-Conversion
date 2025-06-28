import React from "react";

const DashboardHeader = () => {
  return (
    <div className="pb-[24px] flex justify-between items-center">
      <div className="font-semibold text-lg text-primary">
        Good Evening ! Ajay
      </div>
      <div className="border border-[#EBEBEB] font-medium text-xs rounded-lg px-[14px] py-[6px] flex gap-[4px]">
        <img
          src="../assets/images/dashboard.svg"
          className="h-[16px] w-[16px] "
          alt="dashboard"
        />
        Add Widget
      </div>
    </div>
  );
};

export default DashboardHeader;
