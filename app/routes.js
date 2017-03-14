// ROUTES.js -- RENDER PAGE
var express = require('express');
var app = express.Router();

// Vendor
var celogin = require('connect-ensure-login')

// -----------------
//  R O U T I N G !
// -----------------

// # DASHBOARD #
// -------------

app.get('/dashboard/', celogin.ensureLoggedIn('/'), function(req, res) {
  var content = {
    user: req.user,
  };
  res.render('dashboard/index', content);
});

// # ASK #
// -------------
app.get('/', function(req, res) {
  var content = {};
  res.redirect('/freshman')
});

app.get('/freshman/', function(req, res) {
  var content = {};
  res.render('asker', content);
});

app.get('/teacher/ask', function(req, res) {
  
  var content = {};
  res.render('teacher', content);

});

app.get('/presentation/', function(req, res) {
  var content = {};
  res.render('presentation', content);
});

module.exports = app;
