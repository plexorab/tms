import { SET_AUTH } from "../actionTypes";

const initialState = {
  username: '',
  password: ''
};

export default function(state = initialState, action) {
  console.log('Action type = ' + action.type);
  switch (action.type) {
    case SET_AUTH: {
      console.log('Action = ' + action);
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser
      };
    }
    default:
      return state;
  }
}