import React, { useState } from 'react';
import { SwipeableDrawer, Button, Typography } from '@material-ui/core';
const Navigation = (props) => {
  const {open, setOpen, rightOpen, setRightOpen}=props;
    const left =
        <ul>
            <li><a href="/Installations"><Typography variant="h4">Installations</Typography></a></li>
            <li><a href="/"><Typography variant="h4">Inspections</Typography></a></li>
            <li><a href="/Labor"><Typography variant="h4">Labor</Typography></a></li>
            <li><a href="/About"><Typography variant="h4">About</Typography></a></li>
        </ul>

const right =
<ul>
    <li><a href="/Print"><Typography variant="h4">Print</Typography></a></li>
    <li><a href="/Email"><Typography variant="h4">Email</Typography></a></li>
    <li><a href="/LogOut"><Typography variant="h4">LogOut</Typography></a></li>
</ul>
return (
    <React.Fragment>
    <React.Fragment key={'left'}>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >{left}
            </SwipeableDrawer>
        </React.Fragment>
        <React.Fragment key={'right'}>
            <SwipeableDrawer
                anchor={'right'}
                open={rightOpen}
                onClose={() => setRightOpen(false)}
                onOpen={() => setRightOpen(true)}
            >{right}
            </SwipeableDrawer>
        </React.Fragment>
    </React.Fragment>
);
};
export default Navigation;