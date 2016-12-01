var express = require('express');
var bodyParser = require('body-parser');
var calculateSalary = require('./js/salaryApi');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/calculate', (request, response) => {
    let salary = request.query.salary;
    if (salary) {
        var data = calculateSalary(salary);
        response.status(200).send(data);
    } else {
        response.sendStatus(400);
    }
});

app.listen(8080);