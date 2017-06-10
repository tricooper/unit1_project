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
		var year = d.getDay();
 		return res.reply('the day is: ' + year);
 	});
}




