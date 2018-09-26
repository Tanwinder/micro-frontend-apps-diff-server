var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');

app.use(cors());

app.set('port', 2200);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
}); 



// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Demo running in http://localhost:' + port);
});