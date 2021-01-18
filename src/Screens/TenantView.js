import React from 'react'
import { ReactSession } from 'react-client-session';
import BreadCrumbsforYearCalender from '../components/breadcrums/BreadCrumbsforYearCalender';
import MonthCalender from '../components/TenantView/MonthCalender';
import Sidenav from '../components/Sidenav';

const TenantView = () => {
    return (
        <>
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <div className="waterManagment">
                <BreadCrumbsforYearCalender />
                <MonthCalender/>
            </div>
        </>
        )
}

export default TenantView;
