const express = require('express');
const app = express();
const alarmData = require('./alarm-data.js');

//send GET request
app.get('/', function(req,res) {
    res.send(alarmData[0])
})

// listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
})