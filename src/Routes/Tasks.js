import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import TaskDetails from '../components/TaskDetails'
import TaskInProgress from '../components/TaskInProgress'
import TaskCompleted from '../components/TaskCompleted'

const Tasks = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Tasks</Typography>
      <Typography variant="subtitle">Welcome back! Here is your day at a glance</Typography>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={1} sm={1} md={4}>
            <TaskDetails />
          </Grid>
          <Grid item xs={1}  sm={1}  md={4}>
            <TaskInProgress />
          </Grid>
          <Grid item xs={1}  sm={1} md={4}>
            <TaskCompleted />
          </Grid>

       
      </Grid>

    </Box>
  )
}

export default Tasks