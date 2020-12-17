import { SET_USERNAME, SET_PASSWORD, SET_TOKEN, SET_ERROR } from "../actionTypes";

const initialState = {
  username: '',
  password: '',
  token: '',
  message: '',
  errors: false
};

export default function(state = initialState, action) {
  console.log('Action type = ' + action.type);
  switch (action.type) {
    case SET_USERNAME: {
      const { username } = action;
      return {
        username,
        password: state.password,
        token: state.token
      };
    }
    case SET_PASSWORD: {
      const { password } = action;
      return {
        username: state.username,
        password,
        token: state.token
      };
    }
    case SET_TOKEN: {
      const { token } = action;
      return {
        ...token
      };
    }
    case SET_ERROR: {
      const { errors, message } = action;
      return {
        username: state.username,
        password: state.password,
        token: state.token,
        errors,
        message
      };
    }
    default:
      return state;
  }
}