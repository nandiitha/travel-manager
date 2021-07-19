const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: { type: String, required: true, minlength: 3 },
    contact: { type: Number, required: true },
    packageId: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});
new Date().getTime();
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;