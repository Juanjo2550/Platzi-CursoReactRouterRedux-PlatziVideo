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
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          [],
      };
    case 'FILTER':
      const f1 = state.trends.filter(item => item.title.includes(action.payload)) || [];
      var f2 = state.originals.filter(item => item.title.includes(action.payload)) || [];
      const filter = [...f1, ...f2];
      console.log(filter);
      return {
        ...state,
        filter,
      };
    case 'CLEAN_FILTER':
      return {
        ...state,
        filter: [],
      };
    default:
      return state;
  }
};

export default reducer;
