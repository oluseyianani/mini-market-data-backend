const Models = require('../db/models');
const Helpers = require('../helpers/index');
const MarketWorker = require('../workers/MarketWorker');


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
      try {
        const {
            images
        } = req.body

        const market = await Market.create(req.body);
        console.log(market.dataValues.id);
        if (images) {
            await MarketWorker.uploadMarketImages(images, market.dataValues.id);
        }

        return HttpResponseHelper.goodResponse(res, 201, 'Market created', market.dataValues);
      } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
      }
       
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