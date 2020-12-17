import { createStore } from 'redux';
import rootReducer from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    rootReducer,
    composeWithDevTools()
);