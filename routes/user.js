var express = require("express");
var exe = require("../routes/connection");
var route = express.Router();

route.get("/",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var what_we_do_title = await exe(`SELECT * FROM what_we_do_title`);
    var slider = await exe(`SELECT * FROM slider_image`);
    var best_choice = await exe(`SELECT * FROM why_we_are_best_choice`);
    var what_we_do = await exe(`SELECT * FROM what_we_do`);
    var our_services = await exe(`SELECT * FROM our_services`);
    // console.log(slider);
    res.render("user/home.ejs",{"basic_information":basic_information[0],"slider":slider,"best_choice":best_choice,"what_we_do":what_we_do,"our_services":our_services,"what_we_do_title":what_we_do_title});
});

route.get("/about",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var about_us = await exe(`SELECT * FROM about_us`);
    // console.log(about_us);
    res.render("user/about.ejs",{"basic_information":basic_information[0],"about_us":about_us});
});

// Product
route.get("/red_chilli_powder",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var red_chilli_products = await exe(`SELECT * FROM red_chilli_products`);
    console.log(red_chilli_products);
    res.render("user/red_chilli_powder.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"specificationdata":specificationdata,"description":description,"red_chilli_products":red_chilli_products});
});

route.get("/turmeric_powder",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var turmeric_powder = await exe(`SELECT * FROM turmeric_products`);
    res.render("user/turmeric_powder.ejs",{"basic_information":basic_information[0],"turmeric_powder":turmeric_powder,"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata});
});

route.get("/coriander_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var coriander_masala = await exe(`SELECT * FROM coriander_products`);
    // console.log(coriander_masala);
    res.render("user/coriander_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"coriander_masala":coriander_masala,"specificationdata":specificationdata});
});

route.get("/chicken_masale",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var chicken_masala = await exe(`SELECT * FROM chicken_masala_products`);
    console.log(chicken_masala);
    res.render("user/chicken_masale.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"chicken_masala":chicken_masala});
});

route.get("/mutton_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var mutton_masala = await exe(`SELECT * FROM mutton_masala_products`);
    console.log(mutton_masala);
    res.render("user/mutton_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"mutton_masala":mutton_masala});
});

route.get("/kanda_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var kanda_masala = await exe(`SELECT * FROM kanda_lasun_masala_products`);
    // console.log(kanda_masala);
    res.render("user/kanda_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"kanda_masala":kanda_masala});
});

route.get("/kitchen_king_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var kitchen_king = await exe(`SELECT * FROM kitchen_king_masala_products`);
    // console.log(kitchen_king);
    res.render("user/kitchen_king_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"kitchen_king":kitchen_king});
});

route.get("/kala_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var kala_masala = await exe(`SELECT * FROM kala_masala_products`);
    console.log(kala_masala);
    res.render("user/kala_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"kala_masala":kala_masala});
});

route.get("/biryani_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
   var biryani_masala = await exe(`SELECT * FROM biryani_masala_products`);
//   console.log(biryani_masala);
    res.render("user/biryani_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"biryani_masala":biryani_masala});
});

route.get("/egg_cury_masala",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var egg_cury = await exe(`SELECT * FROM egg_cury_masala_products`);
    // console.log(egg_cury);
    res.render("user/egg_cury_masala.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"egg_cury":egg_cury});
});

route.get("/instant_gravy_powder",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var quantitydata = await exe(`SELECT * FROM quantity`);
    var specificationdata = await exe(`SELECT * FROM specification`);
    var description = await exe(`SELECT * FROM description`);
    var instant_gravy = await exe(`SELECT * FROM instant_gravy_products`);
    console.log(instant_gravy);
    res.render("user/instant_gravy_powder.ejs",{"basic_information":basic_information[0],"quantitydata":quantitydata,"description":description,"specificationdata":specificationdata,"instant_gravy":instant_gravy});
});

route.get("/views_more",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var views_more = await exe(`SELECT * FROM our_products`);
    res.render("user/views_more.ejs",{"basic_information":basic_information[0],"views_more":views_more});
});

route.get("/gallery",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var gallery = await exe(`SELECT * FROM gallary_imgs`);
    var gallary_videos = await exe(`SELECT * FROM gallary_iframe_videos`);
    res.render("user/gallery.ejs",{"basic_information":basic_information[0],"gallery":gallery,"gallary_videos":gallary_videos});
});

route.get("/contact",async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    var our_branches = await exe(`SELECT * FROM our_branches`);
    var google_map_contact = await exe(`SELECT * FROM google_map_contact`);
    console.log(google_map_contact);
    res.render("user/contact.ejs",{"basic_information":basic_information[0],"our_branches":our_branches,"google_map_contact":google_map_contact});
});

route.post("/save_contact_us_user_side_form",async function(req,res){
    var d = req.body;
    await exe(`INSERT INTO user_contact_us (user_name,user_email,user_mobile,select_stat,user_requirment) VALUES ('${d.user_name}','${d.user_email}','${d.user_mobile}','${d.select_stat}','${d.user_requirment}')`);
    // res.send(req.body);
    res.redirect("/");
});

module.exports = route;