import {Grid} from '@material-ui/core';
export default function NavBar ({setSelectedTab}) {

    return(
    
      <Grid className='cardLinksBottom' container direction="row" justify="center" alignItems="center">
        <Grid xs={4} item onClick={() => setSelectedTab('instrument')}>Instrument</Grid>
        <Grid xs={4} item onClick={() => setSelectedTab('settings')}>Settings</Grid>
        <Grid xs={4} item onClick={() => setSelectedTab('dashboard')}>Dashboard</Grid>
      </Grid>
    
    )
  }