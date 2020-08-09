import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_SERVICE_SUCCESS,
  HTTP_SERVICE_FETCHING,
  HTTP_SERVICE_FAILED,
  server
} from "../constants";
// import { setLoginStateToFailed } from "./login.action";

const setStateServiceToSuccess = (payload) => ({
  type: HTTP_SERVICE_SUCCESS,
  payload: payload
});

const setStateServiceToFetching = () => ({
  type: HTTP_SERVICE_FETCHING
});

const setStateServiceToFailed = () => ({
  type: HTTP_SERVICE_FAILED
});


export const updateService = (history, formData)=>{
  return dispatch=>{
    httpClient.put(server.SERVICE_URL, formData).then(result=>{
      history.goBack();
    }).catch(error=>{
      alert(JSON.stringify(error))
    })
  }
}

export const getServiceById = (id)=>{
  return dispatch=>{
    // dispatch(finishInitialization(false))
    dispatch(setStateServiceToFetching())
    httpClient.get(`${server.SERVICE_URL}/${id}`)
    .then(result => {
      dispatch(setStateServiceToSuccess(result.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(setStateServiceToFailed());
    });
  }
}



// ค้นหา
export const getServiceByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateServiceToFetching());
    
    if (keyword !== null && keyword !== "") {
      httpClient.get(`${server.SERVICE_URL}/keyword/${keyword}`).then(result => {
        dispatch(setStateServiceToSuccess(result.data));
      });
    } else {
      doGetService(dispatch);
    }
  };
};


export const addService = (history, formData) => {
  return async dispatch => {
    await httpClient.post(server.SERVICE_URL, formData);
    history.goBack();
  };
};

//ลบข้อมูล
export const deleteService = id => {
  return async dispatch => {
    dispatch(setStateServiceToFetching());
    await httpClient.delete(`${server.SERVICE_URL}/${id}`)
    await doGetService(dispatch);
  };
};



export const getService = () => {
  return dispatch => {
    dispatch(setStateServiceToFetching());
    doGetService(dispatch);
  };
}; 


const  doGetService = (dispatch)=>{
    httpClient.get(server.SERVICE_URL).then(result=>{
        dispatch(setStateServiceToSuccess(result.data))

    }).catch(error=>{

        alert(JSON.stringify(error))
        dispatch(setStateServiceToFailed())
    })
}