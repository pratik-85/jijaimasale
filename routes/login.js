var express = require("express");
var exe = require("./connection");
var route = express.Router();

route.get("/",function(req,res){
    res.render("login/login.ejs");
});

route.post("/check_admin",async function(req,res){
    var d = req.body;
    var sql = `SELECT * FROM admin WHERE admin_email = '${d.admin_email}' AND admin_password = '${d.admin_password}'`;
    var data = await exe(sql);
    if(data.length > 0){
        req.session['admin_id'] = data[0].admin_id;
        res.redirect("/admin/");
    }
    else{
        res.redirect("/login");
    }
})

module.exports = route;