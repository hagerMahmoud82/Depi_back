const express = require('express');
const router = express.Router();
const { deleteUser } = require('../controllers/users'); 


router.delete('/:id', deleteUser);


module.exports = router;
