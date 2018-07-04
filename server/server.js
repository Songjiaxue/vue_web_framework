var express = require('express');
var app = express();

app.get('/api/123', function (req, res) {
  res.json({ user: 'tobi' });
});

var server = app.listen(8089, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});