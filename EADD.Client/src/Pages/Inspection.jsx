import { Grid, Button } from '@material-ui/core';
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
    fontSize: 20
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#def2ff',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  itemClass: {
    backgroundColor: 'white',
    width: '100%'

  },
  heading:
  {
    color: (theme.palette.type === "light") ? 'white' : 'black',
    backgroundColor: (theme.palette.type === "light") ? 'blue' : 'light-blue',
    textAlign: 'center',
  },
  grid:
  {
    minHeight: 550,
    minWidth: 800,
    margin: 5,
    padding: 5,
    border: '2px solid blue',
    //borderRadius: '25px'
  }
}
));



const Inspection = props => {
  const [inspection, setInspection] = useState({});
  const [insp, setInsp] = useState({});
  const [shrink, setShrink] = useState(false);
  const [inspId, setInspId] = useState(props.match.params.id);
  const [readOnly, setReadOnly] = useState(true);
  const classes = useStyles();
  const inspectionNew =
  {
    id: -1,
    name: '',
    date: '',
    address: '',
    state: '',
    zip: '',
    phone: '',
    tech: '',
    model: '',
    serial: '',
    notes: ''
  };
  useEffect(() => {
  if (props.match.params.id !== '-1') {
    setInspection({
      id: props.match.params.id,
      name: "MORRIS NITA                        ",
      date: "37987",
      address: "7727    4461 82ND AVE              ",
      state: "FL",
      zip: "33781",
      phone: "544-2058      ",
      tech: "JIM           ",
      model: "NCH5530VKD1  ",
      serial: "L991836853    ",
      notes: "INSP A/C HT.NRML OP."
    });
  }
  else {
    setInspection(inspectionNew);
    setReadOnly(false);
  }
  setShrink(true);
}, []);
return (
  <Box component="div" className={classes.grid}>
    <Formik
      enableReinitialize
      initialValues={inspection}
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
            <Grid container>
              <Grid xs={2}>
                <a Href="/"><Button>
                  Back
                </Button>
                </a>
              </Grid>
              <Grid xs={8}>
                <Typography variant="h5">
                  {values.name}
                </Typography>
              </Grid>
              <Grid xs={2}>
                <Button onClick={() => setReadOnly(!readOnly)}>
                  {(readOnly === true) ? 'Update' : 'View'}
                </Button>
              </Grid>
            </Grid>
            <Grid container class={classes.itemClass}>
              <Grid xs={4}>
                <Field disabled={readOnly} name="name" label="name" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              <Grid xs={4}>
                <Field disabled={readOnly} name="date" label="date" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              <Grid xs={4}>
                <Field disabled={readOnly} name="address" label="address" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              <Grid xs={4}>
                <Field disabled={readOnly} name="zip" label="zip" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              <Grid xs={4}>
                <Field disabled={readOnly} name="phone" label="phone" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              <Grid xs={4}>
                <Field disabled={readOnly} name="tech" label="tech" component={TextField} margin="dense" variant="outlined" InputLabelProps={{ shrink: shrink, style: { color: 'black' }, }} fullWidth />
              </Grid>
              {!readOnly && <Grid xs={4}>
                <Button>Save Inspection Record</Button>
              </Grid>}
            </Grid>
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
    inspection: state.insspection,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInspection: (id) => dispatch(fetchInspection(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Inspection);


