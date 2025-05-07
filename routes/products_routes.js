const express = require("express");
const router = express.Router();
const { getproducts, getSingleProduct } = require("../controllers/products");

router.route("/").get(getproducts); 
router.route("/:id").get(getSingleProduct); 
module.exports = {
  products_routes: router,
};
