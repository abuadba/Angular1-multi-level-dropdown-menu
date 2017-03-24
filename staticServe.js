/**
 * Created by Joe on 05/30/16.
 */
var express =  require('express');

var app = express();
var port = 8081;
app.set('port', (process.env.PORT || port));

app.use('/', express.static(__dirname + '/app'));

app.listen(app.get('port'),function(){
    console.log('Personetics Admin - Client running on port: ' + port);
});
