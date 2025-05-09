const express = require("express");
const router = express.Router();

const { getproducts, getSingleProduct, addNewProduct } = require("../controllers/products");

router.get("/", getproducts);
router.post("/", addNewProduct);
router.get("/:id", getSingleProduct);


module.exports = {
  products_routes: router,
};
