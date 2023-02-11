const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

//routes modules
const firstroute = require('./routes/route_one');


var app = express();

app.set('port', process.env.PORT || 3000);

// Allow CORS
app.use(cors({
    origin: '*'
}));



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

//routes 
app.use('/',firstroute)


app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});


app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
     app.get('port') + '; press Ctrl-C to terminate.');
});
