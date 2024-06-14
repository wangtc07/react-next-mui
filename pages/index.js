// pages/index.js
import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Next.js App with MUI
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}
