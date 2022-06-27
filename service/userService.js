const User = require('../model/User');
const { findById, findOne } = require('mongoose');

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
module.exports = {
  findUserByProperty,
  createNewUser,
};
