import React from 'react'
import {Box} from '@mui/material'
import Calendar from './Calendar'
import DeadlinesFeed from './DeadlinesFeed'

const Rightbar = () => {
  return (
    <Box flex={1} padding={1} sx={{display: {xs: "none", sm: "block"}}}>
      <Calendar />
      <DeadlinesFeed />
    </Box>
  )
}

export default Rightbar