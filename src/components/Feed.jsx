import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import TaskCard from './TaskCard'
import RecentlyCompleted from './RecentlyCompleted'
import InfoCard from './InfoCard'

const Feed = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Hello you!</Typography>
      <Typography variant="subtitle">Welcome back! Here is your day at a glance</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TaskCard />
        </Grid>
        <Grid item xs={6}>
          <RecentlyCompleted />
        </Grid>
        <Grid item xs={12} md={12}>
          <InfoCard />
        </Grid>
      </Grid>
      
      
    </Box>
  )
}

export default Feed