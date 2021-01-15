import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';
import DataTable, { createTheme } from 'react-data-table-component';
import * as RiIcons from "react-icons/ri";
import moment from "moment"

const DataTableForDevicelist = ({macAddress}) => {


    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
    const getDeviceListtemp = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/productInfo/TH", {
                    "token": ReactSession.get("token"),
                    "userid": ReactSession.get("userid"),
                    "macaddress":macAddress
            }
            );
            console.log("DataTableForDevicelist", data.data);
            setData(data.data)
            // setDatatime(data.data?.x_axis_start);

            // console.log("apidata DataTableForDevicelist", data.data?.values);
           


        } catch (e) {
            console.log("error DataTableForDevicelist", e);
        }

    }
    useEffect(() => { getDeviceListtemp() }, [macAddress])

   


    createTheme('solarized', {
        text: {
            primary: '#dae5ec',
            secondary: '#2aa198',
        },
        background: {
            default: '#494950',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    });



    const sortIcon = <RiIcons.RiArrowDownSFill />;
    const columns = [
        {
            name: 'Humidity',
            selector: 'humidity',
            sortable: true,
        },
        {
            name: 'Temperature',
            selector: 'temperature',
            sortable: false,
        },
        {
            name: 'Time',
            selector: 'timestamp',
            sortable: false,
            // format: (row) => {moment(row.timestamp).format('MMM Do YYYY, h:mm:ss a')} 
            // allowOverflow:true
        },
    ];


    
   
    


    return (
        <>
            <DataTable
                title="DEVICE LIST"
                theme="solarized"
                columns={columns}
                // data={data2}
                data={data}
                striped={false}
                sortIcon={sortIcon}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                overflowYOffset={true}
                pagination={true}
                fixedHeader={true}
            />
        </>
    )
}

export default DataTableForDevicelist
