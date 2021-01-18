import axios from "axios";
import React, { useEffect, useState } from "react";



import { Table } from 'react-bootstrap';



import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import { ReactSession } from "react-client-session"



const MonthViews = ({ userid, token }) => {
    const [data, setData] = useState([])
    const getMonthTable = async () => {
        try {
            const data = await axios.put(
                "https://api.perisync.com/admin/history/tenants", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "year": "2021"
            }
            );
            console.log("api getHistoryTenants", data.data);
            setData(data.data)


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getMonthTable() }, [])




    const renderPlayer = (data, index) => {
        return (
            <tr key={index}>
                <td>{data.tenantID}</td>
                <td>{data.jan}</td>
                <td>{data.feb}</td>
                <td>{data.mar}</td>
                <td>{data.apr}</td>
                <td>{data.may}</td>
                <td>{data.jun}</td>
                <td>{data.jul}</td>
                <td>{data.aug}</td>
                <td>{data.sep}</td>
                <td>{data.oct}</td>
                <td>{data.nov}</td>
                <td>{data.dec}</td>
            </tr>
        )
    }



    return (



        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>TENANT ID</th>
                        <th>JAN</th>
                        <th>FEB</th>
                        <th>MAR</th>
                        <th>APR</th>
                        <th>MAY</th>
                        <th>JUN</th>
                        <th>JUL</th>
                        <th>AUG</th>
                        <th>SEP</th>
                        <th>OCT</th>
                        <th>NOV</th>
                        <th>DEC</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderPlayer)}

                </tbody>
            </Table>


        </div>











    )
}

export default MonthViews;