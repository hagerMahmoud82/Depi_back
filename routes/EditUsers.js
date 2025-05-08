const express = require('express');
const router = express.Router();
const { editUser } = require('../controllers/users');


router.put('/:id', editUser);

module.exports = router;