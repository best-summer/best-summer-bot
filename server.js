const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');

const app = express();

var webhookUrl = 'https://hooks.slack.com/services/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';
var registerdToken = 'VNRER3lMlUPzRMeuaerBgrfP';

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 1337);

function sendResponse(res,text){
    var payload = {
      "text": response,
      "username":'best-summer'
    };
    res.send(200, JSON.stringify(payload));
}

app.post('/', function (req, res) {
  var body = req.body;
  var token = body['token'];
  var user_name = body['user_name'];
  var text = body['text'];
  var trigger_word = body['trigger_word'];
  var response = '';

  if(token != registerdToken){
      return;
  }

  if(text.indexOf('@best-summer') != -1){
    message = text.replace('@best-summer','');
    sendResponse(res,'@'+user_name+' エモ');
  }else{
    var rand = Math.floor(Math.random()*5);
    if(rand == 0){
        sendResponse(res,'エモい～');
    }else if(rand == 1){
        sendResponse(res,'ソーシャル！ソーシャル！');
    }
  }
});