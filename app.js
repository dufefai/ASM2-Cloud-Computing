var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var managerRouter = require('./routes/manager');
var figureRouter = require('./routes/figure');
var legoRouter = require('./routes/lego');
var woodRouter = require('./routes/wood');


var app = express();

var mongoose = require('mongoose');
var uri = "mongodb+srv://dunvgch210976:ulE6ruErSsPytb6m@cluster0.g5bxdff.mongodb.net/ASM2"
mongoose.connect(uri)
.then(()=> console.log("connected"))
.catch((err) => console.log(err));
mongoose.set('strictQuery', true);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/manager', managerRouter);
app.use('/figure', figureRouter);
app.use('/lego', legoRouter);
app.use('/wood', woodRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3001);

module.exports = app;
