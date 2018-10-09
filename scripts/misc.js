'use strict';

module.exports = robot => {
	robot.hear(/^tgif$/i, msg => {
		msg.send('https://files.slack.com/files-pri/T02TM1NQZ-F2SAJQFE1/slack_for_ios_upload.jpg');
	});

	robot.hear(/^最高かよ$/i, msg => {
		msg.send('https://files.slack.com/files-pri/T02TM1NQZ-F2SB6JLN5/2958.jpg');
	});

	robot.hear(/遅れます|遅れそう|遅刻します/i, msg => {
		msg.send(':linus:');
	});
};
