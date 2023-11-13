const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const multer = require('multer');
const checkUserMW = require('../middlewares/checkUserMW');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const imagesFields =upload.fields([
  { name: 'pictureFile', maxCount: 1 },
  { name: 'coverFile', maxCount: 1 },
  { name: 'projectImagesFile', maxCount: 10 } // Assuming max 10 files for example
])

router.get('/', userController.getAllUsers)

router.post("/get",checkUserMW,userController.getUser)

router.get("/initalize",checkUserMW,userController.handelInitalizeUser)


router.put("/update",imagesFields,checkUserMW,userController.handleUserDataUpdate,)






module.exports = router