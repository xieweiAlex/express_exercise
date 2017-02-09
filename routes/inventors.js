/**
 * Created by Alex_Xie on 20/01/2017.
 */
var express = require('express');
var router = express.Router();
const inventorsList = require('../inventors.json');

router = express.Router({
    caseSensitive: true
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('this is from inventors');
    // res.render('index', { title: 'inventors' });

    res.render('inventors', {
        title : 'Well known Inventors',
        inventors : inventorsList
    });
});

module.exports = router;
