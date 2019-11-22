exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product'});
};

exports.postAddProduct = (req, res, next) => {
  res.redirect('/');
};
