const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      var myList = state.myList.filter(items => items.id === action.payload.id);
      if (myList.length === 0) {
        myList = [...state.myList, action.payload];
      } else { 
        myList = state.myList;
      }
      return {
        ...state,
        myList,
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
