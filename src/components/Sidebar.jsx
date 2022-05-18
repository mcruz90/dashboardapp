import {Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText,Divider, Switch} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import React from 'react'
import {Link} from 'react-router-dom'

/* TODO: Refactor list with mapping to follow DRY  */

const Sidebar = () => {
  return (
    <Box flex={1} padding={2} sx={{display: {xs: "none", sm: "block"}}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <Link to="/"><ListItemText primary="Dashboard" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link to="Messages"><ListItemText primary="Messages" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <Link to="Tasks"><ListItemText primary="Tasks/Projects" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <Link to="Schedule"><ListItemText primary="Schedule" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <Link to="Announcements"><ListItemText primary="Announcements" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Link to="Settings"><ListItemText primary="Settings" /></Link>
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