import { SET_AUTH } from "./actionTypes";

export function setAuth(username, password) {
  return {
    type: SET_AUTH,
    username,
    password
  }
};
