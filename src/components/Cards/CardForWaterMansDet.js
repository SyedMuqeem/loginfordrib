import React from 'react'
import moment from "moment";
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaServer,FaCalendarAlt } from 'react-icons/fa';

const CardForWaterMansDet = () => {
    return (
        <div className="allcards">
            <div className="card1 cardbg1">
                <div className="card1top">
                    <div className="card1left">0.08 Paise/Liter<br />Estimated Bill</div>
                    <div className="card1right"><BsFileEarmarkText/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg2">
                <div className="card1top">
                    <div className="card1left">82695.5<br />Current Month</div>
                    <div className="card1right"><FaServer/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg3">
                <div className="card1top">
                    <div className="card1left">82695.5<br />Last Month</div>
                    <div className="card1right"><FaServer/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
            <div className="card1 cardbg4">
                <div className="card1top">
                    <div className="card1left">{moment(new Date()).format("Do MMM YY")}<br />Billing Cycle</div>
                    <div className="card1right"><FaCalendarAlt/></div>
                </div>
                <div className="card1bottom"></div>
            </div>
        </div>
    )
}

export default CardForWaterMansDet;
