const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product'});
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
