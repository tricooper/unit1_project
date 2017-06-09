module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });

}

module.exports = function(robot) {
	robot.respond(/what is your favorite food?/, function(res) {
		return res.send("I'm a robot -- I don't eat food!");
	});
}


