const router = require('express').Router();
let Booking = require('../models/booking.model');

router.route('/').get((req, res) => {
    Booking.find()
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/').post((req, res) => {
    const name = req.body.name;
    const contact = Number(req.body.contact);
    const packageId = req.body.packageId
    const date = Date(req.body.date);


    const newBooking = new Booking({
        name,
        contact,
        packageId,
        date
    });

    newBooking.save()
        .then(() => res.json('Booking done!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;