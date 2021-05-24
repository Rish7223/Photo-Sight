import React from 'react';
import '../styles/globals.scss';
import DarkModeProvider from '../context/Darkmode';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
