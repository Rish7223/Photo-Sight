import React from 'react';
import '../styles/globals.scss';
import DarkModeProvider from '../context/Darkmode';
import UserContextProvider from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </UserContextProvider>
  );
}

export default MyApp;
