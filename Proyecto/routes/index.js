var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  res.render('index', { title: 'Express', elementos });
});

router.get('/login', function(req, res, next) {
	res.render(path.join(__dirname, '../views/login'), { title: 'Login' });
});

module.exports = router;
