var express = require('express');
var app = express();
/*https://www.npmjs.com/package/multer*/

app.use(express.static(__dirname));

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', 'localhost', port);
});