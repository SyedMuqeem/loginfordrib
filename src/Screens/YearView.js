import React from 'react'
import { ReactSession } from 'react-client-session'
import BreadCrumbsforYearCalender from '../components/breadcrums/BreadCrumbsforYearCalender'
import YearCalender from '../components/CalenderAll/YearCalender'
import Sidenav from '../components/Sidenav'

const YearView = () => {
    return (
        <>
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <div className="waterManagment">
                <BreadCrumbsforYearCalender />
                <YearCalender/>
            </div>
        </>
    )
}

export default YearView
