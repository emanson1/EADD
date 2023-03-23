import {Grid} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { TextField } from 'formik-material-ui'
import HelpIcon from '@material-ui/icons/Help';
import { Formik, Field } from 'formik';
import { fetchInspection } from '../actions/eaddactions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  headerCell: {
    backgroundColor: '#def2ff',
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#def2ff',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  heading:
  {
    color:(theme.palette.type==="light")?'white':'black',
    backgroundColor:(theme.palette.type==="light")?'blue':'light-blue',
    textAlign:'center',
  },
  grid: 
  {
    minHeight: 550,
    minWidth: 800,
    margin: 5,
    padding:5,
    border: '2px solid blue',
    //borderRadius: '25px'
  }}
  ));



const Inspection = props => {
  
  const [insp, setInsp] = useState({});
  const [shrink, setShrink] = useState(false);
  const [inspId,setInspId]=useState(props.match.params.id);
  const classes=useStyles();
  useEffect(() => {
    // Update the document title using the browser API
     let _insp={id:props.match.params.id, name:"MORRIS NITA                        ", date:"37987", address:"7727    4461 82ND AVE              ", state:"FL", zip:"33781",phone:"544-2058      ", tech:"JIM           ",model:"NCH5530VKD1  ",serial:"L991836853    ",notes:"'INSP A/C HT.NRML OP.'"};
     setInsp(_insp);
     setShrink(true);
  },[]);
  return(
    <Box component="div" className={classes.grid}>
    <Formik
    enableReinitialize
      //initialValues={insp}}
      initialValues={insp}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        enableReinitialize,
        /* and other goodies */
      }) => (
    <div>
      {/* Here<br/><br/>{JSON.stringify(insp)} */}
    <form onSubmit={handleSubmit}>
    <Grid container className={classes.heading}>
    <Grid xs={12}><Typography className={classes.heading} variant="h3">Inspection</Typography></Grid>
    </Grid>
    <Grid container className={classes.heading}>
    <Grid xs={4}>
    <Box component="span" className={classes.inputClass}>Name</Box>
    <Field name="name" label="name" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
    </Grid>
    <Grid xs={4}>
    <Box component="span" className={classes.inputClass}>Date</Box>
    <Field name="date" label="date" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
     </Grid>
     <Grid xs={4}>
      <Box component="span" className={classes.inputClass}>Address</Box>
     <Field name="address" label="address" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
     </Grid>
     <Grid xs={4}>
     <Box component="span" className={classes.inputClass}>Zip</Box>
     <Field name="zip" label="zip" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
     </Grid>
     <Grid xs={4}>
     <Box component="span" className={classes.inputClass}>Address</Box>
     <Field name="phone" label="phone" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
     </Grid>
     <Grid xs={4}>
     <Box component="span" className={classes.inputClass}>Tech</Box>
     <Field name="tech" label="tech" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink }} fullWidth/>
  </Grid></Grid>  
       </form>
        </div>
      )}
    </Formik>
    </Box>  
    )
  };
  
const mapStateToProps = (state) => {
  return {
       loading: state.itemLoading,
       inspection: state.insspection,  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInspection: (id) => dispatch(fetchInspection(id)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Inspection);


