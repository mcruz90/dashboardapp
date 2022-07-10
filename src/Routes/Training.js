import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import List from '@mui/material/List';
import TrainingQuiz from '../components/quiz/TrainingQuiz';


const Messages = () => {

 return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Training</Typography>
      <Typography variant="subtitle">Read and write notes to staff</Typography>
    
      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginRight: '50px', paddingLeft: '20px', paddingTop: '15px' }}>
      
      <Typography variant="h6"></Typography>
      
      <Button sx={{ height: '200px', width: '200px', m: 3}}variant="outlined">
        Delivery Destinations
        </Button>

        <Button sx={{ height: '200px', width: '200px', m: 3}}variant="outlined">
        Delivery Waybills
        </Button>

        <Button sx={{height: '200px', width: '200px', m: 3}}variant="outlined">
        Positec Cash Transactions
        </Button>

        <Button sx={{height: '200px', width: '200px', m: 3}}variant="outlined">
        Positec Reporting
        </Button>

        <Button sx={{height: '200px', width: '200px', m: 3}} disabled variant="outlined">
        Kroll
        </Button>

      
    </List>
    </Box>
  )
}

export default Messages