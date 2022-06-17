import * as React from 'react';
import Typography from '@mui/material/Typography';
import {List} from '@mui/material';
import { Link } from "react-router-dom";
import RecordList from './recordList'

export default function RecentlyCompleted() {
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginBotton: '10px', marginRight: '10px' }}>
      <Typography sx={{ marginLeft: '15px', marginTop: '10px' }}>Recent Messages</Typography>
      
      <p style={{paddingLeft: 15, paddingRight: 20}}>
        <RecordList />
        </p>
      <p style={{paddingLeft: 40}}>
        <Link to='/create'>Create Message</Link>
      </p>
     
    </List>
  );
}
