import { createContext, useContext, useReducer } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import authReducer from './reducer';
import { AUTH, AUTH_FAIL } from './type';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const initialState = {
  isAuthenticate: false,
  user: null,
  error: null
};

const UserContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const userAuthenticate = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: AUTH, payload: user });
      } else {
        dispatch({ type: AUTH_FAIL, payload: null });
      }
    });
  };
  return (
    <UserContext.Provider value={{ authState, userAuthenticate }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
