/**
* @param { object } req
* @param { object } res
* @param { object } next
* @returns { object } Json
*/
const loginValidation = (req, res, next) => {
    /**
    * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    */
    const emailFilter = /^([a-zA-Z0-9_\s.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (req.body.email) req.body.email = req.body.email.trim();
    const values = req.body;
    const required = ['email', 'password'];
    const errors = {};
    let pass = true;
  
    for (let i = 0; i < required.length; i += 1) {
      if (!values[required[i]]) {
        errors[required[i]] = `${required[i]} is required`;
        pass = false;
      }
    }
    /**
    * Check to see that email is not blank
    * @param {string} email - User's email {oluseyi.anani@gmail.com}
    */
    if (values.email && !values.email.replace(/\s/g, '').length) {
      errors.email = 'Email field can not be blank';
      pass = false;
    }
    /**
    * Check to see that email format is correct
    * @param {string} email - User's email {oluseyi.anani@gmail.com}
    */
    if (values.email && !emailFilter.test(String(values.email).toLowerCase())) {
      errors.email = 'Invalid email';
      pass = false;
    }
    /**
    * Check to see that password in not blank
    * @param {string} confirmPassword - User's password {password}
    */
    if (values.password && !values.password.toString().replace(/\s/g, '').length) {
      errors.confirmPassword = 'Confirm Password field can not be blank';
      pass = false;
    }
    if (pass === false) {
      return res.status(422).json({
        error: errors
      });
    }
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();
    next();
  };
  
  module.exports = loginValidation;
