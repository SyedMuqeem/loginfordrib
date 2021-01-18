import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadCrumbsforYearCalender = () => {
    return (
        <div className="breadbgclr">
            <Breadcrumb >
                <BreadcrumbItem><a href="#">History</a></BreadcrumbItem>
                <BreadcrumbItem active>Yearly</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbsforYearCalender;
