var express = require('express');
var app = express();
let apiData = ""
app.use(express.static('public'));
app.use(express.json({limit: "1mb"}));
app.post('/getCountryNames', function(req, res) {
    apiData = req.body;
    res.json({
        status: 'success',
        message: 'Country successfully fetched!'
    });
    console.log(apiData);
});

app.get('/fetchCountries', function(req, res) {
    res.json({
        data: apiData
    });
});

app.listen(3000, function() {
    console.log("Listen to port 3000");
});