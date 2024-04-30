var express = require("express");
var exe = require("./connection");
var route = express.Router();

function checkAdmin(req,res,next){
    if (req.session.admin_id == undefined) {
        res.redirect("/login");
    }
    if (req.session.admin_id != undefined) {
        next();
    }
}

route.get("/", checkAdmin ,function (req, res) {
    res.render("admin/home.ejs");
});

route.get("/logout",function(req,res){
    req.session.destroy((err)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.redirect("/login");
        }
    })
})

// route.get("/logout",function(req,res){
//     req.session.user_id = undefined;
//     res.redirect("/login");
// })



route.get("/basic_information",checkAdmin,async function(req,res){
    var basic_information = await exe(`SELECT * FROM basic_information`);
    // console.log(basic_information);
    res.render("admin/basic_information.ejs",{"basic_information":basic_information[0]});
});

route.post("/save_basic_information",checkAdmin,async function(req,res){
    var d = req.body;
    // var save_basic_information = await exe(`INSERT INTO basic_information(company_name,email1,email2,email3,mobile1,mobile2,facebook_link,instagram_link,twitter_link,youtube_link,skype_link,google_plus_link,company_link,description,company_address) VALUES ('${d.company_name}','${d.email1}','${d.email2}','${d.email3}','${d.mobile1}','${d.mobile2}','${d.facebook_link}','${d.instagram_link}','${d.twitter_link}','${d.youtube_link}','${d.skype_link}','${d.google_plus_link}','${d.company_link}','${d.description}','${d.company_address}')`);
    var update_basic_information = await exe(`UPDATE basic_information SET company_name = '${d.company_name}',email1 = '${d.email1}',email2 = '${d.email2}',email3 = '${d.email3}',mobile1 = '${d.mobile1}',mobile2 = '${d.mobile2}',facebook_link = '${d.facebook_link}',instagram_link = '${d.instagram_link}',twitter_link = '${d.twitter_link}',youtube_link = '${d.youtube_link}',skype_link = '${d.skype_link}',google_plus_link = '${d.google_plus_link}',company_link = '${d.company_link}',description = '${d.description}',company_address = '${d.company_address}' WHERE basic_infromation_id = '${d.basic_information_id}'`);
    res.redirect("/admin/basic_information");
});

route.get("/slider", checkAdmin , async function (req, res) {
    var slider_data = await exe(`SELECT * FROM slider_image`);
    // console.log(slider_data);
    res.render("admin/slider.ejs", { slider_data: slider_data });
});

route.post("/save_slider_images", checkAdmin , async function (req, res) {
    var d = req.body;
        var slider_image = new Date().getTime() + req.files.slider_image.name;
        req.files.slider_image.mv("public/encoded_img/" + slider_image);

        var slider_data = await exe(
            `INSERT INTO slider_image (slider_image) VALUES ('${slider_image}') `
        );
    res.redirect("/admin/slider");
});

route.get("/edit_slider_image/:slider_image_id", checkAdmin , async function (req, res) {
    var slider_image_id = req.params.slider_image_id;

    var edit_slider_image = await exe(
        `SELECT * FROM slider_image WHERE slider_image_id = '${slider_image_id}'`
    );
    // console.log(edit_slider_image);
    res.render("admin/edit_slider_image.ejs", {
        edit_slider_data: edit_slider_image,
    });
});

route.post("/update_slider_images", checkAdmin , async function (req, res) {
    var d = req.body;
    if (req.files) {
        var slider_image = new Date().getTime() + req.files.slider_image.name;
        req.files.slider_image.mv("public/encoded_img/" + slider_image);

        var update_slider_images = await exe(
            `UPDATE slider_image SET slider_image = '${slider_image}' WHERE slider_image_id = '${d.slider_image_id}'`
        );
    }
    res.redirect("/admin/slider");
});

route.get("/delete_slider_image/:slider_image_id", checkAdmin , async function (req, res) {
    var slider_image_id = req.params.slider_image_id;
    var delete_slider_image = await exe(
        `DELETE FROM slider_image WHERE slider_image_id = '${slider_image_id}' `
    );
    res.redirect("/admin/slider");
});

