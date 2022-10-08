import React from 'react';
import {Box, Typography} from '@mui/material';

function GeneratedMeme(props) {

  return (
<Box sx={{pt:15}}>
<Box>
<img sx={{pt:1}} width="50" src={props.image1}></img>
<Typography>{props.cont1}</Typography>
<img sx={{pt:1}} width="50" src={props.image2}></img>
<Typography>{props.cont2}</Typography>
</Box>
</Box>
  )
}

export default GeneratedMeme