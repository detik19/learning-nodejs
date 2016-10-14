var express =require('express');
var app = express();

app.get('/', function(req, res){
   res.send('This is my second node app');
});

app.listen(8080, function(){
   console.log('server listening on port 8080'); 
});