// What we do Title
route.get("/what_we_do_title",checkAdmin,async function(req,res){
    var what_we_do_title = await exe(`SELECT * FROM what_we_do_title`);
    res.render("admin/what_we_do_title.ejs",{"what_we_do_title":what_we_do_title});
});

route.post("/save_what_we_do_title",checkAdmin,async function(req,res){
    var d = req.body;
    var save_what_we_do_title = await exe(`INSERT INTO what_we_do_title (what_we_do_title,what_we_do_desc) VALUES ('${d.what_we_do_title}','${d.what_we_do_desc}')`);
    res.redirect("/admin/what_we_do_title");
});

route.get("/edit_what_we_do_title/:what_we_do_title_id",checkAdmin,async function(req,res){
    var what_we_do_title_id = req.params.what_we_do_title_id;
    var edit_what_we_do_title = await exe(`SELECT * FROM what_we_do_title WHERE what_we_do_title_id = '${what_we_do_title_id}'`);
    res.render("admin/edit_what_we_do_title.ejs",{"edit_what_we_do_title":edit_what_we_do_title});
});

route.post("/update_what_we_do_title",checkAdmin,async function(req,res){
    var d = req.body;
    var update_what_we_do_title = await exe(`UPDATE what_we_do_title SET what_we_do_title = '${d.what_we_do_title}',what_we_do_desc = '${d.what_we_do_desc}' WHERE what_we_do_title_id = '${d.what_we_do_title_id}'`);
    res.redirect("/admin/what_we_do_title");
});

route.get("/delete_what_we_do_title/:what_we_do_title_id",checkAdmin,async function(req,res){
    var what_we_do_title_id = req.params.what_we_do_title_id;
    var delete_what_we_do_title = await exe(`DELETE FROM what_we_do_title WHERE what_we_do_title_id = '${what_we_do_title_id}'`);
    res.redirect("/admin/what_we_do_title");
})

// Why we are best choice
route.get("/why_we_are_best_choice", checkAdmin , async function (req, res) {
    var why_we_are_best_choice = await exe(`SELECT * FROM why_we_are_best_choice`);
    res.render("admin/why_we_are_best_choice.ejs",{"why_we_are_best_choice":why_we_are_best_choice});
});

route.post("/save_why_we_are_best_choice", checkAdmin , async function (req, res) {
    var d = req.body;
    var why_we_best_choice_image = new Date().getTime() + req.files.why_we_best_choice_image.name;
    req.files.why_we_best_choice_image.mv("public/encoded_img/" + why_we_best_choice_image);
    var save_why_we_are_best_choice = await exe(
        `INSERT INTO why_we_are_best_choice (why_we_best_choice_title1,why_we_best_choice_title2,why_we_best_choice_desc,why_we_best_choice_feature1,why_we_best_choice_feature2,why_we_best_choice_feature3,why_we_best_choice_feature4,why_we_best_choice_feature5,why_we_best_choice_image) VALUES ('${d.why_we_best_choice_title1}','${d.why_we_best_choice_title2}','${d.why_we_best_choice_desc}','${d.why_we_best_choice_feature1}','${d.why_we_best_choice_feature2}','${d.why_we_best_choice_feature3}','${d.why_we_best_choice_feature4}','${d.why_we_best_choice_feature5}','${why_we_best_choice_image}')`
    );
    res.redirect("/admin/why_we_are_best_choice");
});

route.get("/edit_why_we_are_best_choice/:why_we_are_best_choice_id",checkAdmin,async function(req,res){
    var why_we_are_best_choice_id = req.params.why_we_are_best_choice_id;
    var edit_why_we_are_best_choice = await exe(`SELECT * FROM why_we_are_best_choice WHERE why_we_are_best_choice_id = '${why_we_are_best_choice_id}'`);
    res.render("admin/edit_why_we_are_best_choice.ejs",{"edit_why_we_are_best_choice":edit_why_we_are_best_choice});
});

