const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');



router.get("/", profileController.getProfile);
router.post("/edit", profileController.editProfile);











module.exports = router