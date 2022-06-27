const User = require('../model/User');
const error = require('../utils/error');
const authService = require('../service/authService');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      error('server side error', 500);
    }
    res.status(200).json({ users });
  } catch (e) {
    next(e);
  }
};
const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;
  try {
    const user = await authService.registrationService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });
    if (!user) {
      error('user creation failed', 500);
    }
    res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
};
const getUserById = async (req, res, next) => {};
const putUserById = async (req, res, next) => {};
const patchUserById = async (req, res, next) => {};
const deleteUserById = async (req, res, next) => {};

module.exports = {
  getUsers,
  postUser,
  getUserById,
  putUserById,
  patchUserById,
  deleteUserById,
};
