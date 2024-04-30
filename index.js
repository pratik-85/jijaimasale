var express = require("express");
var bodyparser = require("body-parser");
var session = require("express-session");
var upload = require("express-fileupload");
var userRoute = require("./routes/user");
var loginRoute = require("./routes/login");
var adminRoute = require("./routes/admin");
var app = express();

// Middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public/"));
app.use(upload());
app.use(session({
    secret:"A2Z_Infotech",
    saveUninitialized:true,
    resave:true
}));

app.use("/",userRoute);
app.use("/login",loginRoute);
app.use("/admin",adminRoute);

app.listen(4000);