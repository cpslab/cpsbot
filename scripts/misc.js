'use strict';

module.exports = robot => {
	robot.hear(/^tgif$/i, msg => {
		msg.send('https://files.slack.com/files-pri/T02TM1NQZ-F2SAJQFE1/slack_for_ios_upload.jpg');
	});
};
