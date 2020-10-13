import {
  HTTP_LOGIN_FETCHING,
  HTTP_LOGIN_SUCCESS,
  HTTP_LOGIN_FAILED,
  HTTP_STOCK_EDIT_INITIALED
} from "../constants";

// rxre
const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_LOGIN_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_LOGIN_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_LOGIN_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_STOCK_EDIT_INITIALED:
        return { ...state, isInitialed: payload };
    default:
      return state;
  }
};
