import {Grid, Box} from '@material-ui/core';
export default function MarketCapacity (props) {
const {instrument}=props;
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Market Capacity</Grid>
        </Grid>
        <Box>{instrument.MarketCapacity}</Box>
     </div>
    
     
    )
  };