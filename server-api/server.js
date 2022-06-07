const http = require('http'),
  app = require('./config/express');
const { constants } = require('perf_hooks');

http.createServer(app).listen(8080, function () {
  console.log('Server listening on port: ' + this.address().port);
});
