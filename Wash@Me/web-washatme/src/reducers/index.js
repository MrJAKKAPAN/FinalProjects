// เอา reducer ทั้งหมดมัดรวมในไฟล์นี้เพื่อส่งออก
import { combineReducers} from "redux";
import  registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import appReducer from './app.reducer'
import stockReducer from './stock.reducer'
import customerReducer from './customer.reducer'
import serviceReducer from './service.reducer'
import revenueReducer from './revenue.reducer'



export default combineReducers({
    registerReducer,
    loginReducer,
    appReducer,
    stockReducer,
    customerReducer,
    serviceReducer,
    revenueReducer
    
})