
import React, { useState, useEffect } from 'react'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import theme from './theme';
import '@inovua/reactdatagrid-community/index.css';
import Inspections from './Pages/Inspections.jsx';
import Installations from './Pages/Installations.jsx';
import Inspection from './Pages/Inspection.jsx';
import Installation from './Pages/Installation.jsx';
import NavBar from './Pages/NavBar';
import { View } from 'react-native';
import { Switch as Toggle } from '@mui/material';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Navigation from './Pages/Navigation.jsx';
const useStyles = makeStyles((theme) => ({
  mainpage:
  {
    border: (theme.palette.type === "light") ? '1px solid white' : '1px solid black',
  },
  headerCell: {
    backgroundColor: '#def2ff',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  heading:
  {
    color: (theme.palette.type === "light") ? 'white' : 'black',
    backgroundColor: (theme.palette.type === "light") ? 'blue' : 'light-blue',
    textAlign: 'center',
  },
  grid:
  {
    width: '100%',
    height: '100%',
    justifyContent: 'left',
    borderRadius: '25px'
  }
}
));



function App(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [gridType, setGridType] = useState("");
  const [locationPath, setLocationPath] = useState("");
  const [themeStyle, setThemeStyle] = useState('light');
  const toggleTheme = () => {
    if (themeStyle === 'light') {
      setThemeStyle('dark');
    } else {
      setThemeStyle('light');
    }
  };
  useEffect(() => {
    if (window.location.href.toUpperCase().indexOf("INSTALLATION") > 0) {
      setGridType("Installations");
      setLocationPath("/installation/-1")
    }
    if (window.location.href.toUpperCase().indexOf("LABOR") > 0) {
      setGridType("Labor");
      setLocationPath("/LaborRecord/-1");
    }
    if ((window.location.href.toUpperCase().indexOf("INSTALLATION") < 1) && (window.location.href.toUpperCase().indexOf("LABOR") < 1)) {
      setGridType("Inspections");
      setLocationPath("/Inspection/-1");
    }
    document.body.className = themeStyle;
  }, [themeStyle]);

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${themeStyle}`}>
        <Toggle onClick={toggleTheme} />Toggle Theme

        <View >
          <div>
            <Box component="div" className={classes.grid}>
              <Grid container className={classes.heading}>
                <Grid xs={12}>
                  <Grid container>
                    <Grid xs={2}>
                      <Button className={classes.heading} onClick={() => setOpen(!open)}>
                        <Typography className={classes.heading} variant="h4">
                          <FontAwesomeIcon icon={faList} />
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid xs={8}>
                      <Typography className={classes.heading} variant="h3">
                        {gridType}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <a Href={locationPath}><Button className={classes.heading}>
                        <Typography className={classes.heading} variant="h4">
                          <FontAwesomeIcon icon={faPlus} />
                        </Typography>
                      </Button></a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* <div> style={{overflowX:'scroll',overflowY:'scroll'}}> */}
              <Router>
                <Switch>
                  <Route exact path='/' component={Inspections} />
                  <Route exact path='/installations' component={Installations} />
                  <Route path='/inspection/:id' component={Inspection} />
                  <Route path='/installation/:id' component={Installation} />
                </Switch>
              </Router>
              <Navigation open={open} setOpen={setOpen} rightOpen={rightOpen} setRightOpen={setRightOpen} />
            </Box>
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
