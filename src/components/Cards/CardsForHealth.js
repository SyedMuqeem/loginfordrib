import React, { useEffect, useState } from 'react'
import moment from "moment";
import { WiEarthquake } from 'react-icons/wi';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaTemperatureHigh,FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

const CardsForHealth = ({macAddress}) => {


    const [cardDetails, setCardDetails] = useState("")
    console.log(macAddress);
    const getCardtData = async () => {
        
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/productInfo/cards", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "macaddress":macAddress
            }
            );
            console.log("api CardsForHealth", data.data);
            setCardDetails(data.data)

            // console.log("apidata BarChartForWeek", data);


        } catch (e) {
            console.log("Error CardsForHealth", e);
        }

    }
    useEffect(() => { getCardtData() }, [macAddress])



    return (
        <div className="allcards">
            <div className="card1 cardbg1">
                <div className="card1top">
                    <div className="card1left"><h2><b>{cardDetails.currentlyPowered}</b></h2><br />Currently Powered</div>
                    <div className="card1right" style={{fontSize:"100px"}}><WiEarthquake/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg2">
                <div className="card1top">
                    <div className="card1left"><h5><b>{moment(cardDetails.lastCommunicated).format('MMMM Do YYYY, h:mm:ss a')}</b></h5><br />Last Communicated</div>
                    <div className="card1right"style={{fontSize:"80px"}}><FaCalendarAlt/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg3">
                <div className="card1top">
                    <div className="card1left"><h2><b>{cardDetails.signalQuality}</b></h2><br />Signal Quality</div>
                    <div className="card1right" style={{fontSize:"80px"}}><AiOutlineWifi/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg4">
                <div className="card1top">
                    <div className="card1left"><h2><b>{cardDetails.tempHumidity}</b></h2><br />Temperature Humidity</div>
                    <div className="card1right" style={{fontSize:"80px"}}><FaTemperatureHigh/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
        </div>
    )
}

export default CardsForHealth;
