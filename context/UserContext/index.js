import { createContext, useContext, useEffect, useReducer } from 'react';
import authReducer from './reducer';
import { SET_ERROR } from './type';
import {
  loginUser,
  registerUser,
  socialLogin,
  logout,
  authentication
} from './actions';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const initialState = {
  isAuthenticate: false,
  auth: {
    user: null,
    authLoading: false
  },
  error: null,
  loading: false
};

const UserContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (authState.error) {
      setTimeout(() => {
        dispatch({ type: SET_ERROR, payload: null });
      }, 5000);
    }
  }, [authState.error]);

  const dispatchAuthenticate = () => {
    authentication(dispatch);
  };

  // dispatch functions
  const dispatchLogin = formData => {
    loginUser(formData, dispatch);
  };
  const dispatchSocialLogin = () => socialLogin(dispatch);
  const dispatchRegister = formData => {
    registerUser(formData, dispatch);
  };
  const dispatchLogout = () => {
    if (authState.isAuthenticate) {
      logout(dispatch);
    }
  };

  // component body
  return (
    <UserContext.Provider
      value={{
        authState,
        dispatchLogin,
        dispatchSocialLogin,
        dispatchRegister,
        dispatchLogout,
        dispatchAuthenticate
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
