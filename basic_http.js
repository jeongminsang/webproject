const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(express.static('public'));

let base_router = require('./router/base')(app);
let food_router = require('./router/foodAPI')(app, fs);
let kind_router = require('./router/kindAPI')(app, fs);
let error_router = require('./router/errorAPI')(app, fs);

app.listen(8080, function() {
    console.log('Server 실행중');
});

