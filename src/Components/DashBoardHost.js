import React from 'react'
import DashBoard from './DashBoard'
import { Outlet } from 'react-router-dom'

const DashBoardHost = () => {
    return (<>
        <DashBoard />
        <Outlet />
    </>
    )
}

export default DashBoardHost