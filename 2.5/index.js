var express =require('express');
var app = express();
var url =require('url');
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/', function(req, res){
   res.send('The HOME PAGE');
});

app.get('/greet/:statement', function(req, res){
    var queryObject = url.parse(req.url, true).query;
    var greeting = req.params.statement || 'Default greeting';
    res.setHeader('token','my.little.secret');
   res.status(201).send('This is my second node app ' + greeting);
});

app.use(function(req, res){
    res.status(404).send('page not found, try another');
});

app.listen(8080, function(){
   console.log('server listening on port 8080'); 
});