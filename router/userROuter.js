const router = require('express').Router();
const {
  getUsers,
  postUser,
  getUserById,
  putUserById,
  patchUserById,
  deleteUserById,
} = require('../controller/userController');

router.get('/:userId', getUserById);
router.put('/:userId', putUserById);
router.patch('/:userId', patchUserById);
router.delete('/:userId', deleteUserById);

router.get('/', getUsers);
router.post('/', postUser);

module.exports = router;
