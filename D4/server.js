'use strict';

const express = require('express');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';

//app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World from docker container....');
});

app.listen(PORT, HOST);
// console.log('Running on http://${HOST}:${PORT}');
console.log('Running on http://'+HOST+':' + PORT);