route.post("/update_why_we_are_best_choice",checkAdmin,async function(req,res){
    var d = req.body;
    if (req.files) {
        var why_we_best_choice_image = new Date().getTime() + req.files.why_we_best_choice_image.name;
        req.files.why_we_best_choice_image.mv("public/encoded_img/" + why_we_best_choice_image);
        var update_why_we_are_best_choice = await exe(`UPDATE why_we_are_best_choice SET why_we_best_choice_image = '${why_we_best_choice_image}' WHERE why_we_are_best_choice_id = '${d.why_we_are_best_choice_id}'`);
    }
    var update_why_we_are_best_choice = await exe(`UPDATE why_we_are_best_choice SET why_we_best_choice_title1 = '${d.why_we_best_choice_title1}',why_we_best_choice_title2 = '${d.why_we_best_choice_title2}',why_we_best_choice_desc = '${d.why_we_best_choice_desc}',why_we_best_choice_feature1 = '${d.why_we_best_choice_feature1}',why_we_best_choice_feature2 = '${d.why_we_best_choice_feature2}',why_we_best_choice_feature3 = '${d.why_we_best_choice_feature3}',why_we_best_choice_feature4 = '${d.why_we_best_choice_feature4}',why_we_best_choice_feature5 = '${d.why_we_best_choice_feature5}' WHERE why_we_are_best_choice_id = '${d.why_we_are_best_choice_id}'`);
    res.redirect("/admin/why_we_are_best_choice");
});

route.get("/delete_why_we_are_best_choice/:why_we_are_best_choice_id",checkAdmin,async function(req,res){
    var why_we_are_best_choice_id = req.params.why_we_are_best_choice_id;
    var delete_why_we_are_best_choice = await exe(`DELETE FROM why_we_are_best_choice WHERE why_we_are_best_choice_id = '${why_we_are_best_choice_id}'`);
    res.redirect("/admin/why_we_are_best_choice");
})



// What We Do
route.get("/what_we_do", checkAdmin , async function (req, res) {
    var what_we_do = await exe(`SELECT * FROM what_we_do`);
    res.render("admin/what_we_do.ejs", { what_we_do: what_we_do });
});

route.post("/save_what_we_do", checkAdmin , async function (req, res) {
    var d = req.body;
    var what_we_do_image = new Date().getTime() + req.files.what_we_do_image.name;
        req.files.what_we_do_image.mv("public/encoded_img/" + what_we_do_image);
    var what_we_do_data = await exe(
        `INSERT INTO what_we_do(what_we_do_title,what_we_do_desc,what_we_do_image) VALUES ('${d.what_we_do_title}','${d.what_we_do_desc}','${what_we_do_image}')`
    );
    res.redirect("/admin/what_we_do");
});

route.get("/edit_what_we_do/:what_we_do_id", checkAdmin , async function (req, res) {
    var what_we_do_id = req.params.what_we_do_id;

    var edit_what_we_do = await exe(
        `SELECT * FROM what_we_do WHERE what_we_do_id = '${what_we_do_id}'`
    );
    res.render("admin/edit_what_we_do.ejs", { edit_what_we_do: edit_what_we_do });
});

route.post("/update_what_we_do", checkAdmin , async function (req, res) {
    var d = req.body;
    if (req.files) {
        var what_we_do_image =
            new Date().getTime() + req.files.what_we_do_image.name;
        req.files.what_we_do_image.mv("public/encoded_img/" + what_we_do_image);
        var what_we_do_data = await exe(
            `UPDATE what_we_do SET what_we_do_image = '${what_we_do_image}' WHERE what_we_do_id = '${d.what_we_do_id}'`
        );
    }
    var what_we_do_data = await exe(
        `UPDATE what_we_do SET what_we_do_title = '${d.what_we_do_title}',what_we_do_desc = '${d.what_we_do_desc}' WHERE what_we_do_id = '${d.what_we_do_id}'`
    );
    res.redirect("/admin/what_we_do");
});

route.get("/delete_what_we_do/:what_we_do_id", checkAdmin , async function (req, res) {
    var what_we_do_id = req.params.what_we_do_id;
    var delete_what_we_do = await exe(
        `DELETE FROM what_we_do WHERE what_we_do_id = '${what_we_do_id}'`
    );
    res.redirect("/admin/what_we_do");
});

// Our Services
route.get("/our_services", checkAdmin , async function (rea, res) {
    var our_services = await exe(`SELECT * FROM our_services`);
    res.render("admin/our_services.ejs", { our_services: our_services });
});

