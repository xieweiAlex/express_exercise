
var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
const filePath = path.join(__dirname, 'inventors.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/inventors', function (req, res, next) {
//
//     fs.readFile(filePath, function (err, data) {
//         if (err) {
//             throw err;
//         }
//
//         // res.render('index', { table: data });
//         res.end(data);
//     });
// });

module.exports = router;


