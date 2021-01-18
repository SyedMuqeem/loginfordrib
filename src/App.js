import React from 'react'
import Axios from 'axios'
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
} from "react-router-dom";
import './App.css';
import Login from './Screens/Login';
import MainDashboard from './Screens/MainDashboard';
import Daycalender from './components/Daycalender';
// redux
import { connect } from 'react-redux'
import Sidenav from './components/Sidenav';
import DataTables from './components/DataTables';
import Profile from './Screens/Profile';
import Apexchart from './Screens/Apexchart';
import ApexChart2 from './Screens/ApexChart2';
import ConnectMqtt from './components/mqtt/ConnectMqtt';
import ApexChart3 from './Screens/ApexChart3';
import WaterManagementDetail from './Screens/WaterManagementDetail';
import ProductHealth from './Screens/ProductHealth';
import  YearView  from './Screens/YearView';
import TenantView from './Screens/TenantView';
// 



function App(props) {
// react-client-session

      return (
            <div className="App">
                  <Router>      
                        <Switch>
                              <Route exact path="/">
                                    <Login />
                              </Route>
                              <Route exact path="/history/monthView">
                                    <MainDashboard />
                              </Route>
                              <Route exact path="/buildingDetails">
                                    <Daycalender />
                              </Route>
                              <Route exact path="/buildingAdmin/billGenerator">
                                    <DataTables/>
                              </Route>
                              <Route exact path="/profile">
                                    <Profile/>
                              </Route>
                              <Route exact path="/userSpecific">
                                    <Apexchart/>
                              </Route>
                              <Route exact path="/buildingAdmin/invoices">
                                    <ApexChart2/>
                              </Route>
                              <Route exact path="/tankerStats">
                                    <ConnectMqtt/>
                              </Route>
                              <Route exact path="/buildingAdmin/productSettings">
                                    <ApexChart3/>
                              </Route>
                              <Route exact path="/buildingSpecific">
                                    <WaterManagementDetail/>
                              </Route>
                              <Route exact path="/productInfo">
                                    <ProductHealth/>
                              </Route>
                              
                              <Route exact path="/history/yearView">
                                    <YearView/>
                              </Route>
                              <Route exact path="/history/tenantView">
                                    <TenantView/>
                              </Route>

                        

                        </Switch>
                        
                  </Router>
                  {/* redux */}
                  {/* <div>name:{props.myname}</div> */}
            </div>
      );
}

export default App;
