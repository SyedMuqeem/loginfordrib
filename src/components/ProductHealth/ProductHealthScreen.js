
import React, { useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import BreadCrumsForProductHealth from '../breadcrums/BreadCrumsForProductHealth'
import CardsForHealth from '../Cards/CardsForHealth';

const ProductHealthScreen = () => {
    const [macAddress, setMacAddress] = useState("99dd7c334fc4")
    
    return (
        <div className="waterManagment">
            <BreadCrumsForProductHealth />
            <div className="dropdownForHealth mb-4">
                <DropdownButton id="dropdown-item-button" variant="outline-info" title={macAddress} >
                    <Dropdown.Item as="button" onClick={() => {setMacAddress("99dd7c334fc4")}}>99dd7c334fc4</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => {setMacAddress("48b37612cfa4")}}>48b37612cfa4</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => {setMacAddress("6ddf7c334fc4")}}>6ddf7c334fc4</Dropdown.Item>
                </DropdownButton>
            </div>
            <CardsForHealth macAddress={macAddress}/>

        </div>
    )
}

export default ProductHealthScreen;
