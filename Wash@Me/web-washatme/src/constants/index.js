// Login Page
export const APP_INIT = "APP_INIT";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// Stock Page
export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";

// Stock Edit Page
export const HTTP_STOCK_EDIT_FETCHING = "HTTP_STOCK_EDIT_FETCHING";
export const HTTP_STOCK_EDIT_SUCCESS = "HTTP_STOCK_EDIT_SUCCESS";
export const HTTP_STOCK_EDIT_FAILED = "HTTP_STOCK_EDIT_FAILED";
export const HTTP_STOCK_EDIT_INITIALED = "HTTP_STOCK_EDIT_INITIALED";

//customer Page
export const HTTP_CUSTOMER_FETCHING = "HTTP_CUSTOMER_FETCHING";
export const HTTP_CUSTOMER_SUCCESS = "HTTP_CUSTOMER_SUCCESS";
export const HTTP_CUSTOMER_FAILED = "HTTP_CUSTOMER_FAILED";

//customerEdit Page
export const HTTP_CUSTOMER_EDIT_FETCHING = "HTTP_CUSTOMER_EDIT_FETCHING";
export const HTTP_CUSTOMER_EDIT_SUCCESS = "HTTP_CUSTOMER_EDIT_SUCCESS";
export const HTTP_CUSTOMER_EDIT_FAILED = "HTTP_CUSTOMER_EDIT_FAILED";
export const HTTP_CUSTOMER_EDIT_INITIALED = "HTTP_CUSTOMER_EDIT_INITIALED";

//service Page
export const HTTP_SERVICE_FETCHING = "HTTP_SERVICE_FETCHING";
export const HTTP_SERVICE_SUCCESS = "HTTP_SERVICE_SUCCESS";
export const HTTP_SERVICE_FAILED = "HTTP_SERVICE_FAILED";

//serviceEdit Page
export const HTTP_SERVICE_EDIT_FETCHING = "HTTP_SERVICE_EDIT_FETCHING";
export const HTTP_SERVICE_EDIT_SUCCESS = "HTTP_SERVICE_EDIT_SUCCESS";
export const HTTP_SERVICE_EDIT_FAILED = "HTTP_SERVICE_EDIT_FAILED";
export const HTTP_SERVICE_EDIT_INITIALED = "HTTP_SERVICE_EDIT_INITIALED";

//account Page
export const HTTP_ACCOUNT_FETCHING = "HTTP_ACCOUNT_FETCHING";
export const HTTP_ACCOUNT_SUCCESS = "HTTP_ACCOUNT_SUCCESS";
export const HTTP_ACCOUNT_FAILED = "HTTP_ACCOUNT_FAILED";

//accountEdit Page
export const HTTP_ACCOUNT_EDIT_FETCHING = "HTTP_ACCOUNT_EDIT_FETCHING";
export const HTTP_ACCOUNT_EDIT_SUCCESS = "HTTP_ACCOUNT_EDIT_SUCCESS";
export const HTTP_ACCOUNT_EDIT_FAILED = "HTTP_ACCOUNT_EDIT_FAILED";
export const HTTP_ACCOUNT_EDIT_INITIALED = "HTTP_SERVICE_EDIT_INITIALED";

//Revenue Page
export const HTTP_REVENUE_FETCHING = "HTTP_REVENUE_FETCHING";
export const HTTP_REVENUE_SUCCESS = "HTTP_REVENUE_SUCCESS";
export const HTTP_REVENUE_FAILED = "HTTP_REVENUE_FAILED";

//Revenue Page
export const HTTP_REVENUE_EDIT_FETCHING = "HTTP_REVENUE_EDIT_FETCHING";
export const HTTP_REVENUE_EDIT_SUCCESS = "HTTP_REVENUE_EDIT_SUCCESS";
export const HTTP_REVENUE_EDIT_FAILED = "HTTP_REVENUE_EDIT_FAILED";
export const HTTP_REVENUE_EDIT_INITIALED = "HTTP_REVENUE_EDIT_INITIALED";

// Error Code
export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
export const E_USER_CANCELLED = 'E_USER_CANCELLED'
export const E_UNKNOWN = 'E_UNKNOWN'
export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.' 
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'  
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.' 



export const apiUrl =  "http://localhost:8085/api/v1";
export const imageUrl = "http://localhost:8085";

export const YES = 'YES'
export const NO = 'NO'
export const OK = 'ok'
export const NOK = 'notOk'

export const server = {   
    LOGIN_URL : `authen/login`,
    REGISTER_URL : `authen/register`,
    PRODUCT_URL : `stock/product`, 
    CUSTOMER_URL : `customer/customer`,
    SERVICE_URL : `service/service`, 
    REVENUE_URL : `revenue/revenue`, 
    TRANSACTION_URL : `transaction`, 
    REPORT_URL: `stock/report`,    
    LOGIN_PASSED : `yes`,
}