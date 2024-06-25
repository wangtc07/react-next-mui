// components/Header.js
import * as React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import URLs from '../urls'; // 引入 URLs 配置

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Next.js App
        </Typography>
        <Button color="inherit">
          <Link href={URLs.home} passHref>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link href={URLs.about} passHref>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link href={URLs.members} passHref>
            Members
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
