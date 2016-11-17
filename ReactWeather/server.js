var express = require('express');

// Create our app
var app = express();
const port = process.env.PORT || 3000;

// express middleware
app.use(function (request, response, next) {
    next();
    // if (request.headers['x-forwarded-proto'] === 'http') {  //HTTP or HTTPS
    //     next();
    // } else {
    //     response.redirect('http://' + request.hostname + request.url);
    // }
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Express server is up on port 3000');
});
