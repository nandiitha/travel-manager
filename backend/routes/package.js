const router = require('express').Router();
let Package = require('../models/package.model');

router.route('/').get((req, res) => {
    Package.find()
        .then(package => res.json(package))
        .catch(err => res.status(400).son('Error: ' + err))
});

router.route('/').put((req, res) => {
    const packageId = req.body.packageId;
    const name = req.body.name;
    const type = req.body.type;
    const price = Number(req.body.price);
    const place = req.body.place;
    const days = Number(req.body.days);


    const newPackage = new Package({
        packageId,
        name,
        type,
        price,
        place,
        days,

    });

    newPackage.save()
        .then(() => res.json('Package added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Package.findById(req.params.id)
        .then(package => res.json(package))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Package.findByIdAndDelete(req.params.id)
        .then(() => res.json('Package deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Package.findById(req.params.id)
        .then(package => {
            package.packageId = req.body.packageId;
            package.name = req.body.name;
            package.type = req.body.type;
            package.price = Number(req.body.price);
            package.place = req.body.place;
            package.days = Number(req.body.days);


            package.save()
                .then(() => res.json('Package updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))

});


module.exports = router;