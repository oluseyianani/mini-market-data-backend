const login = require('./userValidators/login');
const signup = require('./userValidators/signup');
const token = require('./userValidators/token');
const createMarket = require('./marketValidator/create');
const authorizeAdmin = require('./userValidators/authorizeAdmin');

module.exports = {
    login,
    signup,
    token,
    createMarket,
    authorizeAdmin
};
