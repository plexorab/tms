import { SET_USERNAME, SET_PASSWORD, SET_TOKEN } from "../actionTypes";

const initialState = {
  username: 'jimmy',
  password: 'abc123'
};

// export default function(state = initialState, action) {
//   return state;
// }

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
        ...password
      };
    }
    case SET_TOKEN: {
      const { token } = action;
      return {
        ...token
      };
    }
    default:
      return state;
  }
}