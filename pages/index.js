// pages/index.js
import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import URLs from '../urls'; // 引入 URLs 配置

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Next.js App with MUI
      </Typography>
      <Button variant="contained" color="primary">
        <Link href={URLs.about} passHref>
          About Page
        </Link>
      </Button>
    </Container>
  );
}
