var http = require('http');
var app = require('./config/express')();
const url = 'mongodb+srv://victor:V1ct0r10@cluster0.9k8mh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});