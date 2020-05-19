let express = require('express');
let path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let routes = require('./routes/index');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(routes);

// catch 404 and forward to error handler
app.use('*', (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Endpoint does not exist',
    });
});

module.exports = app;
