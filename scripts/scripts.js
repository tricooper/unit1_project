module.exports = function(robot) {
    robot.respond(/Hello!/i, function(res) {
      return res.send("Hi there!");
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

 	robot.respond(/year/i, function(res) {
 		var d = new Date();
		var year = d.getFullYear();
 		return res.reply('the year is: ' + year);
 	});

 	 	robot.respond(/day/i, function(res) {
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
 	  	
 	  	robot.respond(/tell me/i, function(res){
 			return robot.messageRoom "tcooper", "hello, John. My name is Hal";
 		});

}




