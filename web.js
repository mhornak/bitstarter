var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var contents = "";

fs.readFileSync('./index.html', 'utf-8', function(err, content) {
    if(err) throw err;
    contents = content.toString();
})

app.get('/', function(request, response){
    response.send("hello world not from file!");
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
