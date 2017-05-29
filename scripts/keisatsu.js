// Description:
//   ピピピー！◯◯警察だ！

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/[Gg]ithub/, msg => {
		msg.send(`ピピピー！GitHub 警察だ！`);
	});

	robot.hear(/コリン|kotrin/i, msg => {
		msg.send(`ピピピー！Kotlin 警察だ！`);
	});
};
