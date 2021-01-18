import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import Footer from '../Footer/Footer';

const YearCalender = () => {


    const [data, setData] = useState([])
    const getYearData = async () => {
        try {
            const data = await axios.put(
                "https://api.perisync.com/admin/history/year", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("api getYearData", data.data);
            setData(data.data)


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getYearData() }, [])

    const mapdata = (data,index) => {
        return (
            <div className="monthsInYearCompo">
                <div className="monthsCal" style={{ fontSize: "20px" }}>{data.month}</div>
                <div className="monthlydata"><Button variant="success" >{data.consumption}</Button></div>
            </div>
        )
    }

    return (
        <div className="yearCalender">
            <h1>YEARLY CALENDER</h1>
            <div className="calenderCompo">
                <div className="calenderYear"><h4>YEAR-2021</h4></div>
                <div className="yearcompo">

                   
                    {data.map(mapdata)}


                </div>
            </div>
                        <Footer/>
        </div>
    )
}

export default YearCalender;
