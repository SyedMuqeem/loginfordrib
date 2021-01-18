import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import TenantTable from './TenantTable';
import TenantTableFor2020 from './TenantTableFor2020';


const MonthCalender = () => {

    const[year, setYear] =useState(true)
    

useEffect(() => {console.log(year);}, [year])

    return (
        <div className="yearCalender">
            <h1>CALENDER HISTORY</h1>
            <div className="calenderCompo">
                <div className="calenderYear mb-3" >
                    { year ?  <Button variant="danger"  onClick={() => (setYear(false))}><BsChevronDoubleLeft />2020</Button>
                     : <Button variant="danger" disabled onClick={() => (setYear(false))}><BsChevronDoubleLeft />2020</Button>  }

                    { year ?  <Button variant="success"  disabled onClick={() => (setYear(true))}>2021<BsChevronDoubleRight /></Button>
                     : <Button variant="success" onClick={() => (setYear(true))}>2021<BsChevronDoubleRight /></Button>  }
                </div>
                {year ? (<><TenantTable /></>) : (<TenantTableFor2020 />)}
                
            </div>
            <Footer />
        </div>
    )
}

export default MonthCalender;
