import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';
import DataTable, { createTheme } from 'react-data-table-component';
import * as RiIcons from "react-icons/ri";
import moment from "moment"

const DataTableForMonth = ({setWaterConsumption}) => {


    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
    const getChartData = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/building/monthly", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("api DataTableForMonth", data.data);
            setData(data.data?.values)
            setDatatime(data.data?.x_axis_start);

            console.log("apidata DataTableForMonth", data.data?.values);
            // console.log(data.map(addition));


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getChartData() }, [])
    var element=0;
    useEffect(() => {
        console.log("apidatastates", data);
        for (let i = 0; i < data.length; i++) {
            element = element + data[i];
        }
        console.log("addition",element);
        setWaterConsumption(element)
    }, [data])


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
            name: 'SlNo.',
            selector: 'Slno',
            sortable: true
        },
        {
            name: 'values in Liters',
            selector: 'values',
            sortable: true,
        },
        {
            name: 'Month',
            selector: 'Month',
            sortable: true,
        },
    ];


    
    const data1 = (data, index) => {
        return {
            "Slno": index + 1,
            "values": data,
            "Month": `${datatime[index] === "1"? ("Jan"):("Feb")}`
            // "Month": datatime[index]

        }
           
    }
    


    return (
        <>
            <DataTable
                title="MONTHLY DATA"
                theme="solarized"
                columns={columns}
                // data={data2}
                data={data.map(data1)}
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

export default DataTableForMonth;
