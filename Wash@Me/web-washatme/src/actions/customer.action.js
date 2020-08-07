import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_CUSTOMER_SUCCESS,
  HTTP_CUSTOMER_FETCHING,
  HTTP_CUSTOMER_FAILED,
  server
} from "../constants";

const setStateCustomerToSuccess = (payload) => ({
  type: HTTP_CUSTOMER_SUCCESS,
  payload: payload
});

const setStateCustomerToFetching = () => ({
  type: HTTP_CUSTOMER_FETCHING
});

const setStateCustomerToFailed = () => ({
  type: HTTP_CUSTOMER_FAILED
});


export const getCustomerById = (id)=>{
  return dispatch=>{
    // dispatch(finishInitialization(false))
    dispatch(setStateCustomerToFetching())
    httpClient.get(`${server.CUSTOMER_URL}/${id}`)
    .then(result => {
      dispatch(setStateCustomerToSuccess(result.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(setStateCustomerToFailed());
    });
  }
}

export const updateCustomer = (history, formData)=>{
  return dispatch=>{
    httpClient.put(server.CUSTOMER_URL, formData).then(result=>{
      history.goBack();
    }).catch(error=>{
      alert(JSON.stringify(error))
    })
  }
}

// ค้นหา
export const getCustomerByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateCustomerToFetching());
    
    if (keyword !== null && keyword !== "") {
      httpClient.get(`${server.CUSTOMER_URL}/keyword/${keyword}`).then(result => {
        dispatch(setStateCustomerToSuccess(result.data));
      });
    } else {
      doGetCustomer(dispatch);
    }
  };
};

export const addCustomer = (history, formData) => {
  return async dispatch => {
    await httpClient.post(server.CUSTOMER_URL, formData);
    history.goBack();
  };
};

//ลบข้อมูล
export const deleteCustomer = id => {
  return async dispatch => {
    dispatch(setStateCustomerToFetching());
    await httpClient.delete(`${server.CUSTOMER_URL}/${id}`)
    await doGetCustomer(dispatch);
  };
};


export const getCustomer = () => {
  return dispatch => {
    dispatch(setStateCustomerToFetching());
    doGetCustomer(dispatch);
  };
}; 

const  doGetCustomer = (dispatch)=>{
    httpClient.get(server.CUSTOMER_URL).then(result=>{
        dispatch(setStateCustomerToSuccess(result.data))

    }).catch(error=>{

        alert(JSON.stringify(error))
        dispatch(setStateCustomerToFailed())
    })
}

