import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';
import  moment  from "moment";
import { ImPower } from 'react-icons/im';

const ChargingStats = ({macAddress}) => {
    const [data, setData] = useState([])
    const getDeviceDetails = async () => {
        
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/device/powerStats", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "macaddress":macAddress
            }
            );
            console.log(" ChargingStats in ", data.data);
            setData(data.data)

            // console.log("apidata BarChartForWeek", data);


        } catch (e) {
            console.log("Error ChargingStats", e);
        }

    }
    useEffect(() => { getDeviceDetails() }, [macAddress])



    return (
        <div className="charging">
                    <div style={{fontSize:'25px'}}>POWER STATUS</div>
                    <div style={{fontSize:'50px', color:"white"}}>{data.batteryStat}</div>
                    <div className="chargingCircle"><ImPower/></div>
                    <div style={{fontSize:'40px', color:"rgb(190, 189, 189)"}}>{data.powerMode}</div>
                    <div className="mb-3" style={{fontSize:'25px'}}>{moment(data.lastPowerSwitch).format('Do-MMM-YYYY, h:mm a')}</div>
        </div>
    )
}

export default ChargingStats;
