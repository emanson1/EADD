import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  heading:
  {
    color:(theme.palette.type==="light")?'white':'black',
    backgroundColor:(theme.palette.type==="light")?'blue':'light-blue',
    textAlign:'center',
  },
  
  grid: 
  {
    width:'100%',
    height:'100%',
    //border: '2px dashed blue',
    borderRadius: '25px'
  }}
  ));

export default function NavBar (props) {
  const classes=useStyles();
const {instrument,openModal, rej, sel,setRej,setSel, instruments, setInstruments, background}=props;
    return(
    
      <Grid className={classes.heading} container direction="row" alignItems="center">
        <Grid xs={4} item><a href="\Installations" className='linkClassPlain'>Installations</a></Grid>
        <Grid xs={4} item><a href="\" className='linkClassPlain'>Inspections</a></Grid>
        <Grid xs={4} item><a onClick={()=>openModal({open:true, modalType:'Swiped',instruments:instruments, setInstruments:setInstruments, instrument:instrument, background:background, setRej:setRej, setSel:setSel, rej:rej, sel:sel})} className='linkClassPlain'>Swiped</a></Grid>
      </Grid>
    
    )
  }