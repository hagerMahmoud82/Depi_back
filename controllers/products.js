const Product = require('../models/ProductSchema'); 

const getproducts = async (req, res) => {
  try {
    const products = await Product.find();  
    return res.status(200).json(products);  
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

module.exports = {
  getproducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};