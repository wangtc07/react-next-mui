// pages/about.js
import * as React from 'react';
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        This is the about page of our Next.js app.
      </Typography>
    </Container>
  );
}
