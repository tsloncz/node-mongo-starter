var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var mongoose = require('mongoose');
var router = express.Router();              // get an instance of the express Router
var Author = require('./models/author.js');
//DB setup
mongoose.connect("mongodb://mongo:27017");

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Log something useful.');
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/author')
    // Return all authors
    .get(function(req, res) {
        Author.find({}, function(err, authors) {
            if (err) throw err;

            // object of all the users
            res.json(authors);
        });
    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// viewed at http://localhost:port
app.listen(port, function(){
  console.log('Example app listening on port ' + port + '!');
});
