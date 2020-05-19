const bcrypt = require('bcrypt');

const hassPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};

module.exports = hassPassword;
