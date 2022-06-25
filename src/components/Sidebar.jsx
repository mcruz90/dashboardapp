import {Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText,Divider, Switch} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import TabOutlinedIcon from '@mui/icons-material/TabOutlined';
import React from 'react'
import {Link} from 'react-router-dom'
 

function createData(icon, name, link) {
  return { icon, name, link};
}

const rows = [
  createData(<DashboardOutlinedIcon />, 'Dashboard', '/'),
  createData(<InboxIcon />, 'Messages', 'Messages'),
  createData(<TaskOutlinedIcon />, 'Tasks/Projects', 'Tasks'),
  createData(<CalendarMonthIcon />, 'Schedule', 'Schedule'),
  createData(<TabOutlinedIcon />, 'Resources', 'Resources'),
  createData(<ContactsOutlinedIcon />, 'Contacts', 'Contacts'),
  createData(<SettingsIcon />, 'Settings', 'Settings'),
];

const Sidebar = () => {
  return (
    <Box flex={1} padding={2} sx={{display: {xs: "none", sm: "block"}}}>
      <List>
      {rows.map((row) => (
             <ListItem disablePadding>
             <ListItemButton key={row.icon} sx={{
         "&.Mui-selected": {
           backgroundColor: "#0093E9",
           color: '#fff',
         },
         "&.Mui-focusVisible": {
           backgroundColor: "#0093E9",
           color: '#fff',
         },
         ":hover": {
           backgroundColor: "#d5f0ff",
           color: '#fff !important',
         }
       }}>
               <ListItemIcon>
               {row.icon}
               </ListItemIcon>
               <Link style={{ textDecoration: 'none', color: '#676b6e'}} to={row.link}><ListItemText primary={row.name} /></Link>
             </ListItemButton>
           </ListItem>

              
          ))}

        </List>

        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>

    </Box>
  )
}

export default Sidebar