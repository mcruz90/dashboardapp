import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {Divider, Typography} from '@mui/material';

export default function TaskCard() {
  const [checked, setChecked] = React.useState([0]);

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
    <List sx={{ width: '100%', maxWidth: 420, bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginBotton: '10px', marginRight: '10px' }}>
      
      <Typography sx={{ marginLeft: '15px', marginTop: '10px' }}>Tasks</Typography>
      {["open all", "count all", "work all", "go home"].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Task ${value}`} secondary={`subtitle for ${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
      
      <Divider variant="middle" />
      
      <ListItemText primary={<Typography align="center" type="body" style={{ color: '#000000', paddingTop: 3 }}>View all</Typography>} />
    </List>
    
  );
}
