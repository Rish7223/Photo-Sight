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
  isAuthenticate: null,
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
      }, 10000);
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
  const dispatchRemoveError = () => {
    dispatch({ type: SET_ERROR, payload: null });
  };

  // console.log(authState);
  return (
    <UserContext.Provider
      value={{
        authState,
        dispatchLogin,
        dispatchSocialLogin,
        dispatchRegister,
        dispatchLogout,
        dispatchAuthenticate,
        dispatchRemoveError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
