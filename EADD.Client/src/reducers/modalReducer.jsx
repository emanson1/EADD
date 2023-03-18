import { EADDActionTypes } from '../types/eaddTypes';

const initialState = {
	maxWidthEnum: 'sm',
	modalStackIndex: 0,
	useFullWidth: false,
};

export default (state = initialState, action) => {
	if(action.type === EADDActionTypes.ChangeSize) {
		console.log('change size: %O',action.payload);
		return {
			...state,
			maxWidthEnum: action.payload.maxWidthEnum,
			modalStackIndex: action.payload.modalStackIndex,
			useFullWidth: action.payload.useFullWidth,
		};
	}
	return {
		...state,
		useFullWidth: false, //going to have this always reset to false so that it doesn't affect other modals
	};
};