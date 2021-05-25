import { useState } from 'react';
import firebase, { auth } from '../firebase/firebaseConfig';

const message = {
  server: 'server side error'
};

const useAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   error management method
  const handleError = errorObject => {
    setError(errorObject);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  //   login function
  const authenticate = async requestBody => {
    const { email, password } = requestBody;
    try {
      setLoading(true);
      const response = await auth.signInWithEmailAndPassword(email, password);
      setAuthUser(response.user);
      setLoading(false);
    } catch (err) {
      if (err.message) {
        handleError({ message: err.message, type: 'error' });
        setLoading(false);
        return;
      }
      handleError({ message: message.server, type: 'error' });
      setLoading(false);
    }
  };

  //   register function
  const register = async requestBody => {
    const { email, password, confirmPassword } = requestBody;
    if (String(confirmPassword) !== String(password)) {
      handleError({
        message: 'passwords did not match, please retry!',
        type: 'error'
      });
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      setAuthUser(response.user);
      handleError({ message: 'user is successfully created', type: 'success' });
      setLoading(false);
    } catch (err) {
      if (err.message) {
        handleError({ message: err.message, type: 'error' });
        setLoading(false);
        return;
      }
      handleError({ message: message.server, type: 'error' });
      setLoading(false);
    }
  };

  //   social authentication
  const socialLogin = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    try {
      const response = await auth.signInWithPopup(googleProvider);
      setAuthUser(response.user);
    } catch (err) {
      if (err.message) {
        handleError({ message: err.message, type: 'error' });
        setLoading(false);
        return;
      }
      handleError({ message: message.server, type: 'error' });
      setLoading(false);
    }
  };

  //   logout method
  const logout = async () => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        setAuthUser(null);
      } else {
        auth.signOut();
      }
    });
  };

  return {
    authUser,
    authenticate,
    loading,
    error,
    register,
    socialLogin,
    logout
  };
};

export default useAuthentication;
