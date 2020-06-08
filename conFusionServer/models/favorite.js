const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const favoriteSchema = new Schema({
    owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
         },
    favs:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'
        }]
 
}, {
    timestamps: true
});


var Favorites = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorites;