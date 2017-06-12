module.exports = function(robot) {
    robot.respond(/Hello!/i, function(res) {
    var hour = new Date().getHours();
    if (hour > 17) {
      return res.send("Good Evening!");
    } else if (hour > 12) {
    	return res.send ("Good Afternoon!");
    } else {
    	return res.send ('Good Morning!');
    }
    });

 	robot.respond(/favorite food/i, function(res) {
		return res.send("I'm a robot -- I don't eat food!");
	});   

 	robot.respond(/.*My name is .* (.*)/i, function(msg){
 		var name;
 		name = msg.match[1];
 		if (name == 'Hubot') {
 			return msg.send('youre not Hubot! Thats me!');
 		} else {
 			return msg.reply ('Hello ' + name + ' nice to meet you!');
 		}
 	});

 	robot.respond(/time/i, function(res) {
 		var d = new Date(); 
 		var currentTime = d.getTime();
 		return res.reply('the date is' + currentTime);

 	});

 	robot.respond(/.*year.*/i, function(res) {
 		var d = new Date();
		var year = d.getFullYear();
 		return res.reply('the year is: ' + year);
 	});

 	 	robot.respond(/.*day.*/i, function(res) {
 		var d = new Date();
		var day = d.getDay();
 		switch (day) {
 			case 0:
 				return res.reply('Sunday :sunglasses:');
 				break;
 			case 1:
 				return res.reply('Monday :sleeping:');
 				break;
 			case 2:
 				return res.reply('Tuesday :moneybag:');
 				break;
 			case 3:
 				return res.reply('Wednesday. :camel:');
 				break;
 			case 4:
 				return res.reply('Thursday :soon:');
 				break;
 			case 5:
 				return res.reply('Friday :beers:');
 				break;
 			case 6:
 				return res.reply('Saturday :golfer:');
 				break; 			

 		}

 	});

 	 // Hubot will tell you how long you have left in your day

 	 	robot.respond(/.*can I go home.*/i, function(res) {
		 		var d = new Date();
				var day = d.getDay();
				var minute = d.getMinutes();
				var minutesLeft = 60 - minute; 
				var hour = d.getHours();
				var hoursLeft = 17 - hour; 
 	 		if ((day == 0)| (day == 6)) {
 	 			return res.reply ('Its the weekend...go home, nerd.');
 	 		} else if ((hour < 17) & (hour > 8)) {
 	 			return res.reply ('You can go home in ' + hoursLeft + ' hours and' + minutesLeft + ' minutes');
 	 		} else if (hour < 8) {
 	 			return res.reply ("Dude, you're not even at work yet");
 	 		}
 	 	});

 	 robot.respond(/.*zoom link.*/i, function(res){
 	 	return res.reply ('https://generalassembly.zoom.us/j/708480118');

 	 });

 	 // who won the NBA championship this year?
 	robot.respond(/NBA champion (.*)/i, function(res){
 		var nbaChampions = {
		2016: 'Cleveland Cavaliers',
		2015: 'Golden State Warriors',
		2014: 'San Antonio Spurs',
		2013: 'Miami Heat',
		2012: 'Miami Heat',
		2011: 'Dallas Mavericks',
		2010: 'Los Angeles Lakers',
		2009: 'Los Angeles Lakers',
		2008: 'Boston Celtics',
		2007: 'San Antonio Spurs',
		2006: 'Miami Heat',
		2005: 'San Antonio Spurs',
		2004: 'Detroit Pistons',
		2003: 'San Antonio Spurs',
		2002: 'Los Angeles Lakers',
		2001: 'Los Angeles Lakers',
		2000: 'Los Angeles Lakers',
		1999: 'San Antonio Spurs',
		1998: 'Chicago Bulls',
		1997: 'Chicago Bulls',
		1996: 'Chicago Bulls',
		1995: 'Houston Rockets',
		1994: 'Houston Rockets',
		1993: 'Chicago Bulls',
		1992: 'Chicago Bulls',
		1991: 'Chicago Bulls',
		1990: 'Detroit Pistons',
		1989: 'Detroit Pistons',
		1988: 'Los Angeles Lakers',
		1987: 'Los Angeles Lakers',
		1986: 'Boston Celtics',
		1985: 'Los Angeles Lakers',
		1984: 'Boston Celtics',
		1983: 'Philadelphia 76ers',
		1982: 'Los Angeles Lakers',
		1981: 'Boston Celtics',
		1980: 'Los Angeles Lakers',
		1979: 'Seattle SuperSonics',
		1978: 'Washington Bullets',
		1977: 'Portland Trail Blazers',
		1976: 'Boston Celtics',
		1976: 'New York Nets',
		1975: 'Golden State Warriors',
		1975: 'Kentucky Colonels',
		1974: 'Boston Celtics',
		1974: 'New York Nets',
		1973: 'New York Knicks',
		1973: 'Indiana Pacers',
		1972: 'Los Angeles Lakers',
		1972: 'Indiana Pacers',
		1971: 'Milwaukee Bucks',
		1971: 'Utah Stars',
		1970: 'New York Knicks',
		1970: 'Indiana Pacers',
		1969: 'Boston Celtics',
		1969: 'Oakland Oaks',
		1968: 'Boston Celtics',
		1968: 'Pittsburgh Pipers',
		1967: 'Philadelphia 76ers',
		1966: 'Boston Celtics',
		1965: 'Boston Celtics',
		1964: 'Boston Celtics',
		1963: 'Boston Celtics',
		1962: 'Boston Celtics',
		1961: 'Boston Celtics',
		1960: 'Boston Celtics',
		1959: 'Boston Celtics',
		1958: 'St. Louis Hawks',
		1957: 'Boston Celtics',
		1956: 'Philadelphia Warriors',
		1955: 'Syracuse Nationals',
		1954: 'Minneapolis Lakers',
		1953: 'Minneapolis Lakers',
		1952: 'Minneapolis Lakers',
		1951: 'Rochester Royals',
		1950: 'Minneapolis Lakers',
		1949: 'Minneapolis Lakers',
		1948: 'Baltimore Bullets',
		1947: 'Philadelphia Warriors'
		};

 var champion = res.match[1];
 var championTest = new RegExp(champion, 'i');
 var text = 'The ' + champion + ' won the championship in: ';

for (var i in nbaChampions) {
  
    if (championTest.test(nbaChampions[i])){
      text += i + ', '; 
  }
}
return res.reply (text);

 	});

 	 // what are we doing in class today?
 	 // use settimeout to delay the response
 	 // what is our zoom link?

 	  	
 	 //  	robot.respond(/tell me/i, function(res){
 	 //  		var room;
 	 //  		room = "#slackbot-test";
 		// 	return res.send (room: 'slackbot-test', "This is a 'spontaneous' message");
 		// });

 // give someone props with motivational quote
 // give someone encouragement 

 // Boston Celtics Bot: what year's did this team win the championship? if they have won console.log the year that they won
 // if you type the celtics, show the years and a KG meme

//create an array to hold a list of tasks
//on user input add to the array
		// robot.respond(/add (.*)/i, function(res){
		// 	var task;
		// 	var toDo = [];
		// 	task = res.match[1];
		// 	toDo.push(task);
		// 	return res.reply ("I've added " + task + " to your to do list");
		// 	for (var i = 0; i < toDo.length; i++) {
		// 	return res.reply('Here is your list' + i + ':' + 'toDo[i]' );
		// 	}

		// });
//print the array using a for loop to show when you'd like to get this done

// mark as completed and remove from array
}




