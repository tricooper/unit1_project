module.exports = function(robot) {
    robot.hear(/Hello!/i, function(res) {
      return res.send("Hi there!");
    });

 	robot.hear(/favorite food/i, function(res) {
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

 	robot.hear(/year/i, function(res) {
 		var d = new Date();
		var year = d.getFullYear();
 		return res.reply('the year is: ' + year);
 	});

 	 	robot.hear(/day/i, function(res) {
 		var d = new Date();
		var day = d.getDay();
 		switch (year) {
 			case 0:
 				return res.reply('the day is: Sunday');
 				break;
 			case 1:
 				return res.reply('the day is: Monday');
 				break;
 			case 2:
 				return res.reply('the day is: Tuesday');
 				break;
 			case 3:
 				return res.reply('the day is: Wednesday');
 				break;
 			case 4:
 				return res.reply('the day is: Thursday');
 				break;
 			case 5:
 				return res.reply('the day is: Friday');
 				break;

 		}
 	});
}




