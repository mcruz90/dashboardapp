import React from 'react'
import {Box, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';


const Input = styled('input')({
  display: 'none',
});


const Messages = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Messages</Typography>
      <Typography variant="subtitle">Read and write notes to staff</Typography>
    
      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginRight: '10px' }}>
      
      <Typography sx={{ marginLeft: '15px', marginTop: '10px' }}>Tasks</Typography>
      {["eat", "work", "sleep"].map((value) => {
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
      
    </List>

    <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '15px', marginTop: '10px', marginRight: '10px' }}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '95%' },
      }}
      noValidate
      autoComplete="off">
      <TextField
          fullWidth label="Add a message" id="fullWidth" 
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
        />
      </Box>

      <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
    
    </List>
    </Box>
  )
}

export default Messages