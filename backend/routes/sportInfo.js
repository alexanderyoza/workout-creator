const router = require('express').Router();

let SportInfo = require('../models/sportInfo.model');

router.route('/').get((req, res) => {
    SportInfo.find()
        .then(sportInfo => res.json(sportInfo))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;