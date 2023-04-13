const express = require('express');
const router = express.Router();

/* XSS page. */
router.get('/', function(req, res, next) {
  res.render('xss/index', { title: 'Express', subtitle: 'XSS' });
});

router.post('/greet', function(req, res, next) {
  res.render('xss/greet', { title: 'Express', subtitle: 'XSS', name: req.body.name });
});

module.exports = router;
