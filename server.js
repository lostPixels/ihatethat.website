var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public',express.static('assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.post('/submit', function (req, res) {
    console.log('submit');
    res.end();
});

app.listen(3000);