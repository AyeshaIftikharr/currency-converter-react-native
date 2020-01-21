import { types } from '../../actions/auth';

const initialState = {
  isLoggedIn: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case types.AUTH_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
