const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const authROuter = require('./authRouter');
const userRouter = require('./userROuter');

router.use('/api/v1/auth', authROuter);
router.use('/api/v1/user', authenticate, userRouter);

module.exports = router;
