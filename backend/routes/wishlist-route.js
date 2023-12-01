const express = require('express');
const { wishlistPenginapan } = require('../controller/wish-controller');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.post('/:id/wishlistpenginapan', verifyToken, wishlistPenginapan);

module.exports = router;
