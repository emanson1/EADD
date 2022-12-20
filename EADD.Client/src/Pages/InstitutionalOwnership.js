import {Grid, Box} from '@material-ui/core';
export default function InstitutionalOwnership (props) {
const {instrument}=props;
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Description</Grid>
        </Grid>
        <Box>{instrument.Deacription}</Box>
     </div>
    
     
    )
  };