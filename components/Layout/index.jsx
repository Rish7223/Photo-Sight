import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import { DarkMode } from '../../context/Darkmode';

export const Layout = ({ title = 'Photosight', children }) => {
  const {
    state: { bgColor }
  } = useContext(DarkMode);
  return (
    <div className={`min-h-screen w-screen leading-normal ${bgColor}`}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};
