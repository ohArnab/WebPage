// server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var messages = [];

app.post('/messages', function(req, res) {
    var message = req.body.message;
    messages.push(message);
    res.json({ message: message });
});

app.listen(3000, function() {
    console.log('Messaging board app listening on port 3000!');
});
