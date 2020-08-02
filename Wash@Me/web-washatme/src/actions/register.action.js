// rxac คีย์ลัด
// ส่งต่อให้ reducer
import { HTTP_REGISTER_FETCHING, HTTP_REGISTER_SUCCESS,HTTP_REGISTER_FAILED, server ,OK } from "../constants";
import {httpClient} from "./../utils/HttpClient"
// }
export const setRegisterStateToFetching = () => ({
    type: HTTP_REGISTER_FETCHING,
})

export const setRegisterStateToSuccess = (payload) => ({
    type: HTTP_REGISTER_SUCCESS,
    payload
})
export const setRegisterStateToFailed = () => ({
    type: HTTP_REGISTER_FAILED

})


// history ส่งมาจาก react-router
export const register = (history, credentail)=>{
    // call back
    return async dispatch=>{
        dispatch(setRegisterStateToFetching())
        // ต่อเรียก api
    try {
        // debugger
        let results =  await httpClient.post(server.REGISTER_URL, credentail)
        if (results.data.result == OK) {
            // success
            dispatch(setRegisterStateToSuccess(results.data.result))
            history.goBack();

        } else {
            // failed
            dispatch(setRegisterStateToFailed())
        }
    }catch (e) {
        // failed
        dispatch(setRegisterStateToFailed())
    }
        // setTimeout(()=>{
        //     dispatch(setRegisterStateToSuccess({result: "ok"}))
        // }, 3000)
        // // dispatch(setRegisterStateToFailed())
    }
}



