
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ReactSession from 'react-client-session/dist/ReactSession';
import BreadCrumsForProductHealth from '../breadcrums/BreadCrumsForProductHealth'
import CardsForHealth from '../Cards/CardsForHealth';
import DataTableForDevicelist from '../dataTables/DataTableForDevicelist';
import Footer from '../Footer/Footer';
import ChargingStats from './ChargingStats';
import DeviceDetails from './DeviceDetails';
import DeviceList from './DeviceList';
import PowerLogStats from './PowerLogStats';

const ProductHealthScreen = () => {

    const [deviceList, setDeviceList] = useState([])
    const [macAddress, setMacAddress] = useState(null)
    const getDeviceList = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/device/list", {
                    "token": ReactSession.get("token"),
                    "userid": ReactSession.get("userid")
            }
            );
            console.log("ProductHealthScreen", data.data?.devices);
            setDeviceList(data.data?.devices)
            setMacAddress(data.data?.devices[0])
           } catch (e) {
            console.log("error ProductHealthScreen", e);
        }

    }

    useEffect(() => { getDeviceList() }, [])
   console.log(deviceList[0]);
    const dropDownDevices = (deviceList,index) => {
        return(
            <Dropdown.Item as="button" onClick={() => {setMacAddress(deviceList)}}>{deviceList}</Dropdown.Item>
        )
    }

    return (
      <div className="waterManagment">
        <BreadCrumsForProductHealth />
        <div className="dropdownForHealth mb-4">
            <DropdownButton id="dropdown-item-button" variant="outline-info" title={macAddress} >
                {/* <Dropdown.Item as="button" onClick={() => { setMacAddress("208699962bc8") }}>208699962bc8</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { setMacAddress("99dd7c334fc4") }}>99dd7c334fc4</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { setMacAddress("48b37612cfa4") }}>48b37612cfa4</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { setMacAddress("6ddf7c334fc4") }}>6ddf7c334fc4</Dropdown.Item> */}
                {deviceList.map(dropDownDevices)}
            </DropdownButton>
        </div>
        <CardsForHealth macAddress={macAddress} />
        <div className="devicelistsRow mt-3">
            <div className="devicelist">
                <DataTableForDevicelist macAddress={macAddress} />
            </div>
            <DeviceDetails macAddress={macAddress} />
        </div>
        <div className="statsRow">
            <ChargingStats macAddress={macAddress}/>
            <PowerLogStats macAddress={macAddress} />

        </div>
         <Footer/>
    </div>
        
        
    )
}

export default ProductHealthScreen;
