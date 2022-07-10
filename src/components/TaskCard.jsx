import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {Box, Button, Typography} from '@mui/material';

export default function TaskCard() {
  const [checked, setChecked] = React.useState([0]);

  const taskList = [
    "Deliveries",
    "order boxes"
  ]
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{ mt: 1, height: 230, width: '100%', bgcolor: 'background.paper', borderRadius: '10px' }}>
      
      <Typography variant="h6" sx={{ marginLeft: '20px', paddingTop: '20px'}}>Tasks</Typography>
      {taskList.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{paddingLeft: 3}}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={<Typography variant="body2">{value}</Typography>} secondary={<Typography variant="body1">subtitle for {value}</Typography>} />
            </ListItemButton>
          </ListItem>
        );
      })}
        
      <div align="right" style={{paddingRight: 20, paddingBottom: '20px'}}><Button variant="contained" disableElevation type="submit">View All</Button> </div>
    </Box>
    
  );
}
