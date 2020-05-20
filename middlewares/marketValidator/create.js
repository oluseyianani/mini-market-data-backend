const HttpResponseHelper = require('../../helpers/httpResponse');

const { badResponse } = HttpResponseHelper;

/**
*
* @param { object } req
* @param { object } res
* @param { object } next
* @returns { object } Json
*/
const createMarketValidation = (req, res, next) => {

  const values = req.body;
  const required = ['name', 'description', 'address', 'foodCategory'];

  for (let i = 0; i < required.length; i += 1) {
    if (!values[required[i]]) {
      return badResponse(res, 422, `${required[i]} is required`);
    }
  }

  /**
  * Check to see that name is not blank
  * @param {string} name - market name {Mile12}
  */
  if (values.name && !values.name.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Name field can not be blank');
 }

/**
  * Check to see that name is not blank
  * @param {string} description - market description {lorem ipsum entangen}
  */
 if (values.description && !values.description.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Description field can not be blank');
  }

  /**
  * Check to see that address is not blank
  * @param {string} address - market address {{"type": "Point","coordinates": [125.6, 10.1]}}
  */
 if (values.address && !values.address.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Address field can not be blank');
 }

/**
  * Check to see that foodCategory is not blank
  * @param {string} address - foodCategory {1} - id of food category
  */
 if (values.address && !values.address.replace(/\s/g, '').length) {
    return badResponse(res, 422, 'Address field can not be blank');
 }

 // TODO - CHECK THAT FOOD CATEGORY EXISTS


  req.body.name = req.body.name.toString().trim();
  req.body.description = req.body.description.toString().trim();
  req.body.address = req.body.address.toString().trim();
  req.body.foodCategory = req.body.foodCategory.trim().toLowerCase();
  next();
};

module.exports = createMarketValidation;
