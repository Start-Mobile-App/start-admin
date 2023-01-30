const initialState = {
  open: false
};

function SideBarReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_SIDE_BAR':
      return {
        ...state,
        open: action.value.open
      };
    case 'LOGOUT':
      return {
        token: false
      };
    default:
      return state;
  }
}

export default SideBarReducer;
