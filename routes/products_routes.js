var express = require("express");
var route = express.Router();
var exe = require("./connection");

function checkAdmin(req,res,next){
  if (req.session.admin_id == undefined) {
      res.redirect("/login");
  }
  if (req.session.admin_id != undefined) {
      next();
  }
}

/*****************************Products******************************/
/****** Quantity And Specification ******** */
/****** Quantity ******** */
route.get("/quantity&specification",checkAdmin,async function (req, res) {
  var quantitydata = await exe(`SELECT * FROM quantity`);
  var specificationdata = await exe(`SELECT * FROM specification`);
  var obj = {
    quantitydata: quantitydata,
    specificationdata: specificationdata,
  };

  res.render(
    "admin/products/Quantity&Specification/quantity&specification.ejs",
    obj
  );
});

route.post("/save_quantity", checkAdmin ,async function (req, res) {
  var d = req.body;
  var sql = `INSERT INTO quantity(quantity) VALUES('${d.quantity}')`;
  var quantitydata = await exe(sql);
  res.redirect("/admin/quantity&specification");
});
route.get(
  "/products/Quantity&Specification/edit_quantity/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM quantity WHERE quantity_id ='${id}'`;
    var quantitydata = await exe(sql);
    var obj = { quantitydata: quantitydata };

    res.render("admin/products/Quantity&Specification/edit_quantity.ejs", obj);
  }
);
route.post(
  "/products/Quantity&Specification/edit_quantity/update_quantity",checkAdmin,
  async function (req, res) {
    var d = req.body;
    var sql = `UPDATE quantity SET quantity='${d.quantity}' WHERE quantity_id ='${d.quantity_id}'`;
    await exe(sql);
    res.redirect("/admin/quantity&specification");
  }
);
route.get(
  "/products/Quantity&Specification/delete_quantity/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM quantity WHERE quantity_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/quantity&specification");
  }
);

/******Specification ******** */
route.post("/save_specification", checkAdmin ,async function (req, res) {
  var d = req.body;
  var sql = `INSERT INTO specification(specification) VALUES('${d.specification}')`;
  var specificationdata = await exe(sql);
  res.redirect("/admin/quantity&specification");
});
route.get(
  "/products/Quantity&Specification/edit_specification/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM specification WHERE specification_id ='${id}'`;
    var specificationdata = await exe(sql);
    var obj = { specificationdata: specificationdata };

    res.render(
      "admin/products/Quantity&Specification/edit_specification.ejs",
      obj
    );
  }
);
route.post(
  "/products/Quantity&Specification/edit_specification/update_specification",checkAdmin,
  async function (req, res) {
    var d = req.body;
    var sql = `UPDATE specification SET specification='${d.specification}' WHERE specification_id ='${d.specification_id}'`;
    await exe(sql);
    res.redirect("/admin/quantity&specification");
  }
);
route.get(
  "/products/Quantity&Specification/delete_specification/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM specification WHERE specification_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/quantity&specification");
  }
);

/******Description******** */
route.get("/description", checkAdmin ,async function (req, res) {
  var description = await exe(`SELECT * FROM description`);
  var obj = { description: description };

  res.render("admin/products/Description/description.ejs", obj);
});
route.post("/save_description", checkAdmin ,async function (req, res) {
  var d = req.body;
  var sql = `INSERT INTO description(description) VALUES('${d.description}')`;
  var description = await exe(sql);
  res.redirect("/admin/description");
});

route.get(
  "/products/Description/edit_description/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM description WHERE description_id ='${id}'`;
    var description = await exe(sql);
    var obj = { description: description };

    res.render("admin/products/Description/edit_description.ejs", obj);
  }
);
route.post(
  "/products/Description/edit_description/update_description",checkAdmin,
  async function (req, res) {
    var d = req.body;
    var sql = `UPDATE description SET description='${d.description}' WHERE description_id ='${d.description_id}'`;
    await exe(sql);
    res.redirect("/admin/description");
  }
);

/******* Red Chili Powder************/
route.get("/red_chilli", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM red_chilli_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Red_Chilli_Powder/Red_Chilli_Powder.ejs", obj);
});

const fs = require("fs");
// Assuming exe function executes SQL queries and req.files contain the uploaded files

