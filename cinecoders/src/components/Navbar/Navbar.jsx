import React, { useState, useEffect } from 'react';
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
import Link from 'next/link';
import { fetchGenres } from '@/util/api';
import Mode from '../mode';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#001f3f',
  boxShadow: 'none',
}));

const StyledToolbar = styled(Toolbar)({
  padding: 0,
});

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

export default function Navbar({ onSearchChange }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres when the component mounts
    fetchGenres().then((data) => {
      setGenres(data);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '7rem' }}>
      <StyledAppBar>
        <StyledToolbar>
          <Button
            href="/"
            variant="text"
            color="inherit"
            sx={{
              display: { xs: 'none', sm: 'block' },
              backgroundColor: '#001f3f',
            }}
            style={{ fontSize: '20px', textDecoration: 'none', color: "#6082B6", fontStyle: 'italic', marginRight: '4rem' }}
          >
            CineCoders
          </Button>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3rem' }}>
            <Dropdown>
              <MenuButton
                variant="text"
                sx={{ display: { xs: 'none', sm: 'block', color: 'white' } }}
              >
                MOVIES
              </MenuButton>
              <Menu>
                <MenuItem>
                  <Link href="/movies/toprate" style={{ textDecoration: 'none' }}>
                    Top Rate
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/movies/popular" style={{ textDecoration: 'none' }}>
                    Popular
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/movies/nowplaying" style={{ textDecoration: 'none' }}>
                    Now playing
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/movies/upcoming" style={{ textDecoration: 'none' }}>
                    Upcoming
                  </Link>
                </MenuItem>
              </Menu>
            </Dropdown>

            <Dropdown>
              <MenuButton
                variant="text"
                sx={{ display: { xs: 'none', sm: 'block' }, color: 'white' }}
              >
                GENRES
              </MenuButton>
              <Menu>
                {genres.map((genre) => (
                  <MenuItem
                    key={genre.id}
                    onClick={() => window.location.href = `/genres/${genre.id}`}
                  >
                    {genre.name}
                  </MenuItem>
                ))}
              </Menu>
            </Dropdown>

            <Button
              variant="text"
              color="inherit"
              href="/actors"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Actors
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="/tv"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              TV Shows
            </Button>
          </div>

          <Search style={{ marginLeft: '10rem', width: '300px' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearchChange}
            />
          </Search>
<div style={{ marginLeft: '5rem'}}>
          <Mode /></div>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
