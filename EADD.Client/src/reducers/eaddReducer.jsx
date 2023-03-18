import { EADDActionTypes } from '../types/eaddTypes';

const initialState = {
    itemLoading: true,
    itemLoadingError: undefined,
	inspection: {},
	installation: {},
	readOnly: [ 'INITIAL' ],
	tableFilters: { pageSize: 50, page: 0, sortBy: 'createdate', sortAscending: false, filters: [] }
	// TankerRequestOverrideLoading: false,
};

export default (state = initialState, action) => {
	if (action.type === EADDActionTypes.FetchPMDWRFormStarted) {
		return {
			...state,
			itemLoading: true,
			approvalStatus: [],
			itemLoadingError: undefined
		};
	} 
	else if (action.type === EADDActionTypes.FetchPMApprovalStatusSuccess){
		return {
			...state,
			approvalStatus: action.payload,
			itemLoadingError: false
		};
	}
	else if (action.type === EADDActionTypes.FetchAdditionalAllowedApproversStarted) {
		return {
			...state,
			itemLoading: true,
			additionalallowedapprovers: undefined
		};
	} else if (action.type === EADDActionTypes.FetchAssetSuiteSuccess) {
		let dwinfoNew = state.dwinfo;
		let yearvalue=(action.payload.dueDate!==null)?action.payload.dueDate.substring(0,4):"";
		let monthvalue=(action.payload.dueDate!==null)?action.payload.dueDate.substring(4,6):"";
		let dayvalue=(action.payload.dueDate!==null)?action.payload.dueDate.substring(6,8):"";
		
		
		dwinfoNew.WorkOrderDescription = (action.payload.woTaskDescription!==null)?action.payload.woTaskDescription.substring(0, 50):"";
		dwinfoNew.WorkOrderNumber = (action.payload.woNo!==null)?action.payload.woNo.substring(0, 50):"";
		dwinfoNew.Title = (action.payload.wrTaskTitle!==null)?action.payload.wrTaskTitle.substring(0, 60):"";
		dwinfoNew.DueDate = (action.payload.dueDate!==null && action.payload.dueDate!==undefined)?new Date(action.payload.dueDate.substring(0,4),action.payload.dueDate.substring(4,6)-1,action.payload.dueDate.substring(6,8),0,0,0,0):"";
		dwinfoNew.LateDate = (action.payload.lateDate!==null && action.payload.lateDate!==undefined)?new Date(action.payload.lateDate.substring(0,4),action.payload.lateDate.substring(4,6)-1,action.payload.lateDate.substring(6,8),0,0,0,0):"";
		dwinfoNew.WorkOrderFrequencyPeriod = action.payload.period;
		dwinfoNew.WorkOrderFrequencyComments = action.payload.taskFrequency;
		dwinfoNew.PMRQAttribute = action.payload.pmrqAttribute;
		dwinfoNew.WorkOrderFacility = action.payload.workOrderFacility;

		return {
			...state,
			assetSuiteInformation: action.payload,
			woLookupLoading: false,
			itemLoading: false,
			dwinfo: dwinfoNew
		};
	} else if (action.type === EADDActionTypes.FetchRequiredApproversStarted) {
		return {
			...state,
			requiredapprovers: undefined
		};
	} else if (action.type === EADDActionTypes.FetchAssetSuiteStarted) {
		return {
			...state,
			itemLoading: true,
			assetSuiteInformation: undefined
		};
	} else if (action.type === EADDActionTypes.FetchRequiredApproversSuccess) {
		return {
			...state,
			requiredapprovers: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchDisciplinesSuccess) {
		return {
			...state,
			disciplines: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchAdditionalAllowedApproversSuccess) {
		return {
			...state,
			additionalallowedapprovers: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchFacilitiesSuccess) {
		return {
			...state,
			facilities: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchCalcTypesSuccess) {
		return {
			...state,
			calctypes: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchPMRQAttributesSuccess) {
		return {
			...state,
			pmrqattributes: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchJobTypesSuccess) {
		return {
			...state,
			jobtypes: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchPrioritiesSuccess) {
		return {
			...state,
			priorities: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchPMFormSuccess) {
		
		return {
			...state,
			itemLoading: false,
			readOnly: [ 'INITIAL' ],
			info: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchDWFormSuccess) {
		return {
			...state,
			itemLoading: false,
			readOnly: [ 'INITIAL' ],
			dwinfo: action.payload
		};
	} else if (action.type === EADDActionTypes.FetchPMDWRFormError) {
		return {
			...state,
			itemLoading: false,
			itemLoadingError: action.payload
		};
	} else if (action.type === EADDActionTypes.PostPMFormSuccess) {
		return {
			...state,
			itemLoading: false
		};
	}
	
	else if (action.type === EADDActionTypes.PostDWFormSuccess) {
		return {
			...state,
			itemLoading: false
		}
	}
	else if (action.type === EADDActionTypes.SetDWFilters) {
			return {
				...state,
				tableFilters: action.payload
		}
	}
		else if (action.type === EADDActionTypes.SetPMFilters) {
			return {
				...state,
				tableFilters: action.payload
		}
	};
	return state;
};
