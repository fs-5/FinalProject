const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  penginapanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Penginapan',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, { collection: 'wishlists' });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
