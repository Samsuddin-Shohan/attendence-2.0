const router = require('express').Router();
const {registrationController,loginController}= require('../controller/authController')


router.post('/login',loginController);
router.post('/registration',registrationController);

module.exports = router;