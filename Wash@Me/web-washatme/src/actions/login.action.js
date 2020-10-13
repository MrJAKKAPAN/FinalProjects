import {
    HTTP_LOGIN_FETCHING,
    HTTP_LOGIN_SUCCESS, 
    HTTP_LOGIN_FAILED,
    server, 
    OK,
    YES
} from "../constants";
import { httpClient } from "./../utils/HttpClient"

export const setLoginStateToFetching  = () => ({
    type:HTTP_LOGIN_FETCHING,
})
export const setLoginStateToSuccess = (payload) => ({
    type: HTTP_LOGIN_SUCCESS,
    payload
})
export const setLoginStateToFailed = () => ({
    type: HTTP_LOGIN_FAILED,
})

export const autoLogin = (history) => {
    return () => {
        if (localStorage.getItem(server.LOGIN_PASSED) === YES){
            setTimeout(()=>history.push("/report"),3000)
        }
       
    }
}

export const loadState = (history) => {
    return  dispatch => {
        setLoginStateToFetching()
        if(localStorage.getItem('newData') !== null){
            let data = localStorage.getItem('newData')
            data = JSON.parse(data);
            dispatch(setLoginStateToSuccess(data));
        }else{
            dispatch(setLoginStateToFailed());
        }
    }
}

// function  สำหรับให้ ui เรียกไปใช้
export const login = (history, credential) => {
    return async (dispatch, getState) => {
            dispatch(setLoginStateToFetching());
                let result = await httpClient.post(server.LOGIN_URL, credential);
                let obj = result.data
                localStorage.setItem('newData', JSON.stringify(obj))
                // console.log(obj)

                    if(result.data.result === OK){
                        localStorage.setItem(server.LOGIN_PASSED,YES)
                        // login รีเฟรช 
                        getState().appReducer.app.forceUpdate();
                        history.push('/report')
                        dispatch(setLoginStateToSuccess(result.data));
                    }else{
                        dispatch(setLoginStateToFailed());
                    }    
            // }          
                
    } 
}


