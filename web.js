var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response){
    response.end(fs.readFileSync(__dirname + '/index.html'));
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
