import {Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText,Divider, Switch} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ContactsIcon from '@mui/icons-material/Contacts';
import NoteIcon from '@mui/icons-material/Note';
import React from 'react'
import {Link} from 'react-router-dom'
 
/* TODO: Refactor List with mapping to follow DRY  */

const Sidebar = () => {
  return (
    <Box flex={1} padding={2} sx={{display: {xs: "none", sm: "block"}}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A'}} to="/"><ListItemText primary="Dashboard" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Messages"><ListItemText primary="Messages" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Tasks"><ListItemText primary="Tasks/Projects" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Schedule"><ListItemText primary="Schedule" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Resources"><ListItemText primary="Resources" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Contacts"><ListItemText primary="Contacts" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none', color: '#55585A' }} to="Settings"><ListItemText primary="Settings" /></Link>
            </ListItemButton>
          </ListItem>
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