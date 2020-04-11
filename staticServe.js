var express =  require('express');

var app = express();
var port = 8080;
app.set('port', (process.env.PORT || port));

app.use('/', express.static(__dirname + '/app'));

app.listen(app.get('port'),function(){
    console.log(' Client running on port: ' + port);
});
