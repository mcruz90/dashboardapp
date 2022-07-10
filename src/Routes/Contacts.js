import * as React from 'react';
import {Box, Typography} from '@mui/material'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import ContactList from '../components/contactList';
import { Button } from "@mui/material";
import { Link} from "react-router-dom";


const Contacts = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h4" sx={{paddingBottom: 2}}>Contacts</Typography>
      
      <TableContainer elevation={0} component={Paper}>

        <ContactList />
        
    </TableContainer>
    <div align="right" style={{marginTop: '15px'}}> 
        <Button variant="contained" disableElevation component={Link} to={'/createcontact'}>Add Contact</Button>
      </div>
    </Box>
  )
}

export default Contacts