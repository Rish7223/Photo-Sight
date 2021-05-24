import { createContext, useContext, useReducer } from 'react';
import { DARK, LIGHT } from './actionType';
import DarkReducer from './reducer';

const DarkMode = createContext();
export const useDarkContext = () => useContext(DarkMode);

const initialState = {
  isDark: false,
  bgColor: '#F5F9FF',
  textColor: '#2b2b2b'
};

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkReducer, initialState);

  const toggleDark = () => {
    if (state.isDark) {
      dispatch({ type: LIGHT });
      return;
    }
    dispatch({ type: DARK });
  };

  return (
    <DarkMode.Provider value={{ toggleDark, state }}>
      {children}
    </DarkMode.Provider>
  );
};

export default DarkModeProvider;
