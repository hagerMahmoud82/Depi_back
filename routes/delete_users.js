const express = require('express');
const router = express.Router();
const { deleteUser } = require('../controllers/users'); 


router.delete('users/:id', deleteUser);


module.exports = router;