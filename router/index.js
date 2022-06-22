const router = require('express').Router();
const authROuter = require('./authRouter');

router.use('/api/v1/auth',authROuter);



module.exports = router;