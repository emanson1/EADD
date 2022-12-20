import {Grid, Box} from '@material-ui/core';
export default function NetMargin (props) {
const {instrument}=props;
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Net Margin</Grid>
        </Grid>
        <Box>{instrument.NetMargin}</Box>
     </div>
    
     
    )
  };