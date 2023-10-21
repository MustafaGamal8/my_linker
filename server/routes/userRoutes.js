const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');





router.get('/', userController.getAllUser)

router.put("/edit", userController.editUser);






module.exports = router