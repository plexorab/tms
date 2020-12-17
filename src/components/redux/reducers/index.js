import { createStore } from 'redux';
import authReducer from './auth';

export default createStore(authReducer);