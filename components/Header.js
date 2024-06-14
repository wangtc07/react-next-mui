// components/Header.js
import * as React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Next.js App
        </Typography>
        <Button color="inherit">
          <Link href="/" passHref>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/about" passHref>
            About
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
