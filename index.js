var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config.js');
var mongoose = require('mongoose');
console.log('la variable database' + config.prueba)

mongoose.connect('mongodb://localhost/test' ,function(err){
		if (err) {
			console.log(err);
		} else {
			console.log('Se conecto correctamente');
		}
});

var app= express();

var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/publico/vistas/index.html');
});

app.listen(PORT, function(err){
	if(err) {
		console.log(err);
	} else {
		console.log('Anda!');
}

});

console.log('Corriendo en localhost:' + PORT);
