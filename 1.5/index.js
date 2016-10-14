var http = require('http');
var httpServer = http.createServer(function(req, res){
    res.end('This is mu first node app');
});
httpServer.listen(8080, function(){
    console.log('Server listening on port 8080');
});