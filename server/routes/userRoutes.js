const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', userController.getAllUsers)



router.post("/get",userController.getUser)
router.post("/initalize",userController.handelInitalizeUser)
router.put("/update",upload.fields([{ name: 'pictureFile' }, { name: 'coverFile' }, { name: 'projectImageFiles' }]),userController.handleUserDataUpdate)






module.exports = router