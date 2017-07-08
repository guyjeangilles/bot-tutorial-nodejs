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
  var neutral = ['Aaron McClendon', 'Abbie Spector', 'Abigail Schneider', 'Adam Rukin', 'Aleck Pinto', 'Alex Gaggino', 'Alexandra Bacchus', 'Amanda Halacy', 'Arjun Nukal', 'B O\'B', 'Beans', 'Becca Groner', 'Brandon Davenport', 'Briana Natalie', 'Bridget Lanigan', 'Brooke Sterneck', 'Catherine Levins', 'Corinne Sullivan', 'Courtney Morgan', 'Danya B', 'David Yocum', 'Dawn musil', 'Dayo Akinjisola', 'Drew Carlson', 'Eli Panken', 'Ella Simmons', 'Evan Matuszak', 'Gene Williams', 'Grettie Mason', 'Guyrandy Jean-Gilles', 'Ibanca Anand', 'Jaafar Mothafer', 'James Dolgin', 'James Levine', 'Jeannie blackwood', 'Jeff Biestek', 'Joe Sullivan', 'Jon Weiss', 'Jordan Symone', 'Josh Harrison', 'Joshua Su', 'Julia Wang', 'Justin Ramos', 'Katie Connors', 'Kelly Ready', 'Kelsey Murphy', 'Kimmi Schonhorst', 'Liv Sisson', 'Liv Stromme', 'Liz Treacy', 'Lydia Ottaviano', 'Mady Jankowski', 'Mallory Michaelis', 'Martha Cosgrove', 'Matt Bee', 'Matt Crescimanno', 'Micah Jaffe', 'Micah Leinbach', 'Michelle Khalid', 'Miguel Ramirez', 'Mihir Pershad', 'Nick Zajciw', 'Noah Zweben', 'Paola Peraza', 'Perrin Brown', 'Petey DeJoy', 'Rachel Smedley', 'Rahul Narain', 'Ryan Cleary', 'Sally Lindsay', 'Sam Einhorna', 'Sam Koening', 'Sam Summer', 'Sarena Martinez', 'Saseen Najjar', 'Sean McCroskey', 'Spencer Keith', 'Steven Soto', 'Thomas Krumins', 'Vinay Nagaraj', 'Zac Levin']
  var neutralIndex = Math.floor(Math.random()*neutral.length);
  var match = neutral[neutralIndex];
  
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse ='^@' + match;

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