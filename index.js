const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('hi, timestamp');
});

app.listen(8080, function(req, res) {
    console.log('app listening in port 8080');
});