route.post("/save_red_chilli", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO red_chilli_products(banner_img,img1,img2,img3,img4,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/red_chilli");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Red_Chilli_Powder/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM red_chilli_products WHERE red_chilli_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Red_Chilli_Powder/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Red_Chilli_Powder/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE red_chilli_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE red_chilli_products_id='${d.red_chilli_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE red_chilli_products SET banner_img='${banner_img}',img1='${img1}',
    img2='${img2}',img3='${img3}',img4='${img4}',
    heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
    heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}', 
    WHERE red_chilli_products_id ='${d.red_chilli_products_id}'`;
    await exe(sql);
    res.redirect("/admin/red_chilli");
  }
);

route.get(
  "/products/Red_Chilli_Powder/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM red_chilli_products WHERE red_chilli_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/red_chilli");
  }
);

/*******Turmeric Powder************/
route.get("/Turmeric_Powder", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM turmeric_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Turmeric_Powder/Turmeric_Powder.ejs", obj);
});

route.post("/save_turmeric_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO turmeric_products(banner_img,img1,img2,img3,img4,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Turmeric_Powder");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Turmeric_Powder/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM turmeric_products WHERE turmeric_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Turmeric_Powder/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Turmeric_Powder/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE turmeric_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE turmeric_products_id='${d.turmeric_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE turmeric_products SET heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE turmeric_products_id ='${d.turmeric_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Turmeric_Powder");
  }
);

route.get(
  "/products/Turmeric_Powder/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM turmeric_products WHERE turmeric_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Turmeric_Powder");
  }
);

/******* Coriander Powder************/
route.get("/Coriander_Powder", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM coriander_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Coriander_Powder/Coriander_Powder.ejs", obj);
});

route.post("/save_Coriander_Powder", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO coriander_products(banner_img,img1,img2,img3,img4,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Coriander_Powder");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Coriander_Powder/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM coriander_products WHERE coriander_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Coriander_Powder/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Coriander_Powder/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE coriander_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE coriander_products_id='${d.coriander_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE coriander_products SET heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE coriander_products_id ='${d.coriander_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Coriander_Powder");
  }
);

route.get(
  "/products/Coriander_Powder/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM coriander_products WHERE coriander_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Coriander_Powder");
  }
);

/*******Chicken Masala************/
route.get("/Chicken_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM chicken_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Chicken_Masala/Chicken_Masala.ejs", obj);
});

route.post("/save_chicken_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO chicken_masala_products(banner_img,img1,img2,img3,img4,about_description,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.about_description}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Chicken_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Chicken_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM chicken_masala_products WHERE chicken_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Chicken_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Chicken_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE chicken_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE chicken_masala_products_id='${d.chicken_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE chicken_masala_products SET about_description='${d.about_description}',
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE chicken_masala_products_id ='${d.chicken_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Chicken_Masala");
  }
);

route.get(
  "/products/Chicken_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM chicken_masala_products WHERE chicken_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Chicken_Masala");
  }
);

/*******Mutton Masala************/
route.get("/Mutton_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM mutton_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Mutton_Masala/Mutton_Masala.ejs", obj);
});

route.post("/save_mutton_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO mutton_masala_products(banner_img,img1,img2,img3,img4,about_description,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.about_description}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Mutton_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Mutton_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM mutton_masala_products WHERE mutton_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Mutton_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Mutton_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE mutton_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE mutton_masala_products_id='${d.mutton_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE mutton_masala_products SET about_description='${d.about_description}', 
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE mutton_masala_products_id ='${d.mutton_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Mutton_Masala");
  }
);

route.get(
  "/products/Mutton_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM mutton_masala_products WHERE mutton_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Mutton_Masala");
  }
);

/*******Kanda Lasun Masala************/
route.get("/Kanda_Lasun_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM kanda_lasun_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Kanda_Lasun_Masala/Kanda_Lasun_Masala.ejs", obj);
});

route.post("/save_kanda_lasun_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO kanda_lasun_masala_products(banner_img,img1,img2,img3,img4,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Kanda_Lasun_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Kanda_Lasun_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM kanda_lasun_masala_products WHERE kanda_lasun_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Kanda_Lasun_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Kanda_Lasun_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE kanda_lasun_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE kanda_lasun_masala_products_id='${d.kanda_lasun_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE kanda_lasun_masala_products SET 
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE kanda_lasun_masala_products_id ='${d.kanda_lasun_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Kanda_Lasun_Masala");
  }
);

route.get(
  "/products/Kanda_Lasun_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM kanda_lasun_masala_products WHERE kanda_lasun_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Kanda_Lasun_Masala");
  }
);

/*******Kitchen King Masala************/
route.get("/Kitchen_King_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM kitchen_king_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Kitchen_King_Masala/Kitchen_King_Masala.ejs", obj);
});

route.post("/save_kitchen_king_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO kitchen_king_masala_products(banner_img,img1,img2,img3,img4,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Kitchen_King_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Kitchen_King_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM kitchen_king_masala_products WHERE kitchen_king_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Kitchen_King_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Kitchen_King_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE kitchen_king_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE kitchen_king_masala_products_id='${d.kitchen_king_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE kitchen_king_masala_products SET 
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}' 
  WHERE kitchen_king_masala_products_id ='${d.kitchen_king_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Kitchen_King_Masala");
  }
);

route.get(
  "/products/Kitchen_King_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM kitchen_king_masala_products WHERE kitchen_king_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Kitchen_King_Masala");
  }
);

/*******Kala Masala************/
route.get("/Kala_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM kala_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Kala_Masala/Kala_Masala.ejs", obj);
});

route.post("/save_kala_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO kala_masala_products(banner_img,img1,img2,img3,img4,about_description,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.about_description}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Kala_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get("/products/Kala_Masala/edit_products/:id", checkAdmin ,async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM kala_masala_products WHERE kala_masala_products_id ='${id}'`;
  var data = await exe(sql);
  var obj = { data: data };

  res.render("admin/products/Kala_Masala/edit_products.ejs", obj);
});
route.post(
  "/products/Kala_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE kala_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE kala_masala_products_id='${d.kala_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE kala_masala_products SET about_description='${d.about_description}',
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE kala_masala_products_id ='${d.kala_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Kala_Masala");
  }
);

