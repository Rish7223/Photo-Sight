import { DARK, LIGHT } from '../actionType';

export default function DarkReducer(state, action) {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        isDark: true,
        bgColor: '#2b2b2b',
        textColor: '#ffffff'
      };
    case LIGHT:
      return {
        ...state,
        isDark: false,
        bgColor: '#F5F9FF',
        textColor: '#2b2b2b'
      };
    default:
      return state;
  }
}
