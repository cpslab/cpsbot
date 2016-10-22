/**
	Description:
		LGTM
	Commands:
		hubot
*/

'use strict';

module.exports = robot => {
	robot.hear(/^lgtm$/i, msg => {
		robot
			.http('http://www.lgtm.in/g')
			.header('Accept', 'application/json')
			.get()((err, res, body) => {
				if (err) {
					console.error(err);
				}
				const data = JSON.parse(body);
				msg.send(data.actualImageUrl);
			});
	});
};
