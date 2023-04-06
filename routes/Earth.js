var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Earth', { title: 'Search Results By Earth' });
});

module.exports = router;
