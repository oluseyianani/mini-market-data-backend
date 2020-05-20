var express = require('express');
const MarketController = require('../../controllers/MarketController');
const Validators = require('../../middlewares/validators');

var router = express.Router();

const {
  create,
  fetchOne,
  update,
  fetchMany,
  destroy
} = MarketController;

const {
  token,
  createMarket,
  authorizeAdmin
} = Validators;

router.post('/market/create', authorizeAdmin, create);
router.put('/market/update:id', token, update);
router.get('/market/:id', token, fetchOne);
router.get('/market', token, fetchMany);
router.delete('/market:id', token, destroy);

module.exports = router;
