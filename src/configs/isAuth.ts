export function isAuth() {
  // console.log(loadingState === LOGIN_SUCCESS ? true : false);
  // return loadingState === LOGIN_SUCCESS ? true : false;
  return localStorage.getItem('accessToken') &&
    localStorage.getItem('refreshToken')
    ? true
    : false;
}
