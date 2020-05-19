const HttpResponseHelper = require('../../helpers/httpResponse');

const { badResponse } = HttpResponseHelper;

/**
*
* @param { object } req
* @param { object } res
* @param { object } next
* @returns { object } Json
*/
const signupValidation = (req, res, next) => {
  /**
  * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  */
  const emailFilter = /^([a-zA-Z0-9_\s.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  if (req.body.email) req.body.email = req.body.email.trim();
  const values = req.body;
  const required = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];

  for (let i = 0; i < required.length; i += 1) {
    if (!values[required[i]]) {
      return badResponse(res, 422, `${required[i]} is required`);
    }
  }

  const checkPassword = (str) => {
    const check = /([a-z]).{5,}/; //allows for pretty simple password
    return check.test(str);
  };

  const checkName = (str) => {
    const check = /^[a-zA-Z]+$/;
    return check.test(str);
  };

  /**
  * Check to see that firstName is not blank
  * @param {string} firstName - User's firstname {Oluseyi}
  */
  if (values.firstName && !values.firstName.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Firstname field can not be blank');
  }
  if (values.firstName && !checkName(values.firstName.toString())) {
    return badResponse(res, 422, 'Firstname is invalid, use only alphabetic characters');
  }

    /**
  * Check to see that lastName is not blank
  * @param {string} firstName - User's lastname {Anani}
  */
 if (values.lastName && !values.lastName.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Lastname field can not be blank');
  }
  if (values.lastName && !checkName(values.lastName.toString())) {
    return badResponse(res, 422, 'Lastname is invalid, use only alphabetic characters');
  }


  /**
  * Check to see that email is not blank
  * @param {string} email - User's email {oluseyi.anani@gmail.com}
  */
  if (values.email && !values.email.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Email field can not be blank');
  }

  /**
  * Check to see that email format is correct
  * @param {string} email - User's email {oluseyi.anani@gmail.com}
  */
  if (values.email && !emailFilter.test(String(values.email).toLowerCase())) {
    return badResponse(res, 422, 'Invalid email');
  }

  /**
  * Check to see that password is not blank
  * @param {string} password - User's password {password}
  */
  if (values.password && !values.password.toString().replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Password field can not be blank');
  }

  /**
  * Check if password matches regex
  * @param {string} password - User's password {password}
  */
  if (values.password && !checkPassword(values.password.toString())) {
    const messsage = 'Password must must not be less than 5 characters';
    return badResponse(res, 422, messsage);
  }

  /**
  * Check if password is properly confirmed
  * @param {string} confirmPassword - User's password {password}
  */
  if (values.confirmPassword && !values.confirmPassword.toString().replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Confirm Password field can not be blank');
  }
  /**
  * Get the values of password and confirm pass and check their equality
  * @param {string} passOne- password
  * @param {string} passTwo - conifrmPassword
  */
  const passOne = values.confirmPassword && values.confirmPassword.toString().replace(/\s/g, '');
  const passTwo = values.password && values.password.toString().replace(/\s/g, '');
  if (passOne !== passTwo) {
    return badResponse(res, 422, 'Passwords did not match, please try again');
  }

  req.body.firstName = req.body.firstName.toString().trim();
  req.body.lastName = req.body.lastName.toString().trim();
  req.body.password = req.body.password.toString().trim();
  req.body.email = req.body.email.trim().toLowerCase();
  next();
};

module.exports = signupValidation;