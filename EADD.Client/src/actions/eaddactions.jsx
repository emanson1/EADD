import axios from 'axios';
import { push,replace } from 'connected-react-router';
import { API_ROOT } from './api';
import { ModalActions } from '../types/modalTypes';
import { EADDActionTypes } from '../types/eaddTypes';
const clientRoute = '/psvpm/';
const apiRoute = `${API_ROOT}psvpm/`;

//#region Approval Actions


//#endregion
export const fetchInspection = id => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.FetchStarted });
        return axios.get(`${apiRoute}${id}`).then(function (response) {
            dispatch({
                type: EADDActionTypes.FetchFulfilled,
                payload: response.data
            }).catch(err => {
            dispatch({ type: EADDActionTypes.FetchError, payload: err });
        });
    });
}}



export const getRecords = params => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.FetchPageStarted });
        return axios.post(`${apiRoute}page`, params).then(function (response) {
            dispatch({
                type: EADDActionTypes.FetchPageFulfilled,
                payload: response.data
            });
        }).catch(err => {
            dispatch({ type: EADDActionTypes.FetchPageError, payload: err });
        });
    };
};


export const getRecord = id => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.FetchStarted });
        return axios.get(`${apiRoute}${id}`).then(function (response) {
            dispatch({
                type: EADDActionTypes.FetchFulfilled,
                payload: response.data
            });
        
				if (id!==0)
                { return axios.get(`${apiRoute}approvalstatus/` + id)
                     .then(response => {
                        dispatch({ type: EADDActionTypes.FetchStatusSuccess, payload: response.data });
                    })}
        }).catch(err => {
            dispatch({ type: EADDActionTypes.FetchError, payload: err });
        });
    };
};

export const addRecord = record => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.AddStarted });
        return axios.post(apiRoute, record).then(function (response) {
            dispatch({
                type: EADDActionTypes.AddFulfilled,
                payload: response.data
            });
            dispatch(push(`${clientRoute}${response.data.id}`));
            return true;
        }).catch(err => {
            dispatch({ type: EADDActionTypes.AddError, payload: err });
            return false;
        });
    };
};

export const updateRecord = values => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.UpdateStarted });
        const formData = new FormData();
		formData.append("data",JSON.stringify(values));
        return axios.post(`${apiRoute}`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(function (response) {
            dispatch({
                type: EADDActionTypes.UpdateFulfilled,
                payload: response.data
            });
            return axios.get(`${apiRoute}approvalstatus/${response.data.Result.Id}`).then(response => {
                dispatch({ type: EADDActionTypes.FetchStatusSuccess, payload: response.data });
         })
           
        }).catch(err => {
            dispatch({ type: EADDActionTypes.UpdateError, payload: err });
            return false;
        });
    };
};

export const deleteRecord = id => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.DeleteStarted });
        return axios.delete(`${apiRoute}${id}`).then(function (response) {
            dispatch({
                type: EADDActionTypes.DeleteFulfilled,
                payload: id
            });
            return true;
        }).catch(err => {
            dispatch({ type: ModalActions.HideModal });
            dispatch({ type: EADDActionTypes.DeleteError, payload: err });
            return false;
        });
    };
};
export const exportToCSV = (params) => {
    return dispatch => {
        dispatch({ type: EADDActionTypes.ExportToCSVStarted });
        return axios.post(`${apiRoute}page`, params).then(function (response) {
            dispatch({ type: EADDActionTypes.ExportToCSVFulfilled });
            return response.data;
        }).catch(err => {
            dispatch({ type: EADDActionTypes.ExportToCSVError, payload: err });
        });
    }
}

export function downloadPSVPMForm(id) {
    return dispatch => {
        dispatch({ type: EADDActionTypes.DownloadStarted });
        window.open(API_ROOT + 'psvpmword/' + parseInt(id), '_blank');
        return axios.get(`${apiRoute}/${id}`)
            .then(response => {
                dispatch({ type: EADDActionTypes.DownloadFulfilled, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: EADDActionTypes.DownloadError, payload: err });
            });
    }
}

