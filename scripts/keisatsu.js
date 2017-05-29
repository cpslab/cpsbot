// Description:
//   ピピピー！◯◯警察だ！

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/[Gg]ithub/, msg => {
		msg.send(`ピピピー！GitHub 警察だ！`);
	});
};
