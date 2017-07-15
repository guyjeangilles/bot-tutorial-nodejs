var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexGuy = /^\/guy$/;
	  botRegexGal = /^\/gal$/;
	  botRegexNeutral = /^\/neutral$/;
	  botRegexActivity = /^\/activity$/;

  if(request.text && botRegexGuy.test(request.text)) {
    this.res.writeHead(200);
    postMessageGuy();
    this.res.end();
  }
  if (request.text && botRegexGal.test(request.text)) {
	this.res.writeHead(200);
    postMessageGal();
    this.res.end();
  }
  
  if(request.text && botRegexNeutral.test(request.text)) {
	this.res.writeHead(200);
    postMessageNeutral();
    this.res.end();
  } 
  
  if(request.text && botRegexActivity.test(request.text)) {
	this.res.writeHead(200);
    postMessageActivity();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}  

var activity = ['coffee', 'brunch', 'lunch', 'dinner', 'drag show', 'museum', 'froyo', 'roller skating', 'actually watch a movie', 'ice cream', 'cook a meal', 'go on a walk', 'arcade', 'RISD Nature Lab', 'zoo', 'Muse Paintbar', 'bake something'];



function postMessageGuy() {
  var guys = [ 'Aaron McClendon', 'Adam Rukin', 'Aleck Pinto', 'Alex Gaggino', 'Andreas Betancourt', 'Arjun Nukal', 'B O\'B', 'Beans', 'Brandon Davenport', 'David Yocum', 'Dayo Akinjisola', 'Drew Carlson', 'Eli Panken', 'Eric Jasinski', 'Evan Matuszak', 'Franklin Li', 'Gene Wiliams', 'Guyrandy Jean-Gilles', 'Ismail Oukhouya', 'Jaafar Mothafer', 'James Dolgin', 'James Levine', 'Jeff Biestek', 'Joe Sullivan', 'Jon Weiss', 'Josh Harrison', 'Justin Ramos',  'Keiran McVeigh', 'Kevin Carter', 'Matt Bee', 'Matt Crescinmanno', 'Matthew Maquiling', 'Micah Jaffe', 'Micah Leinbach', 'Mihir Pershad', 'Narin Luangrath', 'Nick Zajciw', 'Noah Zweben', 'Ojas Chinchwadkar', 'Petey DeJoy', 'Quenton Stevenson', 'Rahul Narain', 'Ryan Cleary', 'Sam Koening', 'Sam Summer', 'Sarim Ahmed', 'Saseen Najjar', 'Sean Pitterson Jr', 'Sean McCroskey', 'Spencer Keith', 'Steven Soto', 'Thomas Krumins', 'Will Humphrey', 'Vinay Nagaraj', 'Zac Levin'];
  var activity = ['coffee', 'brunch', 'lunch', 'dinner', 'drag show', 'museum', 'froyo', 'roller skating', 'actually watch a movie', 'ice cream', 'cook a meal', 'go on a walk', 'arcade', 'RISD Nature Lab', 'zoo', 'Muse Paintbar', 'bake something'];
  
  var botResponse, options, body, botReq;
  
  var index = Math.floor(Math.random()*(guys.length));
  var match = guys[index];
  
  var index_act = Math.floor(Math.random()*(activity.length));
  var date = activity[index_act];
  
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse ='^ @' + match + ' ' + date + '?';

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

function postMessageGal() {
  var gals = ['Abbie Spector', 'Abigail Schneider', 'Alexandra Bacchus', 'Amanda Halacy', 'Amy Scheel', 'Becca Groner', 'Briana Natalie', 'Bridget Lanigan', 'Brooke Sterneck', 'Caroline Harding', 'Catherine Levins', 'Corinne Sullivan', 'Courtney Morgan', 'Danya B', 'Dawn musil', 'Divya Agarwal', 'Ella Simmons',  'Genevieve Agar', 'Grettie Mason', 'Hannah Mills', 'Ibanca Anand', 'Jeannie blackwood', 'Julia Wang', 'Kate Connors', 'Kelly Ready', 'Kelsey Murphy', 'Kimmi Schonhorst', 'Kristen Thut', 'Leviyah Ashira Greilich', 'Liv Sisson', 'Liv Stromme', 'Lydia Ottaviano', 'Mady Jankowski', 'Mallory Michaelis', 'Martha Cosgrove', 'Mattie Coacher', 'Michelle Khalid', 'Paola Peraza', 'Perrin Brown', 'Rachel Smedley', 'Sally Lindsay', 'Sarena Martinez'];
  var activity = ['coffee', 'brunch', 'lunch', 'dinner', 'drag show', 'museum', 'froyo', 'roller skating', 'actually watch a movie', 'ice cream', 'cook a meal', 'go on a walk', 'arcade', 'RISD Nature Lab', 'zoo', 'Muse Paintbar', 'bake something'];
  
  var botResponse, options, body, botReq;
  
  var index = Math.floor(Math.random()*gals.length);
  var match = gals[index];
  
  var index_act = Math.floor(Math.random()*(activity.length));
  var date = activity[index_act];
  
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse ='^ @' + match + ' ' + date + '?';

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

function postMessageNeutral() {
  var neutral = ['Aaron McClendon', 'Abbie Spector', 'Abigail Schneider', 'Adam Rukin', 'Aleck Pinto', 'Alex Gaggino', 'Alexandra Bacchus', 'Amanda Halacy', 'Amy Scheel', 'Andreas Betancourt', 'Arjun Nukal', 'B O\'B', 'Beans', 'Becca Groner', 'Brandon Davenport', 'Briana Natalie', 'Bridget Lanigan', 'Brooke Sterneck', 'Caroline Harding', 'Catherine Levins', 'Corinne Sullivan', 'Courtney Morgan', 'Danya B', 'David Yocum', 'Dawn musil', 'Dayo Akinjisola', 'Divya Agarwal', 'Drew Carlson', 'Eli Panken', 'Ella Simmons', 'Eric Jasinski', 'Evan Matuszak', 'Franklin Li', 'Genevieve Agar', 'Gene Williams', 'Grettie Mason', 'Guyrandy Jean-Gilles', 'Hannah Mills', 'Ibanca Anand', 'Ismail Oukhouya', 'Jaafar Mothafer', 'James Dolgin', 'James Levine', 'Jeannie blackwood', 'Jeff Biestek', 'Joe Sullivan', 'Jon Weiss', 'Josh Harrison', 'Julia Wang', 'Justin Ramos', 'Katie Connors', 'Keiran McVeigh', 'Kelly Ready', 'Kelsey Murphy', 'Kevin Carter', 'Kimmi Schonhorst', 'Kristen Thut', 'Leviyah Ashira Greilich', 'Liv Sisson', 'Liv Stromme', 'Lydia Ottaviano', 'Mady Jankowski', 'Mallory Michaelis', 'Martha Cosgrove', 'Matt Bee', 'Matt Crescimanno', 'Mattie Coacher', 'Matthew Maquiling', 'Micah Jaffe', 'Micah Leinbach', 'Michelle Khalid', 'Mihir Pershad', 'Narin Luangrath', 'Nick Zajciw', 'Noah Zweben',  'Ojas Chinchwadkar', 'Paola Peraza', 'Perrin Brown', 'Petey DeJoy', 'Quenton Stevenson', 'Rachel Smedley', 'Rahul Narain', 'Ryan Cleary', 'Sally Lindsay', 'Sam Koening', 'Sam Summer', 'Sarena Martinez', 'Sarim Ahmed', 'Saseen Najjar', 'Sean Pitterson Jr', 'Sean McCroskey', 'Spencer Keith', 'Steven Soto', 'Thomas Krumins', 'Vinay Nagaraj', 'Will Humphrey', 'Zac Levin'];
  var activity = ['coffee', 'brunch', 'lunch', 'dinner', 'drag show', 'museum', 'froyo', 'roller skating', 'actually watch a movie', 'ice cream', 'cook a meal', 'go on a walk', 'arcade', 'RISD Nature Lab', 'zoo', 'Muse Paintbar', 'bake something'];
  
  var botResponse, options, body, botReq;
  
  var index = Math.floor(Math.random()*neutral.length);
  var match = neutral[index];
  
  var index_act = Math.floor(Math.random()*(activity.length));
  var date = activity[index_act];
  
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse ='^ @' + match + ' ' + date + '?';

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

function postMessageActivity() {
  var activity = ['coffee', 'brunch', 'lunch', 'dinner', 'drag show', 'museum', 'froyo', 'roller skating', 'actually watch a movie', 'ice cream', 'cook a meal', 'go on a walk', 'arcade', 'RISD Nature Lab', 'zoo', 'Muse Paintbar', 'bake something'];
  
  var botResponse, options, body, botReq;
  
  var index_act = Math.floor(Math.random()*(activity.length));
  var date = activity[index_act];
  
  //botResponse = cool() + ' @Guyrandy Jean-Gilles';
  botResponse ='^ ' + date + '?';

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