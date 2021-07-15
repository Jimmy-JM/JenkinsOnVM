var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('노드.제이에스 추가 -> & 추가 -> pm2 추가 -> pm2 스탑 추가');
});

app.get('/start', function(req, res){
    res.send('start page!');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port!'+ server.address().port);
});
