
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import theme from './theme';
//import Installs from './Pages/Installs';
import Inspections from './Pages/Inspections.jsx';
import NavBar from './Pages/NavBar';
import {View} from 'react-native';
import {Switch as Toggle} from '@mui/material';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainpage:
  {
    border:(theme.palette.type==="light")?'1px solid white':'1px solid black',
  }
}));

const tabs = {
  //'installs': Installs,
  'inspections': Inspections,

}



function App(props) {
  const classes=useStyles();
  const [selectedTab, setSelectedTab] = useState('inspections');
  const [themeStyle, setThemeStyle] = useState('light');
  const toggleTheme = () => {
    if (themeStyle === 'light') {
    setThemeStyle('dark');
    } else {
    setThemeStyle('light');
    }
    };
    useEffect(() => {
      document.body.className = themeStyle;
      }, [themeStyle]);
      
  return (
    <ThemeProvider theme={theme}>
    <div className={`App ${themeStyle}`}>
      classes={JSON.stringify(classes)}
    <Toggle onClick={toggleTheme}/>Toggle Theme
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <div>
    <Router>
      <Switch>
      <Route exact path='/' component ={Inspections} />
      <Route path='/Inspection/:id' component={Inspections} />
     </Switch>
    </Router>  
   
    <NavBar setSelectedTab={setSelectedTab}/>
    </div>
       </View>
        </div>
        </ThemeProvider>
    )
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
