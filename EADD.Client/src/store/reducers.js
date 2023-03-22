import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import eaddReducer from '../reducers/eaddReducer';

export default (history) => combineReducers ({
    router: connectRouter(history),
    eadd: eaddReducer,
 //   user: userReducer,
});