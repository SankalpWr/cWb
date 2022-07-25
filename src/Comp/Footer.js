import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
export default function Footer() {
  return (
    <Grid
    container
    style={{
    
     
      minWidth: "77vw",
    }}
    item
    xs={12}
  >
    <Grid item xs={9}>
      <Typography style={{ paddingLeft: "10px", color: "#FFFFFFA6",fontSize:"12px" }}>
       Viewing 1-6 of 21
      </Typography>
    </Grid>
    <Grid style={{ color: "#FFFFFFA6" ,fontSize:"12px"}} item xs={3}>
      © Copyright 2018 HighRadius. All Rights Reserved.
    </Grid>
  </Grid>
  
    )
}
