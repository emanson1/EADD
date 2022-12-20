import React, { useState } from 'react'
import logo from './logo.svg';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Paper, Grid} from '@material-ui/core';
import TinderCard from 'react-tinder-card';
import TabPanel from '../src/Pages/Dashboard';
import DataLayer from '../src/Pages/DataLayer';
import Instruments from '../src/Pages/Instruments';
import Settings from '../src/Pages/Settings';
import Dashboard from '../src/Pages/Dashboard';
import NavBar from '../src/Pages/NavBar';
import {View} from 'react-native';
const tabs = {
  'instrument': Instruments,
  'settings':  Settings,
  'dashboard': Dashboard
}



function App() {
  const [selectedTab, setSelectedTab] = useState('instrument');

  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <div>
    <Router>
    <Route exact path='/' component={tabs[selectedTab]}/>
    </Router>
    <NavBar setSelectedTab={setSelectedTab}/>
    </div>
      </View>
        
    )
}

export default App;
