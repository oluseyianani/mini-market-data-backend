const Models = require('../db/models');


const {
    Images
} = Models

/**
 * @class { MarketeWorker }
 * @description { Handles market related queries }
 */
class MarketWorker {
    /**
     * @description { worker to upload market images }
     * 
     * @param { string } images
     * @param { integer } marketId
     * @returns { object } JSON
     */
    static async uploadMarketImages(images, marketId) {
        let bulkImage = [];
        images.split(',').forEach((image) => {
            bulkImage.push({ image, marketId});
        });

        await Images.bulkCreate(bulkImage);

        return true;
    }   
}
  
module.exports = MarketWorker;
