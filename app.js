const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/styles',
    express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, 'views', '404.ejs'), {pageTitle: 'Not Found'});
});

app.listen(3000);
