import {
    HTTP_REVENUE_SUCCESS,
    HTTP_REVENUE_FETCHING,
    HTTP_REVENUE_FAILED,
} from "../constants";

const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    // count: 0,  
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case HTTP_REVENUE_SUCCESS:        
            return { ...state, result: payload, isFetching: false, isError: false,count:payload.length };
        case HTTP_REVENUE_FAILED:
            return { ...state, result: null, isFetching: false, isError: true };
        case HTTP_REVENUE_FETCHING:
            return { ...state, result: null, isFetching: true, isError: false };
        default:
            return state;
    }
};