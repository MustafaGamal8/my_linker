const express = require('express');
const router = express.Router();

const imagesController = require('../controllers/imagesController');


router.get('/:id',imagesController.getImage)


module.exports = router