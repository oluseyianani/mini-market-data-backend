const login = require('./userValidators/login');
const signup = require('./userValidators/signup');
const token = require('./userValidators/token');


module.exports = {
    login,
    signup,
    token
};