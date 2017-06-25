const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');

const app = express();

var webhookUrl = 'https://hooks.slack.com/services/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';

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 1337);

app.post('/', function (req, res) {
  var body = req.body;
  var token = body['token'];
  var user_name = body['user_name'];
  var text = body['text'];
  var trigger_word = body['trigger_word'];
  var response = '';

  if(text.indexOf('@best-summer') != -1){
    response = text.replace('@best-summer','');
  }
  
  var payload = {
      "text": response,
      "username":'best-summer'
  };

/*
  request.post(payload, function (error, response, body) {
    console.log(JSON.stringify(response));
  });
  */
  res.send(200, JSON.stringify(payload));
})