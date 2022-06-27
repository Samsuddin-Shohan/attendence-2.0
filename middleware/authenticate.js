const User = require('../model/User');
const jwt = require('jsonwebtoken');
const error = require('../utils/error');
async function authenticate(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw error('Unauthorized', 401);
    }

    token = token.split(' ')[1];
    // console.log(token);
    const decoded = jwt.verify(token, 'secret-key');
    const user = await User.findById(decoded._id);
    if (!user) {
      throw error('Unauthorized', 401);
    }
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
}
module.exports = authenticate;
