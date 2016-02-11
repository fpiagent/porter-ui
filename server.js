var express = require('express');
var app = express();
var fs = require('fs');

var bunyan = require('bunyan');
var log = bunyan.createLogger({
	name : 'Porter UI'
});

var PORT = 8585;

app.use(express.static(__dirname));

app.get('/flash', function(req, res) {
	log.info('REQUEST: /flash');
	fs.readdir('flash', function(err, items) {
	    log.debug(items);
	    res.send(items);
	});
});

app.listen(PORT);

log.info("<< Porter Server >>");
log.info("Running on Port " + PORT);
