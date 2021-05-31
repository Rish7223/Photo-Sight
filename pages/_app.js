import '../styles/globals.scss';
import DarkModeProvider from '../context/Darkmode';
import UserContextProvider from '../context/UserContext';
import PhotosContextProvider from '../context/PhotoContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <DarkModeProvider>
        <PhotosContextProvider>
          <Component {...pageProps} />
        </PhotosContextProvider>
      </DarkModeProvider>
    </UserContextProvider>
  );
}

export default MyApp;
