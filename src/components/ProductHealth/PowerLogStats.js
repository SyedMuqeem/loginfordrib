import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';
import moment from 'moment';

const PowerLogStats = (macAddress) => {
    const [data, setData] = useState([])
    const getDeviceDetails = async () => {

        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/device/powerLogs", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "macaddress": macAddress
            }
            );
            console.log(" PowerLogStats ", data.data);
            setData(data.data)

            // console.log("apidata BarChartForWeek", data);


        } catch (e) {
            console.log("Error PowerLogStats", e);
        }

    }
    useEffect(() => { getDeviceDetails() }, [macAddress])

    const detailsOfLogs = (data, index) => {
        return (
            <div>
                <hr />
                <div className="powerlogStatDetails">
                    <div className="powerlogDetailsrow1">{index+1}</div>
                    <div className="powerlogDetailsrow2">{data.powerMode}</div>
                    <div className="powerlogDetailsrow3">{data.duration}</div>
                    <div className="powerlogDetailsrow4">{moment(data.started).format('D MMM YYYY, h:mm a')}</div>
                    <div className="powerlogDetailsrow5">{moment(data.stopped).format('D MMM  YYYY, h:mm a')}</div>

                </div>
            </div>
        )
    }

    return (
        <div className="powerLog">
            <div style={{ fontSize: "30px" }}>POWER LOG</div>
            <div>
                <hr />
                <div className="powerlogStatDetails">
                    <div className="powerlogDetailsrow1">#</div>
                    <div className="powerlogDetailsrow2">Power Mode</div>
                    <div className="powerlogDetailsrow3">Duration</div>
                    <div className="powerlogDetailsrow4">Started</div>
                    <div className="powerlogDetailsrow5">Stopped</div>

                </div>
            </div>
            {data.map(detailsOfLogs)}

        </div>

    )
}

export default PowerLogStats;
