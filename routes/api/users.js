var express = require('express');
const UserController = require('../../controllers/UserController');
const Validators = require('../../middlewares/validators');

var router = express.Router();

const {
  register,
  login,
} = UserController;

const {
  token,
  signup,
} = Validators;

router.post('/users/register', signup, register);
router.post('/users/login', Validators.login, login);

module.exports = router;
