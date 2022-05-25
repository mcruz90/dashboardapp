import React from 'react'
import {Box, Typography} from '@mui/material'



const Resources = () => {

  
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Resources</Typography>
      <Typography variant="subtitle">Quick add</Typography>
    
    <Box><Typography variant="body">Sections
      <li>Delivery procedures and troubleshooting (Atripco, ATS, Purolator) </li>
      <li>Cash/Till Procedures (Daily Reports)</li>
      <li>Positec Reporting Procedures (requested by managers; Comp. stockings; AR listing)</li>
      <li>OTC Procedures</li>
      <li>Compression Stockings</li>
      <li>Month-end procedures</li>
      <li>Inventory management / Inventory Day</li>
      <li>Ordering supplies (boxes, special vnedors)</li>
      <li>ODSP procurement procedures</li>
    </Typography></Box>
      
    </Box>
  )
}

export default Resources