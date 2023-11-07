const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', userController.getAllUsers)



router.post("/get",userController.getUser)
router.post("/initalize",userController.handelInitalizeUser)


const imagesFields =upload.fields([
  { name: 'pictureFile', maxCount: 1 },
  { name: 'coverFile', maxCount: 1 },
  { name: 'projectImagesFile', maxCount: 10 } // Assuming max 10 files for example
])


router.put("/update",imagesFields,userController.handleUserDataUpdate)






module.exports = router