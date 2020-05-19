const Models = require('../db/models');
const Helpers = require('../helpers/index');


const { Market } = Models;
const { HttpResponseHelper } = Helpers

/**
 * @class { MarketController }
 * @description { Handles Markets Requests }
 */
class MarketController {
    /**
     * @param { object } req
     * @param { object } res
     * @returns { object } Json
     */
    static async create(req, res) {
        // token middleware to chaeck valid token
        // role midleware to validate who's accesible
        // get all the data from request
        //insert them into the database and return
    }
  
  
    /**
     *
     * @param { object } req
     * @param { object } res
     * @returns { object } json
     */
    static update(req, res) {
      //...
    }

    /**
     *
     * @param { object } req
     * @param { object } res
     * @returns { object } json
     */
    static fetchOne(req, res) {
        //...
    }

    /**
     *
     * @param { object } req
     * @param { object } res
     * @returns { object } json
     */
    static fetchMany(req, res) {
        //...
    }

    /**
     *
     * @param { object } req
     * @param { object } res
     * @returns { object } json
     */
    static destroy(req, res) {
        //...
    }

  }
  
  module.exports = MarketController;