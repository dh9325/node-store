exports.getIndex = (req, res, next) => {
  res.render('shop', {pageTitle: 'Home'});
};
