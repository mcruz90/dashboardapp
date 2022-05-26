import * as React from 'react';
import Typography from '@mui/material/Typography';
import {List} from '@mui/material';
import { Link } from "react-router-dom";

export default function RecentlyCompleted() {
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginBotton: '10px', marginRight: '10px' }}>
      <Typography sx={{ marginLeft: '15px', marginTop: '10px' }}>Recently Completed</Typography>
      
      <Link to='/create'>Create Message</Link>
      
     
    </List>
  );
}