route.get(
  "/products/Kala_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM kala_masala_products WHERE kala_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Kala_Masala");
  }
);

/*******Biryani Masala************/
route.get("/Biryani_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM biryani_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Biryani_Masala/Biryani_Masala.ejs", obj);
});

route.post("/save_biryani_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    var img3 = new Date().getTime() + req.files.img3.name;
    req.files.img3.mv("public/images/" + img3);
    var img4 = new Date().getTime() + req.files.img4.name;
    req.files.img4.mv("public/images/" + img4);
    var sql = `INSERT INTO biryani_masala_products(banner_img,img1,img2,img3,img4,about_description,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${img3}','${img4}','${d.about_description}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img3) {
      const oldImg3Path = "public/images/" + req.body.old_img3;
      fs.unlink(oldImg3Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img3 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img4) {
      const oldImg4Path = "public/images/" + req.body.old_img4;
      fs.unlink(oldImg4Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img4 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Biryani_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Biryani_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM biryani_masala_products WHERE biryani_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Biryani_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Biryani_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var img3 = new Date().getTime() + req.files.img3.name;
      req.files.img3.mv("public/images/" + img3);
      var img4 = new Date().getTime() + req.files.img4.name;
      req.files.img4.mv("public/images/" + img4);
      var sql = `UPDATE biryani_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}',img3='${img3}',img4='${img4}' WHERE biryani_masala_products_id='${d.biryani_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE biryani_masala_products SET  about_description='${d.about_description}',
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE biryani_masala_products_id ='${d.biryani_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Biryani_Masala");
  }
);

route.get(
  "/products/Biryani_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM biryani_masala_products WHERE biryani_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Biryani_Masala");
  }
);

/*******Egg Cury Masala************/
route.get("/Egg_Cury_Masala", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM egg_cury_masala_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Egg_Cury_Masala/Egg_Cury_Masala.ejs", obj);
});

route.post("/save_egg_cury_masala_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);
    
    var sql = `INSERT INTO egg_cury_masala_products(banner_img,img1,img2,heading1,description1,heading2,heading3,heading4)
          VALUES('${banner_img}','${img1}','${img2}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    
    res.redirect("/admin/Egg_Cury_Masala");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Egg_Cury_Masala/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM egg_cury_masala_products WHERE egg_cury_masala_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Egg_Cury_Masala/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Egg_Cury_Masala/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      
      var sql = `UPDATE egg_cury_masala_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}' WHERE egg_cury_masala_products_id='${d.egg_cury_masala_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE egg_cury_masala_products SET heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}' WHERE egg_cury_masala_products_id ='${d.egg_cury_masala_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Egg_Cury_Masala");
  }
);

route.get(
  "/products/Egg_Cury_Masala/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM egg_cury_masala_products WHERE egg_cury_masala_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Egg_Cury_Masala");
  }
);

