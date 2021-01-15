
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge,Button } from 'react-bootstrap';
import { ReactSession } from 'react-client-session';
import moment from 'moment';

const DeviceDetails = ({macAddress}) => {
    const [data, setData] = useState([])
    const getDeviceDetails = async () => {
        
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/productInfo/details", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "macaddress":macAddress
            }
            );
            console.log("api DeviceDetails", data.data);
            setData(data.data)

            // console.log("apidata BarChartForWeek", data);


        } catch (e) {
            console.log("Error CardsForHealth", e);
        }

    }
    useEffect(() => { getDeviceDetails() }, [macAddress])



    return (
        <div className="deviceDetails">
            <div className="deviceDetailsHeader"><h4>DEVICE DETAILS</h4></div>
            <div className="deviceDetailsRow">
                <div>MAC ADDRESS</div>
                <Button variant="danger" disabled>{data.macAddress}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>IMEI</div>
                <Button variant="success" disabled>{data.imei}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>IMSI</div>
                <Button variant="danger" disabled>{data.imsi}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Signal Quality</div>
                <Button variant="warning" disabled>{data.signalQuality}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Location</div>
                <Button variant="primary" disabled>{data.location}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Communication Mode</div>
                <Button variant="secondary" disabled>{data.communicationMode}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Last Communicated </div>
                <Button variant="success" disabled>{moment(data.lastCommunicated).format('MMM Do YYYY, h:mm a')}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Running On</div>
                <Button variant="info" disabled>{data.runningOn}</Button>
            </div>
            <div className="deviceDetailsRow">
                <div>Product State</div>
                <Button variant="primary" disabled>{data.productState}</Button>
            </div>
        </div>
    )
}

export default DeviceDetails;
