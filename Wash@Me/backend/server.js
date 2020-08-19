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
app.use("/api/v1/customer/", require("./api_customer"));
app.use("/api/v1/stock/", require("./api_stock"));
app.use("/api/v1/service/", require("./api_service"));
app.use("/api/v1/revenue/", require("./api_revenue"));


app.listen(8085, () => {
    console.log("backend running... => success");
});

// const server = app.listen(8085, function(){
    // var host = server.address().address;
    // var port = server.address().port;

    // console.log('Running ... ', host, port);
// });
