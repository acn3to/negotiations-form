let http = require('http'),
  app = require('./config/express');

http.createServer(app).listen(8080, function () {
  console.log('Server listening on port: ' + this.address().port);
});
