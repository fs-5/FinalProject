const express = require('express');
const { wishlistPenginapan, getWishlistById } = require('../controller/wish-controller');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get('/:id', verifyToken, getWishlistById);
router.post('/:id/wishlistpenginapan', verifyToken, wishlistPenginapan);

module.exports = router;
