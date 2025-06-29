import React from "react";
import Cards from "../components/dashboard/Cards";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import WorkAllocated from "../components/dashboard/WorkAllocated";
import EmployeeProgress from "../components/dashboard/EmployeeProgress";
import PersonalNotepad from "../components/dashboard/PersonalNotepad";
import OverDueTask from "../components/dashboard/OverDueTask";
import WorkFlow from "../components/dashboard/WorkFlow";

const Dashboard = () => {
  return (
    <div className="p-[24px]">
      <DashboardHeader />
      <Cards />
      <WorkAllocated />
      <EmployeeProgress />
      <div className="pt-[24px] flex flex-col md:flex-row gap-[24px]">
        <PersonalNotepad />
        <div>graph</div>
      </div> <div className="pt-[24px] flex flex-col md:flex-row gap-[24px]">
        <OverDueTask />
        <WorkFlow />
      </div>
    </div>
  );
};

export default Dashboard;
