import {
  AUTH,
  AUTH_FAIL,
  LOGIN,
  SOCIAL_LOGIN,
  SET_LOADING,
  REGISTER,
  SET_ERROR,
  LOGOUT,
  SET_APP_LOADING
} from '../type';

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
    case SOCIAL_LOGIN:
    case REGISTER:
      return {
        ...state,
        isAuthenticate: true,
        auth: {
          ...state.auth,
          user: payload
        }
      };
    case AUTH:
      return {
        ...state,
        isAuthenticate: payload,
        auth: {
          ...state.auth
        }
      };
    case AUTH_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticate: false,
        auth: {
          ...state.auth,
          user: null
        }
      };

    case SET_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          authLoading: payload
        }
      };
    case SET_APP_LOADING:
      return {
        ...state,
        loading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default authReducer;
