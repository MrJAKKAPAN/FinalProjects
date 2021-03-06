const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(__dirname + "/uploaded"));
app.use(cors());

// api
app.use("/api/v1/authen/", require("./api_authen"));
app.use("/api/v1/user/", require("./api_user"));
app.use("/api/v1/customer/", require("./api_customer"));
app.use("/api/v1/stock/", require("./api_stock"));
app.use("/api/v1/service/", require("./api_service"));
app.use("/api/v1/revenue/", require("./api_revenue"));
app.use("/api/v1/expenditure/", require("./api_expenditure"));


app.listen(8085, () => {
    console.log("backend running... => success");
});
