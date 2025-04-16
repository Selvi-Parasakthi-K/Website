export function getAuthToken() {
  return window.localStorage.getItem("access_token");
}

export function setAuthToken(accessToken: string) {
  window.localStorage.setItem("access_token", accessToken);
}
