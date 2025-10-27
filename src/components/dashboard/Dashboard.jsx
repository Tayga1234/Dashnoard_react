import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'

function Dashboard() {
  return (
    <div className='space-y-6'>
        {/*State Grid */}
        <StatsGrid />

        {/*Graphique*/}
        <ChartSection/>

    </div>
  )
}

export default Dashboard