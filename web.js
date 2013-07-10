var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var idx = new Buffer(fs.readFileSync("index.hmtl"));

app.get('/', function(request, response) {
  response.send(idx.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
