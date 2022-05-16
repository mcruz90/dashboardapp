import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { Typography } from '@mui/material';

const DeadlinesFeed = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper', paddingLeft: 3 }}>
        <Typography variant="body">Upcoming Deadlines </Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LibraryBooksIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Training Manual" secondary="May 30, 2022" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InventoryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Inventory" secondary="Jun 30, 2022" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PointOfSaleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Auto-order functions" secondary="Jul 24 2022" />
          </ListItem>
        </List>
      );
    }

export default DeadlinesFeed