import * as React from 'react';
import Typography from '@mui/material/Typography';
import {List} from '@mui/material';
import { Link} from "react-router-dom";
import RecordList from './recordList'
import Button from '@mui/material/Button'

export default function RecentMessages() {
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginBotton: '10px', marginRight: '10px' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: '30px', marginTop: '20px' }}>Recent Messages</Typography>
      
      <p style={{paddingLeft: 15, paddingRight: 20}}>
        
        <RecordList />
        </p>
      <div align="right" style={{paddingTop: 10, paddingRight: 40, paddingBottom: 20 }}>
      <Button variant="contained" disableElevation component={Link} to={'/create'}>Create Message</Button>
      </div>
    </List>
  );
}
