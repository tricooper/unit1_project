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

 	robot.respond(/Hi Hubot! My name is (.*)/i, function(msg){
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

 	 // tell me our class syllabus

 	 // robot.respond(/.*syllabus.*/i, function(res) {
 	 // 		var syllabus = {

 	 // 		}

 	 // });
 	 // what are we doing in class today?
 	 // use settimeout to delay the response
 	 // what is our zoom link?

 	 // define x. (defines a certain piece of javascript)
 	  	
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




