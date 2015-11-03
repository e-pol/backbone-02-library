// Module dependencies
var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose');


// Create server
var app = express();

// Configure server
app.configure(function () {
    app.use(express.bodyParser());

    app.use(express.methodOverride());

    app.use(app.router);

    app.use(express.static(path.join(application_root, 'site')));

    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});


// Start server
var port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

// Routes
app.get('/api', function(request, response) {
    response.send('Library API is runnung');
});

app.get('/api/books', function(request, response) {
    return BookModel.find( function(err, books) {
        if (!err) {
            return response.send(books);
        } else {
            return console.log(err);
        }
    });
});

// Connect to database
mongoose.connect('mongodb://ep.bitnamiapp.com');

var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

// Models
var BookModel = mongoose.model('Book', Book);