route.post("/save_our_services", checkAdmin , async function (req, res) {
    var d = req.body;

    if (req.files) {
        var our_services_image =
            new Date().getTime() + req.files.our_services_image.name;
        req.files.our_services_image.mv("public/encoded_img/" + our_services_image);
        var our_services_data = await exe(
            `INSERT INTO our_services(our_services_image) VALUES ('${our_services_image}')`
        );
    }
    var our_services_data = await exe(
        `INSERT INTO our_services(our_services_title) VALUES ('${d.our_services_title}')`
    );
    res.redirect("/admin/our_services");
});

route.get("/edit_our_services/:our_services_id", checkAdmin , async function (req, res) {
    var our_services_id = req.params.our_services_id;

    var edit_our_services = await exe(
        `SELECT * FROM our_services WHERE our_services_id = '${our_services_id}'`
    );
    res.render("admin/edit_our_services.ejs", {
        edit_our_services: edit_our_services,
    });
});

route.post("/update_our_services", checkAdmin , async function (req, res) {
    var d = req.body;
    if (req.files) {
        var our_services_image =
            new Date().getTime() + req.files.our_services_image.name;
        req.files.our_services_image.mv("public/encoded_img/" + our_services_image);
        var update_our_services = await exe(
            `UPDATE our_services SET our_services_image = '${our_services_image}' WHERE our_services_id = '${d.our_services_id}'`
        );
    }
    var update_our_services = await exe(
        `UPDATE our_services SET our_services_title = '${d.our_services_title}' WHERE our_services_id = '${d.our_services_id}'`
    );
    res.redirect("/admin/our_services");
});

route.get("/delete_our_services/:our_services_id", checkAdmin , async function (req, res) {
    var our_services_id = req.params.our_services_id;
    var delete_our_services = await exe(
        `DELETE FROM our_services WHERE our_services_id = '${our_services_id}'`
    );
    res.redirect("/admin/our_services");
});


