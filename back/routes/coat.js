const express = require('express');
const router = express.Router();

const coatCtrl = require('../controllers/coat');

router.get('/', coatCtrl.getAllcoats);
router.get('/:id', coatCtrl.getOnecoat);
router.post('/order', coatCtrl.ordercoats);

module.exports = router;