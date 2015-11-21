var express = require('express');
var router = express.Router();
var status = require('./data/status')()

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/status', function (req, res) {
    res.send(status)
});

module.exports = router;