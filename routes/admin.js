const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'add-product.ejs'), {pageTitle: 'Add Product'});
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
