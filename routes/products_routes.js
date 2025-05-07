const express = require("express");
const router = express.Router();
const { getproducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/products");
const checkToken = require("../middleware/auth");


router.route("/").get(getproducts);

router.route("/:id").get(getSingleProduct);

router.route("/:id").put(updateProduct);


router.route("/:id").delete(deleteProduct);

module.exports = {
  products_routes: router,
};
