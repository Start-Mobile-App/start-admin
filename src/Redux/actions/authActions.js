export const setUser = userObj => {
  return {
    type: 'SET_CURRENT_USER',
    value: userObj
  };
};
export const setToken = userObj => {
  return {
    type: 'SET_TOKEN',
    value: userObj
  };
};
export const setNameUser = userObj => {
  return {
    type: 'SET_NAME_USER',
    value: userObj
  };
};
