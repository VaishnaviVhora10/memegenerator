import React from 'react';
import {AppBar,Typography} from '@mui/material';

function Header() {
  return (
    <AppBar positon='static'>
    <Typography varient="h1" color='text.Primary'>Memes Generator</Typography>
    </AppBar>
  )
}

export default Header