/*******About US *********/
route.get("/about_us",checkAdmin, async function (req, res) {
    var about = await exe(`SELECT * FROM about_us`);
    var obj = {
      about: about,
    };
    res.render("admin/about_us/about.ejs", obj);
  });
  
  route.post("/save_about",checkAdmin, async function (req, res) {
    var d = req.body;
    var about_banner = new Date().getTime() + req.files.about_banner.name;
    req.files.about_banner.mv("public/encoded_img/" + about_banner);
    var about_img1 = new Date().getTime() + req.files.about_img1.name;
    req.files.about_img1.mv("public/encoded_img/" + about_img1);
    var about_img2 = new Date().getTime() + req.files.about_img2.name;
    req.files.about_img2.mv("public/encoded_img/" + about_img2);
    var sql = `INSERT INTO about_us(about_banner,about_img1,about_discription1,about_img2,about_discription2)VALUES('${about_banner}','${about_img1}','${d.about_discription1}','${about_img2}','${d.about_discription2}')`;
    var data = await exe(sql);
    res.redirect("/admin/about_us");
  });
  
  route.get("/about/edit_about/:id",checkAdmin, async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM about_us WHERE about_id='${id}'`;
    var about = await exe(sql);
  
    var obj = { about: about };
  
    res.render("admin/about_us/edit_about.ejs", obj);
  });
  route.post("/about/edit_about/update_about",checkAdmin, async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var about_banner = new Date().getTime() + req.files.about_banner.name;
      req.files.about_banner.mv("public/encoded_img/" + about_banner);
      var about_img1 = new Date().getTime() + req.files.about_img1.name;
      req.files.about_img1.mv("public/encoded_img/" + about_img1);
      var about_img2 = new Date().getTime() + req.files.about_img2.name;
      req.files.about_img2.mv("public/encoded_img/" + about_img2);
  
      var sql = `UPDATE about_us SET about_banner='${about_banner}',about_img1='${about_img1}',about_img2='${about_img2}' WHERE about_id='${d.about_id}'`;
      await exe(sql);
    }
    var sql = `UPDATE about_us SET about_discription1='${d.about_discription1}',about_discription2='${d.about_discription2}' WHERE about_id ='${d.about_id}'`;
    await exe(sql);
    res.redirect("/admin/about_us");
  });
  route.get("/about/delete_about/:id",checkAdmin, async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM about_us WHERE about_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/about_us");
  });


  // GALLARY SECTION START



route.get("/gallary",checkAdmin,async function(req,res){
    var gallary_images = await exe("SELECT * FROM gallary_imgs");
    var gallary_yt_videos = await exe("SELECT * FROM gallary_iframe_videos");
    res.render("admin/gallary/gallary.ejs",{"gallary_images":gallary_images,"gallary_yt_videos":gallary_yt_videos});
});

route.post("/save_gallary",checkAdmin,async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+req.files.gallary_image.name;
    req.files.gallary_image.mv("public/gallary_img/" + file_name);
    var data  = await exe(`INSERT INTO gallary_imgs(gallary_desc,gallary_image) VALUES ('${d.gallary_desc}','${file_name}')`);
    // res.send(d);
    res.redirect("/admin/gallary");
});


//  DELETE GALLARY IMAGE

route.get("/delete_slider/:id",checkAdmin,async function(req,res){
    var data = await exe(`DELETE FROM gallary_imgs WHERE gallary_imgs_id = '${req.params.id}'`);
    res.redirect("/admin/gallary");
});


// EDIT GALLARY

route.get("/edit_slider/:id",checkAdmin,async function(req,res){
    var data = await exe(`SELECT * FROM gallary_imgs WHERE gallary_imgs_id = '${req.params.id}'`);
    res.render("admin/gallary/update_gallary.ejs",{"gallary_images_dataa":data});
});

route.post("/save_update_gallary",checkAdmin,async function(req,res){
    var d = req.body;
    if(req.files)
    {
    var file_name = new Date().getTime()+req.files.gallary_image.name;
    req.files.gallary_image.mv("public/gallary_img/" + file_name);
    var data  = await exe(`UPDATE gallary_imgs SET gallary_image='${file_name}' WHERE gallary_imgs_id = '${d.update_id}'`);
    }
    res.redirect("/admin/gallary");
});



// GALLARY YOU TUBE VIDEO

route.post("/save_gallary_iframe_videos",checkAdmin,async function(req,res){
    var d = req.body;
    var data= await exe(`INSERT INTO gallary_iframe_videos (gallary_video_link,gallary_video_desc) VALUES ('${d.gallary_video_link}','${d.gallary_video_desc}')`);
    // res.send(req.body);
    res.redirect("/admin/gallary");
});

// DELETE GALLARY YOU TUBE VIDEO
route.get("/delete_yt_Video/:id",checkAdmin,async function(req,res){
    var data = await exe(`DELETE FROM gallary_iframe_videos WHERE gallary_iframe_videos_id = '${req.params.id}'`);
    res.redirect("/admin/gallary");
});


// EDIT GALLARY YOU TUBE VIDEO

route.get("/edit_yt_Video/:id",checkAdmin,async function(req,res){
    var gallary_yt_video = await exe(`SELECT * FROM gallary_iframe_videos WHERE gallary_iframe_videos_id = '${req.params.id}'`);
    res.render("admin/gallary/edit_yt_Video.ejs",{"gallary_yt_video":gallary_yt_video[0]});
});

route.post("/save_update_yt_videos",checkAdmin,async function(req,res){
    var d = req.body;
    var data = await exe(`UPDATE gallary_iframe_videos SET gallary_video_link='${d.gallary_video_link}', gallary_video_desc='${d.gallary_video_desc}' WHERE gallary_iframe_videos_id = '${d.update_yt_vi_id}'`)
    // res.send(req.body);
    res.redirect(`/admin/gallary`);
});


// GALLARY SECTION END


// CONTACT US SECTION START


// OUR BRANCHES

route.get("/contact_us",checkAdmin,async function(req,res){
    var our_branches_list = await exe(`SELECT * FROM our_branches`);
    var user_requirment_list = await exe(`SELECT * FROM user_contact_us`);
    var contact_us_google_map = await exe(`SELECT * FROM google_map_contact`);
    res.render("admin/contact_us/our_branches.ejs",{"our_branches_list":our_branches_list,"contact_us_google_map":contact_us_google_map[0],"user_requirment_list":user_requirment_list});
});

route.post("/save_our_branches",checkAdmin,async function(req,res){
    var d = req.body;
    var data = await exe(`INSERT INTO our_branches (shop_place,shop_name,shop_mobile_no,shop_email,shop_address) VALUES ('${d.shop_place}','${d.shop_name}','${d.shop_mobile_no}','${d.shop_email}','${d.shop_address}')`);
    // res.send(d)
    res.redirect("/admin/contact_us");
});


// DELETE OUR BRANCHES

route.get("/delete_our_branch/:id",checkAdmin,async function(req,res){
    await exe(`DELETE FROM our_branches WHERE our_branches_id = '${req.params.id}'`);
    res.redirect("/admin/contact_us");
});


// EDIT OUR BRANCHES
route.get("/edit_our_branch/:id",checkAdmin,async function(req,res){
    var our_branches_data = await exe(`SELECT * FROM our_branches WHERE our_branches_id = '${req.params.id}'`);
    res.render("admin/contact_us/edit_our_branch.ejs",{"edit_branch_data":our_branches_data[0]});
});

route.post("/Update_our_branches_save",checkAdmin,async function(req,res){
    var d = req.body;
    await exe(`UPDATE our_branches SET shop_place ='${d.shop_place}',shop_name ='${d.shop_name}',shop_mobile_no ='${d.shop_mobile_no}',shop_email ='${d.shop_email}',shop_address ='${d.shop_address}' WHERE our_branches_id = '${d.update_branch_id}}'`)
    // res.send(d);
    res.redirect("/admin/contact_us");
});

// END OUR BRANCHES

// GOOGLE MAP LINK SECTION
route.post("/save_contact_ud_google_map_link",checkAdmin,async function(req,res){
    var d = req.body;
    var data =  await exe(`UPDATE google_map_contact SET google_map_link='${d.google_map_link}'`);
    res.redirect("/admin/contact_us");
});

route.get("/delete_customer/:id",checkAdmin,async function(req,res){
    await exe(`DELETE FROM user_contact_us WHERE user_contact_us_id = '${req.params.id}'`);
    res.redirect("/admin/contact_us");
});

// Products Page

var productsRoute = require("./products_routes");
route.use("/",productsRoute);

route.get("/products",checkAdmin, function (req, res) {
    res.render("admin/products/products.ejs");
});

  

module.exports = route;

// CREATE TABLE basic_information(basic_information_id INT AUTO_INCREMENT PRIMARY KEY,company_name VARCHAR(100),email1 VARCHAR(100),email2 VARCHAR(100),email3 VARCHAR(100),mobile1 VARCHAR(15),mobile2 VARCHAR(15),facebook_link VARCHAR(500),instagram_link VARCHAR(500),twitter_link VARCHAR(500),youtube_link VARCHAR(500),skype_link VARCHAR(500),google_plus_link VARCHAR(500),company_link VARCHAR(500),description VARCHAR(500),company_address VARCHAR(500));

// CREATE TABLE slider_image(slider_image_id INT PRIMARY KEY AUTO_INCREMENT, slider_image VARCHAR(1000));
// CREATE TABLE our_services (our_services_id INT PRIMARY KEY AUTO_INCREMENT, our_services_title VARCHAR(100), our_services_image VARCHAR(1000));
// CREATE TABLE what_we_do (what_we_do_id INT PRIMARY KEY AUTO_INCREMENT, what_we_do_title VARCHAR(100),what_we_do_desc VARCHAR(1000), what_we_do_image VARCHAR(1000));
// CREATE TABLE why_we_are_best_choice (why_we_are_best_choice_id INT PRIMARY KEY AUTO_INCREMENT, why_we_best_choice_title1 VARCHAR(100),why_we_best_choice_title2 VARCHAR(100),why_we_best_choice_desc VARCHAR(1000),why_we_best_choice_feature1 VARCHAR(200),why_we_best_choice_feature2 VARCHAR(200),why_we_best_choice_feature3 VARCHAR(200),why_we_best_choice_feature4 VARCHAR(200),why_we_best_choice_feature5 VARCHAR(200),why_we_best_choice_image VARCHAR(1000));

// CREATE TABLE what_we_do_title (what_we_do_title_id INT PRIMARY KEY AUTO_INCREMENT, what_we_do_title VARCHAR(200), what_we_do_desc VARCHAR(500));
