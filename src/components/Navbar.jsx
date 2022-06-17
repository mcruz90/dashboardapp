import React from 'react'
import {AppBar, Badge, Avatar, Menu,MenuItem,styled, Toolbar, Typography, InputBase} from '@mui/material'
import CribIcon from '@mui/icons-material/Crib';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useState} from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  
});

const SearchBar = styled("div") (({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"

}));

const MenuIcons = styled("div") (({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: 20
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>MERCH DASHBOARD</Typography>
        <CribIcon sx={{display: {xs: "block", sm: "none"}}} />
      
        
        <SearchBar><InputBase placeholder='Search'/></SearchBar>
        <MenuIcons>
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{width: 30, height: 30}} onClick={e=>setOpen(true)} />
        </MenuIcons>

        
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Services</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>My Account</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar