'use strict';

module.exports = robot => {
	robot.hear('echo', msg => {
		msg.send('hello world');
	});
};
