import {
    HTTP_CUSTOMER_SUCCESS,
    HTTP_CUSTOMER_FETCHING,
    HTTP_CUSTOMER_FAILED,
} from "../constants";

const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    // count: 0,  
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case HTTP_CUSTOMER_SUCCESS:        
            return { ...state, result: payload, isFetching: false, isError: false,count:payload.length };
        case HTTP_CUSTOMER_FAILED:
            return { ...state, result: null, isFetching: false, isError: true };
        case HTTP_CUSTOMER_FETCHING:
            return { ...state, result: null, isFetching: true, isError: false };
        default:
            return state;
    }
};