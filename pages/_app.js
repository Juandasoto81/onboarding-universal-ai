import * as React from 'react';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Onboarding AI</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
