import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {showModal, hideModal} from '../actions/EADDActions';
import Marquee from 'react-double-marquee';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Background from '../Images/MtnBackGround.jpg';
import PeatPLogo from '../Images/PeatPLogo.png';
import HelpIcon from '@mui/icons-material/Help';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { ReactComponent as StairsIcon } from '../Images/stairs_1.svg';
const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
 iconSize:{
  transform: 'scale(5.8)',
  
  
 },
 iconSizeMedium:{
  transform: 'scale(2.1)',
  paddingBottom: 10
  
 },
 iconStairs:{
  transform: 'scale(0.8)',
  color:'white'
  
 },
 alignBottom:{
  display:'table-cell',
  verticalAlign:'middle',
  textAlign:'center',
  border:'1px dotted #888',
  
 },
  root: {
    width: '100%',
  },
  linkOffset:{
    paddingTop:20,
    
  },
  boxBlue:{
  backgroundColor:'#145493',
  paddingTop:30,
  paddingBottom:30,
  color:'#FFFFFF',
  textAlign:'center',
  fontSize:24,
  paddingLeft:30,
  paddingRight:30,
  height:81,
  width:121

  },
  marginTopBottom30:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  linkClass:{
    fontSize:20,
    textAlign:'center'
  },
  headingClass:{
    backgroundColor:'white'
  },
 logoClass:
 {
  paddingTop:10,
  display: 'flex',
  justifyContent: 'center',
  textAlign:'center',   
  paddingBottom:10,
},
placeStairs: {
  verticalAlign:'top',
  position:'relative',
  top:-20,
},
copyWhite:{
fontSize:20,
color:'white',
//fontWeight:'bold'

},
h2:{
  paddingTop:30,
  textAlign:'left',
  color: '#145493',
  fontSize:20,
},
  panorama:{
    backgroundImage: `url(${Background})`
  
  },
  headingLarge:{
    paddingTop:30,
    paddingBottom:30,
    fontSize:55,
    color:'white',
    fontWeight:'bold'
  },
  headingMedium:{
   
    fontSize:45,
    fontWeight:'bold'
  },
  contactBox:{
    paddingTop:10,
    backgroundColor: '#ffcc00',
    color: '#145493',
    height:141,
    width:141,
    fontSize:30,
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center',   
    fontWeight:'bold'
  },
  darkBlueBackgroundLayer:
  {
    backgroundColor:'#145493',
    color:'white'

  },
  whiteBackgroundLayer:
  {
    backgroundColor:'white',
    color:'#145493'

  },
  li:
  {
    fontSize:19
  }
}));
const InstrumentWrapper = props => {
  const {handleClose, handleOpen, rej, sel, instruments, setInstruments,setRej,setSel,setIsLoggedIn} = props;
  const classes = useStyles();
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  const [yahooData, setYahooData] = useState();
  //const {finTechURL} = Constants;
  
  let metric = {};
  let series = {};
  
    

  useEffect(() => {
 //   setInstrumentState();
  }, []); // <-- Have to pass in [] here!

  // const handleClick = () => {
  //   setValue(-1);
  // };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);

  //   event.stopPropagation();
  // };
  var openModal = (modalProps)=>{
    props.showModal(modalProps);
 }
  return (
    <div>
      <Grid container className={classes.headingClass}>
      <Grid item xs={3}>
      <div className={classes.logoClass}><img src={PeatPLogo}/></div></Grid>
      <Grid item xs={6}>
      <Grid container className={classes.linkOffset}>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Installs</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Inspections</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Labor</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Contract</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Cust Info</a></Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} ><h2 className={classes.h2}> Because most of your wealth is tied to your business, you need answers</h2></Grid>
      </Grid>
      
      </Grid>  
      <Grid item xs={3}><div className={classes.marginTopBottom30}><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}><Box className={classes.contactBox}>Call Michael</Box></a></div>
      </Grid>
      </Grid>
      <Grid container className={classes.panorama}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLoggedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container>
        <Grid item xs={9}>
          <div className={classes.headingLarge}>Do you feel ready to transition out of your business?</div>
          </Grid>
          <Grid item xs={3}>
          <div className={classes.marginTopBottom30}><div className={classes.boxBlue}>Take the Readiness Assement</div></div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={6}>
          <div><div  className={classes.headingMedium}  style={{textAlign:'center'}}>The Facts...</div><br/><div style={{textAlign:'center'}}><PaidIcon className={classes.iconSizeMedium}/></div><div className={classes.copyWhite} style={{textAlign:'center'}}>80 to 90% of business owner wealth is tied to their business</div></div>
          </Grid>
          <Grid item xs={6}>
          <div><div className={classes.headingMedium}>&nbsp;</div><br/><div style={{textAlign:'center'}}><AccessTimeFilledIcon className={classes.iconSizeMedium}/></div><div className={classes.copyWhite} style={{textAlign:'center'}}>48% of Boomer Business Owners plan to transition in the next 5 years</div></div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
        <br/><br/><br/><div className={classes.headingMedium}><BusinessCenterIcon className={classes.iconSize}/></div>
          </Grid>
        
        <Grid item xs={10}>
        <br/><div><div className={classes.headingMedium}>The Tough Truth...</div>
          <div>
          <ul>
          <li className={classes.li}>99% of business owners agreed with this statement: "Having a transition strategy is important both for my future and for the future of my business."</li>
          <li className={classes.li}>About 50% have no plan at all​</li>
          <li className={classes.li}>About 80% of business owners have no formal transition plan</li>
          </ul>
          </div>
          </div>
          </Grid>
          
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
        <br/><br/><div className={classes.headingMedium}>
          <AccountBoxIcon className={classes.iconSize}/>
          </div>
          </Grid>
        
        <Grid item xs={10}>
          <div><div className={classes.headingMedium}>The Realty...</div>
          <div>
          <ul>
          <li className={classes.li}>Baby Boomers own 65% of the private businesses in the U.S.</li>
          <li className={classes.li}>About 4,500,000 businesses will transition​</li>
          <li className={classes.li}>Only 30% of family-owned businesses survive into the second generation</li>
          <li className={classes.li}>80% of businesses below $50 million put on the market do not sell (Tom West)</li>
          </ul>
          </div>
          </div>
          </Grid>
          
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <br/><br/><div className={classes.headingMedium}>
          <HelpIcon className={classes.iconSize}/>
          </div>
          </Grid>
        
        <Grid item xs={10}>
          <div><div className={classes.headingMedium}>Questions...</div>
          <div>
          <ul>
          <li className={classes.li}>What is my Business Worth?</li>
          <li className={classes.li}>What different options do I have?​</li>
          <li className={classes.li}>How can I start this process</li>
          </ul>
          </div>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <div></div>
          </Grid>
        
        <Grid item xs={10}>
          <div>
          <i>All data above is from Exit Planning Institute unless otherwise stated.</i>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={6}>
          <div><div  className={classes.headingMedium}><br/>The Process...</div><div className={classes.placeStairs}><div><br/><br/>
            <StairsIcon className={classes.iconStairs}  fill='white' stroke='#50aaf5'/></div></div></div>
          </Grid>
          <Grid item xs={6}>
          <div>
            <div className={classes.headingMedium}>&nbsp;</div><br/><div className={classes.copyWhite}>
            <ol>
              <li className={classes.li}>Take the Readiness Assessment</li>
              <li className={classes.li}>Exit/Transition Plan Development</li>
              <li className={classes.li}>Exit/Transition Plan Implementation</li>
              </ol>
            </div>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6} className={classes.copyWhite} style={{textAlign:'center'}}>
        <i>Email*: I will neither share nor sell your email address.</i>     
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <div><hr/>
        <span style={{fontSize:24,fontWeight:'bold'}}>HOW TO GET STARTED</span>
        <hr/>
        <br/>
        If you own a business or have questions about transitioning out of your business:
              or Take the Owner Readiness Assessment and then we will talk
              Michael Philipp, CEPA, CVA, BCA | Philipp Exit Planning, LLC

        </div>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
    </div>
  );
}




const mapStateToProps = (state) => ({
  modalProps: state.EADD.modalProps
});

const mapDispatchToProps = (dispatch) => ({
    showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
    hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(InstrumentWrapper);