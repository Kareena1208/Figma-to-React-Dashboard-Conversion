import React from 'react'
import Cards from '../components/dashboard/Cards'
import DashboardHeader from '../components/dashboard/DashboardHeader'

const Dashboard = () => {
  return (
    <div className="p-[24px]">
      <DashboardHeader />
      <Cards />
    </div>
  )
}

export default Dashboard
