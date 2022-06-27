const User = require('../model/User');
const { findById, findOne } = require('mongoose');
const error = require('../utils/error');

async function findUserByProperty(key, value) {
  let user;
  if (key == '_id') {
    return (user = await User.findById(value));
  }
  return (user = await User.findOne({ [key]: value }));
}

async function createNewUser({ name, email, password, roles, accountStatus }) {
  const user = new User({ email, password, name, roles, accountStatus });
  return user.save();
}
async function updateUser(userId, data) {
  try {
    const user = await findUserByProperty('email', data.email);
    if (user) {
      error('email already in use', 404);
    }
    const updatedUser = await User.findOneAndUpdate(
      userId,
      { ...data },
      { new: true }
    );
    return updatedUser;
  } catch (e) {
    next(e);
  }
}
module.exports = {
  findUserByProperty,
  createNewUser,
  updateUser,
};
