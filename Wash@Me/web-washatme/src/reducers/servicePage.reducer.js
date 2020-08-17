import {
    HTTP_SERVICE_SUCCESS,
    HTTP_SERVICE_FETCHING,
    HTTP_SERVICE_FAILED,
} from "../constants";

const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    // count: 0,  
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case HTTP_SERVICE_SUCCESS:        
            return { ...state, result: payload, isFetching: false, isError: false,count:payload.length };
        case HTTP_SERVICE_FAILED:
            return { ...state, result: null, isFetching: false, isError: true };
        case HTTP_SERVICE_FETCHING:
            return { ...state, result: null, isFetching: true, isError: false };
        default:
            return state;
    }
};