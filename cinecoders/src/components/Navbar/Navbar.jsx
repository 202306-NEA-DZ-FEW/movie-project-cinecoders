import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

import BasicMenu from '../Dropdown/Neww';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
        <Button
       variant="text"
       color="inherit"
       sx={{
       display: { xs: 'none', sm: 'block' },
       backgroundColor: '#001f3f', }}
       style={{ color: 'red', fontStyle: 'italic' }}
         > 
        CineCoders
      </Button>
      <div>
      <Dropdown>
    <MenuButton>MOVIES</MenuButton>
    <Menu>
      <MenuItem>Latest</MenuItem>
      <MenuItem>Up coming</MenuItem>
      <MenuItem>OLD</MenuItem>
    </Menu>
  </Dropdown></div>
      
          
          <Button
        variant="text"
        color="inherit"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        
      >
        Movies
      </Button>
     
      <Button
        variant="text"
        color="inherit"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        
      >
        Genres
      </Button>
      
      <Button
        variant="text"
        color="inherit"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Actors
      </Button>
      <Button
        variant="text"
        color="inherit"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        About
      </Button>
   
   
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          
        </Toolbar>
       
      </AppBar>
       
    </Box>
  );
}