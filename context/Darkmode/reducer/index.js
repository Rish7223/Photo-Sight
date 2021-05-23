import { DARK, LIGHT } from '../actionType';

export default function DarkReducer(state, action) {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        isDark: true,
        bgColor: 'bg-bgDark',
        textColor: 'text-white'
      };
    case LIGHT:
      return {
        ...state,
        isDark: false,
        bgColor: 'bg-bgLight',
        textColor: 'text-black'
      };
    default:
      return state;
  }
}
