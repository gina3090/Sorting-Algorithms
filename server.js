const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const sort = require('./routes/sort-route');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/sort', sort);

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;