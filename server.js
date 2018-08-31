const express = require('express');

var app = express();

app.get('/', express.static('public'));

app.listen(3000, () => console.log('App running on port 3000!'))