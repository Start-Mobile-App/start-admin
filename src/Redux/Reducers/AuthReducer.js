const initialState = {
  token: null,
  refreshToken: null
};

function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        token: action.value.accessToken,
        refreshToken: action.value.refreshToken,
        user: action.value.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.value.accessToken,
        refreshToken: action.value.refreshToken
      };
    case 'SET_NAME_USER':
      return {
        ...state,
        user: { ...state.user, ...action.value.user }
      };
    case 'LOGOUT':
      return {
        token: null,
        refreshToken: null
      };
    default:
      return state;
  }
}

export default AuthReducer;
