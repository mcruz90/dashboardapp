import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import TaskCard from './TaskCard'
import InfoCard from './InfoCard'
import RecentMessages from './RecentMessages'

const Feed = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h4">Welcome!</Typography>
      <Typography variant="subtitle">Welcome to your dashboard! Here is your day at a glance</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        
        <Grid item xs={12} md={5}>
            <TaskCard />
          </Grid>
          <Grid item xs={12} md={7}>
            <InfoCard />
          </Grid>

        <Grid item xs={12} md={12}>
            <RecentMessages />
          </Grid>
       
      </Grid>
      
      
    </Box>
  )
}

export default Feed