/*******Instant Gravy Powder************/
route.get("/Instant_Gravy", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM instant_gravy_products`);
  var obj = {
    data: data,
  };
  res.render(
    "admin/products/Instant_Gravy_Powder/Instant_Gravy_Powder.ejs",
    obj
  );
});

route.post("/save_instant_gravy_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var banner_img = new Date().getTime() + req.files.banner_img.name;
    req.files.banner_img.mv("public/images/" + banner_img);
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var img2 = new Date().getTime() + req.files.img2.name;
    req.files.img2.mv("public/images/" + img2);

    var sql = `INSERT INTO instant_gravy_products(banner_img,img1,img2,heading1,description1,heading2,heading3,heading4,heading5)
          VALUES('${banner_img}','${img1}','${img2}','${d.heading1}','${d.description1}','${d.heading2}','${d.heading3}','${d.heading4}','${d.heading5}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist
    if (req.body.old_banner_img) {
      const oldBannerImagePath = "public/images/" + req.body.old_banner_img;
      fs.unlink(oldBannerImagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old banner image file has been removed successfully");
        }
      });
    }
    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }
    if (req.body.old_img2) {
      const oldImg2Path = "public/images/" + req.body.old_img2;
      fs.unlink(oldImg2Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img2 file has been removed successfully");
        }
      });
    }
    res.redirect("/admin/Instant_Gravy");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Instant_Gravy_Powder/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM instant_gravy_products WHERE instant_gravy_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Instant_Gravy_Powder/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Instant_Gravy_Powder/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var banner_img = new Date().getTime() + req.files.banner_img.name;
      req.files.banner_img.mv("public/images/" + banner_img);
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);
      var img2 = new Date().getTime() + req.files.img2.name;
      req.files.img2.mv("public/images/" + img2);
      var sql = `UPDATE instant_gravy_products SET banner_img='${banner_img}',img1='${img1}',img2='${img2}' WHERE instant_gravy_products_id='${d.instant_gravy_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE instant_gravy_products SET 
  heading1='${d.heading1}',description1='${d.description1}',heading2='${d.heading2}',
  heading3='${d.heading3}',heading4='${d.heading4}',heading5='${d.heading5}'
  WHERE instant_gravy_products_id ='${d.instant_gravy_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Instant_Gravy");
  }
);

route.get(
  "/products/Instant_Gravy_Powder/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM instant_gravy_products WHERE instant_gravy_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Instant_Gravy");
  }
);

/*******Our Products************/
route.get("/Our_Products", checkAdmin ,async function (req, res) {
  var data = await exe(`SELECT * FROM our_products`);
  var obj = {
    data: data,
  };
  res.render("admin/products/Our_Products/Our_Products.ejs", obj);
});

route.post("/save_our_products", checkAdmin ,async function (req, res) {
  try {
    var d = req.body;
    var img1 = new Date().getTime() + req.files.img1.name;
    req.files.img1.mv("public/images/" + img1);
    var sql = `INSERT INTO our_products(img1,heading1) VALUES('${img1}','${d.heading1}')`;
    await exe(sql); // Execute SQL query
    // Delete old images if they exist

    if (req.body.old_img1) {
      const oldImg1Path = "public/images/" + req.body.old_img1;
      fs.unlink(oldImg1Path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Old img1 file has been removed successfully");
        }
      });
    }

    res.redirect("/admin/Our_Products");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

route.get(
  "/products/Our_Products/edit_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM our_products WHERE our_products_id ='${id}'`;
    var data = await exe(sql);
    var obj = { data: data };

    res.render("admin/products/Our_Products/edit_products.ejs", obj);
  }
);
route.post(
  "/products/Our_Products/edit_products/update_products",checkAdmin,
  async function (req, res) {
    var d = req.body;
    if (req.files != null) {
      var img1 = new Date().getTime() + req.files.img1.name;
      req.files.img1.mv("public/images/" + img1);

      var sql = `UPDATE our_products SET img1='${img1}' WHERE our_products_id='${d.our_products_id}'`;
      await exe(sql);
    }

    var sql = `UPDATE our_products SET heading1='${d.heading1}' WHERE our_products_id ='${d.our_products_id}'`;
    await exe(sql);
    res.redirect("/admin/Our_Products");
  }
);

route.get(
  "/products/Our_Products/delete_products/:id",checkAdmin,
  async function (req, res) {
    var id = req.params.id;
    var sql = `DELETE FROM our_products WHERE our_products_id='${id}'`;
    await exe(sql);
    res.redirect("/admin/Our_Products");
  }
);

module.exports = route;
