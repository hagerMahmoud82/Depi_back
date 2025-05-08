const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const { products_routes } = require("./routes/products_routes");
const  userRoutes  = require('./routes/delete_users');
const  EditUsers = require('./routes/EditUsers')

const app = express();
const DB = process.env.DB;
mongoose.connect(DB)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((e) => {
    console.log(`DB Disconnected with Error: ${e}`);
  });

app.use(express.json());
app.use(cors());
app.use('/api/users', EditUsers);
app.use('/api/users', userRoutes);
app.use("/api/products", products_routes);
app.use((req, res) => {
  return res.status(500).json({
    status: 500,
    data: { data: null, message: "invalid route" },
  });
});



const PORT = 3000;
module.exports = app;

app.listen(PORT, () =>{console.log("server connected")});