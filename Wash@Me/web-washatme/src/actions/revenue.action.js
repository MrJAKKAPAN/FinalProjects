import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_REVENUE_SUCCESS,
  HTTP_REVENUE_FETCHING,
  HTTP_REVENUE_FAILED,
  server
} from "../constants";
// import { setLoginStateToFailed } from "./login.action";

const setStateRevenueToSuccess = (payload) => ({
  type: HTTP_REVENUE_SUCCESS,
  payload: payload
});

const setStateRevenueToFetching = () => ({
  type: HTTP_REVENUE_FETCHING
});

const setStateRevenueToFailed = () => ({
  type: HTTP_REVENUE_FAILED
});


export const updateRevenue = (history, formData)=>{
  return dispatch=>{
    httpClient.put(server.REVENUE_URL, formData).then(result=>{
      history.goBack();
    }).catch(error=>{
      alert(JSON.stringify(error))
    })
  }
}

export const getRevenueById = (id)=>{
  return dispatch=>{
    // dispatch(finishInitialization(false))
    dispatch(setStateRevenueToFetching())
    httpClient.get(`${server.REVENUE_URL}/${id}`)
    .then(result => {
      dispatch(setStateRevenueToSuccess(result.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(setStateRevenueToFailed());
    });
  }
}



// ค้นหา
export const getRevenueByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateRevenueToFetching());
    
    if (keyword !== null && keyword !== "") {
      httpClient.get(`${server.REVENUE_URL}/keyword/${keyword}`).then(result => {
        dispatch(setStateRevenueToSuccess(result.data));
      });
    } else {
      doGetRevenue(dispatch);
    }
  };
};


export const addRevenue = (history, formData) => {
  return async dispatch => {
    await httpClient.post(server.REVENUE_URL, formData);
    history.goBack();
  };
};

//ลบข้อมูล
export const deleteRevenue = id => {
  return async dispatch => {
    dispatch(setStateRevenueToFetching());
    await httpClient.delete(`${server.REVENUE_URL}/${id}`)
    await doGetRevenue(dispatch);
  };
};



export const getRevenue = () => {
  return dispatch => {
    dispatch(setStateRevenueToFetching());
    doGetProducts(dispatch);
  };
}; 


const  doGetRevenue = (dispatch)=>{
    httpClient.get(server.REVENUE_URL).then(result=>{
        dispatch(setStateRevenueToSuccess(result.data))

    }).catch(error=>{

        alert(JSON.stringify(error))
        dispatch(setStateRevenueToFailed())
    })
}