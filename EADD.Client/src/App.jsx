import React, { useState, useEffect } from 'react'

import {Route, BrowserRouter as Router} from 'react-router-dom';
// import '../src/App.css';
import Inspection from './Pages/Inspection';
import Installs from './Pages/Installs';
import Inspections from './Pages/Inspections';
import theme from './theme';
import LoggedIn from './Pages/LoggedIn';
import NavBar from './Pages/NavBar';
import {View} from 'react-native';
import ModalRoot from './Shared/ModalRoot';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {Switch as Toggle} from '@mui/material';
import { hideModal } from './actions/eaddActions';



function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const useStylesLight = makeStyles((lightTheme) => ({
  paper: {
    //position: 'absolute',
    //width: 400,
    backgroundColor: "black",
    border: `'2px solid ${theme.palette.primary}'`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const useStylesDark = makeStyles((darkTheme) => ({
  paper: {
    //position: 'absolute',
    //width: 400,
    backgroundColor: "white",
    border: `'2px solid ${theme.palette.primary}'`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App(props) {
  const modalProps=props.modalProps;
  const modalType=modalProps.modalType;
  
  const colorMode = React.useContext(ColorModeContext);

  const open=modalProps.open;
  const [selectedTab, setSelectedTab] = useState('instrument');
  const classes = useStylesDark();
  const [modalStyle] = React.useState(getModalStyle);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [themeStyle, setThemeStyle] = useState('light');
  const theme = useTheme();
    useEffect(() => {
      document.body.className = themeStyle;
      }, [themeStyle]);
const switchTheme = ()
      return (
    <ThemeProvider theme={theme}>
      classes={JSON.stringify(classes)}
      body={document.body.className}
      palette={JSON.stringify(theme.palette.mode)}
      
    <Toggle onClick={}/>Toggle Theme 
  
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
    <React.Fragment>
      <div className={classes.paper}>
      <Router>
        <Route exact path='/' render={(props) => (<Inspections themeStyle={theme} {...props} />)}/>
        <Route path='/Inspection/:id' component={Inspection} />
      </Router>
    
       {modalType!==undefined && modalType!==null && <ModalRoot handleClose={hideModal} open={open}/> }
       </div>
       </React.Fragment>
       {/* </View> */}
        </ThemeProvider>
 
       )
}
const mapStateToProps = (state) => ({
  modalProps: state.eadd.modalProps,
  modalType: state.eadd.modalType
});
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
