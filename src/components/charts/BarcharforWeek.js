import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import moment from "moment"



const BarChartForWeek = ({setWaterConsumption}) => {


    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
    const getChartData = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/building/weekly", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("api BarChartForWeek", data);
            setData(data.data?.values)
            setDatatime(data.data?.x_axis_start);

            console.log("apidata BarChartForWeek", data.data?.values);


        } catch (e) {
            console.log("muqeem BarChartForWeek", e);
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

    // time convert and map
    const timesofday = (datatime) => {
        return moment(datatime).format('dddd')
    }


    var series = [
        {
            name: "series-1",
            data: data
        }
    ]

    var options = {
        chart: {
            // id: "basic-bar"
            background: '#494950',
            foreColor: '#fff'
        },
        xaxis: {
            categories: datatime
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        dataLables: {
            enabled: false
        },
        title: {
            text: 'Weekly Data',
            margin: 20,
            style: {
                fontSize: '15px'
            }
        }
    }


    return (
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="100%"
                            height="100%"

                        />
                      
                    
    );

}

export default BarChartForWeek;
