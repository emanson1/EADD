import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import eaddReducer from '../reducers/eaddReducer';


export default (history) => combineReducers({
	router: connectRouter(history),
	eadd: eaddReducer,
   
	// leaseJustify: leaseJustifyReducer,
	// tankerRequest: tankerRequestReducer,
	// rice: riceReducer,
	// reports: reportReducer
});
