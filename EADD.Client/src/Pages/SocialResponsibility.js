import {Grid, Box} from '@material-ui/core';
export default function SocialResponsibility (props) {
const {instrument}=props;
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Social Responsibility</Grid>
        </Grid>
        <Box>{instrument.SocialResponsibility}</Box>
     </div>
    
     
    )
  };