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

module.exports = {
  setFavorite,
  deleteFavorite,
  loginRequest,
  logoutRequest,
  registerRequest,
};
