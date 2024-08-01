// pages/_app.js
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import '../styles/global.css';
import URLs from '../urls'; // 引入 URLs 配置
// import Amplify from 'aws-amplify';
import { Amplify } from 'aws-amplify'; // 使用命名導入而不是默認導入
import awsExports from '../src/aws-exports';

Amplify.configure(awsExports);
const theme = createTheme();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
