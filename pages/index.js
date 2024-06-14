// pages/index.js
import * as React from 'react';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Next.js App
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Next.js App with MUI
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}
