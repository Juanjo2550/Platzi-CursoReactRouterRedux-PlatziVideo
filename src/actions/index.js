const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

const filter = payload => ({
  type: 'FILTER',
  payload,
});

const cleanFilter = payload => ({
  type: 'CLEAN_FILTER',
  payload,
});

module.exports = {
  setFavorite,
  deleteFavorite,
  loginRequest,
  logoutRequest,
  registerRequest,
  getVideoSource,
  filter,
  cleanFilter,
};
