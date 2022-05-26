import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import TaskCard from './TaskCard'
import RecentlyCompleted from './RecentlyCompleted'

const Feed = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Welcome!</Typography>
      <Typography variant="subtitle">Welcome to your dashboard! Here is your day at a glance</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TaskCard />
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={12} md={12}>
          <RecentlyCompleted />
        </Grid>
      </Grid>
      
      
    </Box>
  )
}

export default Feed