const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({

    id: { type: Number, required: true },
    name: { type: String, required: true, minlength: 3 },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    place: { type: String, required: true },
    days: { type: Number, required: true },


});

const Package = mongoose.model('package', packageSchema);

module.exports = Package;