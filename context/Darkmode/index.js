import { createContext, useReducer } from 'react';
import { DARK, LIGHT } from './actionType';
import DarkReducer from './reducer';

export const DarkMode = createContext();

const initialState = {
  isDark: false,
  bgColor: 'bg-bgLight',
  textColor: 'text-black'
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
