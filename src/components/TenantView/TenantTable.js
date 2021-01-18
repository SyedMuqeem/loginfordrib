import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

const TenantTable = () => {
    const [data, setData] = useState([])
    const getTenantTable = async () => {
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
    useEffect(() => { getTenantTable() }, [])

    const renderData = (players, index) => {
        return (
            <tr key={index}>
                <td>{players.tenantID}</td>
                <td>{players.jan}</td>
                <td>{players.feb}</td>
                <td>{players.mar}</td>
                <td>{players.apr}</td>
                <td>{players.may}</td>
                <td>{players.jun}</td>
                <td>{players.jul}</td>
                <td>{players.aug}</td>
                <td>{players.sep}</td>
                <td>{players.oct}</td>
                <td>{players.nov}</td>
                <td>{players.dec}</td>
            </tr>
        )
    }
    return (
        <div >
            <Table bordered hover variant="dark" responsive>
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
                    {data.map(renderData)}

                </tbody>
            </Table>


        </div>
    )
}

export default TenantTable;
