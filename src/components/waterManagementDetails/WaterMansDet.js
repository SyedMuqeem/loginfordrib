import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import BreadCrumbsForApp from '../breadcrums/BreadCrumbsForApp'
import CardForWaterMansDet from '../Cards/CardForWaterMansDet'
import BarChartForWeek from '../charts/BarcharforWeek'
import BarChart1 from '../charts/BarChart1'
import BarChartForDailyData from '../charts/BarChartForDailyData'
import BarChartForMonth from '../charts/BarChartForMonth'
import ChartForWeeklyCompar from '../charts/ChartForWeeklyCompar'
import DataTableForDay from '../dataTables/DataTableForDay'
import DataTableForMonth from '../dataTables/DataTableForMonth'
import DataTableForWeek from '../dataTables/DataTableForWeek'
import Footer from '../Footer/Footer'
import ToggleForWaterManag from './ToggleForWaterManag'

const WaterMansDet = () => {
    const [dispGraph, setDispGraph] = useState("day")
    const [chartTable, setChartTable] = useState(true)
    const [waterConsumption, setWaterConsumption] = useState("")
    var num = waterConsumption * 0.08;
    var n = num.toFixed(2);
    return (
        <div className="waterManagment">
            
            <BreadCrumbsForApp />
            
            <CardForWaterMansDet/>

            <div className="barGraph1inWater">
                <BarChart1 />
            </div>
            <div className="barGraph1inWater mt-4 p-5">
                <ChartForWeeklyCompar />
            </div>
            <div className="barwaterflexmain mt-4">


                {chartTable ? (
                    dispGraph === "day" ? (
                        <div className="barwaterflex p-5" ><BarChartForDailyData setWaterConsumption={setWaterConsumption} /></div>
                    ) : (
                            dispGraph === "week" ? (
                                <div className="barwaterflex p-5" ><BarChartForWeek setWaterConsumption={setWaterConsumption} /></div>
                            ) : (
                                    <div className="barwaterflex p-5" ><BarChartForMonth setWaterConsumption={setWaterConsumption} /></div>
                                )

                        )
                ) : (
                        dispGraph === "day" ? (
                            <div className="barwaterflex p-5 " ><DataTableForDay setWaterConsumption={setWaterConsumption} /></div>
                        ) : (
                                dispGraph === "week" ? (
                                    <div className="barwaterflex p-5" ><DataTableForWeek setWaterConsumption={setWaterConsumption} /></div>
                                ) : (
                                        <div className="barwaterflex p-5" ><DataTableForMonth setWaterConsumption={setWaterConsumption} /></div>
                                    )

                            )
                    )

                }

                {/* <div className="barwaterflex p-5" >
                    <DataTableForDay/>
                    <DataTableForWeek/>
                    <DataTableForMonth />
                </div> */}






                <div className="barwaterflex1 ">
                    <div className="cardWaterMan"><h3>WATER MANAGEMENT</h3></div>
                    <div className="cardWaterManbutton mt-4">
                        <button className="cardWaterManbutton1" style={dispGraph === "day" ? ({ backgroundColor: '#f0bd32' }) : (null)} onClick={() => { setDispGraph("day") }}>Day</button>
                        <button className="cardWaterManbutton1 ml-5 mr-5" style={dispGraph === "week" ? ({ backgroundColor: '#f0bd32' }) : (null)} onClick={() => { setDispGraph("week") }}>Week</button>
                        <button className="cardWaterManbutton1" style={dispGraph === "month" ? ({ backgroundColor: '#f0bd32' }) : (null)} onClick={() => { setDispGraph("month") }}>Month</button>
                    </div>
                    <div className="cardWaterManRupees">
                        INR {n} <br />
                        <span>TOTAL WATER CONSUPTION:<br /><b> {waterConsumption} Liters </b></span>
                    </div>
                    <div className="cardWaterManfooter mt-3">
                        <div className="cardWaterManFooter1">Chart</div>
                        <div className="  toggleInWater  " onClick={() => { setChartTable(!chartTable) }}><ToggleForWaterManag /></div>
                        <div className="cardWaterManFooter1">Table</div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WaterMansDet;
