import { AUTH, AUTH_FAIL } from '../type';

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH:
      return {
        ...state,
        isAuthenticate: true,
        user: payload
      };
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticate: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
