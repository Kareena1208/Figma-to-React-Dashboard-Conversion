import React from 'react'
import Cards from '../components/dashboard/Cards'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import WorkAllocated from '../components/dashboard/WorkAllocated'
import EmployeeProgress from '../components/dashboard/EmployeeProgress'

const Dashboard = () => {
  return (
    <div className="p-[24px]">
      <DashboardHeader />
      <Cards />
      <WorkAllocated />
      <EmployeeProgress />
    </div>
  )
}

export default Dashboard
