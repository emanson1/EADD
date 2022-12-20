import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function InstrumentWrapper(props) {
  const classes = useStyles();
  
  const initialMetrics = [{ descr: '52 Week Low/High', metric1: { name: '52WeekLow', className: 'red' }, metric2: { name: '52WeekHigh', className: 'red' } }, { descr: 'BVPS Annual/Qrtly', metric1: { name: 'bookValuePerShareAnnual', className: 'conditional' }, metric2: { name: 'bookValuePerShareQuarterly', className: 'conditional' } }];
  const { instrument } = props;
  //const classes = useStyles();
  const [metrics, setMetrics] = useState({});
  const [selectedMetrics, setSelectedMetrics] = useState(initialMetrics);
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  //const {finTechURL} = Constants;
  const finTechApiKey = "c18kb1f48v6oak5hbkl0";
  const finTechURL = "https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token=" + finTechApiKey;
  let metric = {};
  let series = {};
  React.useEffect(() => {
    fetch(finTechURL.toString().replace('{symbol}', instrument.Symbol))
      .then(results => results.json())
      .then(data => {
        setData(data);
        setMetrics(data.metric);
      });
  }, []); // <-- Have to pass in [] here!

  const handleClick = () => {
    setValue(-1);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} className='cardTitle'>{`${instrument.Title} (${instrument.Symbol})`}</Grid>
      </Grid>
      <div className='imageDiv' style={{
      backgroundImage: `url(${instrument.Icon})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <Accordion className='transparent'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          {
        selectedMetrics.map((metric, index) => {
          return (
            // <div>{JSON.stringify(metric)}</div>
            <React.Fragment><Grid key={index} direction="row" container className='borderBottom'>
              <Grid item xs={4} className={metric.metric1.className !== 'conditional' ? metric.metric1.className : metrics[metric.metric1.name] < 0 ? "red" : "black"}> {metrics[metric.metric1.name]}</Grid>
              <Grid item xs={4}>{metric.descr}</Grid>
              <Grid item xs={4} className={metric.metric2.className !== 'conditional' ? metric.metric2.className : metrics[metric.metric2.name] < 0 ? "red" : "black"}>{metrics[metric.metric2.name]}</Grid>
            </Grid>
          <br/>
            </React.Fragment>
          
          )
        })}

        </AccordionDetails>

      </Accordion>
      </div>
  </React.Fragment>
      
    
  );
}
