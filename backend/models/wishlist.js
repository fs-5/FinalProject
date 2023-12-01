const mongoose = require('mongoose');

const whishlistSchema = new mongoose.Schema({
    penginapanId: {
     type: mongoose.ObjectId,
     ref: 'penginapan' 
    },
    userId: {
     type: mongoose.ObjectId,
     ref: 'User'
    }
 }, { collection: 'whishlists' });
 

const Whishlist = mongoose.model('Whishlist', whishlistSchema);

module.exports = Whishlist;
