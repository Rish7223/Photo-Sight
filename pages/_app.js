import '../styles/globals.css';
import React from 'react';
import DarkModeProvider from '../context/Darkmode';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
