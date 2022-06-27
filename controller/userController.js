const User = require('../model/User');
const error = require('../utils/error');
const authService = require('../service/authService');
const userService = require('../service/userService');

const getUsers = async (_req, res, next) => {
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
const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.findUserByProperty('_id', userId);
    if (!user) {
      error('User not Found', 404);
    }
    res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
};
const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.findUserByProperty('_id', userId);
    if (!user) {
      error('User not Found', 404);
    }
    await user.remove();
    res.status(202).json({ message: 'Deletion succeded' });
  } catch (e) {
    next(e);
  }
};
const putUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, accountStatus, email } = req.body;
  try {
    const user = await userService.findUserByProperty('_id', userId);
    if (!user) {
      error('User not Found', 404);
    }
    const updatedUser = await userService.updateUser(userId, {
      name,
      roles,
      accountStatus,
      email,
    });
    res.status(200).json({ updatedUser });
  } catch (e) {
    next(e);
  }
};
const patchUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, accountStatus } = req.body;
  try {
    const user = await userService.findUserByProperty('_id', userId);
    if (!user) {
      error('User not Found', 404);
    }
    user.name = name ?? user.name;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;
    await user.save();
    res.status(200).json({ updatedUser: user });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUsers,
  postUser,
  getUserById,
  putUserById,
  patchUserById,
  deleteUserById,
};
