var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexGuy = /^\/guy$/;
	  botRegexGal = /^\/gal$/;
	  botRegexNeutral = /^\/neutral$/;

  if(request.text && botRegexGuy.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }
  if (request.text && botRegexGal.test(request.text)) {
	this.res.writeHead(200);
    postMessage();
    this.res.end();
  }
  
  if(request.text && botRegexNeutral.test(request.text)) {
	this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;
  var guys = ['Aaron McClendon','Adam Rukin'];
  var guyIndex = Math.floor(Math.random()*guys.length);
  var match = guys[guyIndex];
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse = cool() + ' @' + match;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;