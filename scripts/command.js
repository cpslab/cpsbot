// Description:
//   コマンドー
// Commands:
//   command add <key> <value> - コマンドを追加
//   command rm <key> - コマンドを削除
//   command list - コマンド一覧

'use strict';

const NAME = 'command';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/.+/, msg => {
		const obj = robot.brain.get(NAME) || {};
		const text = msg.message.text;
		if (obj[text]) {
			msg.send(obj[text]);
		}
	});

	robot.hear(/^(command|コマンド) add (.+?) (.+)/, msg => {
		const obj = robot.brain.get(NAME) || {};
		const command = msg.match[2];
		const message = msg.match[3];
		obj[command] = message;
		robot.brain.set('command', obj);
	});

	robot.hear(/^(command|コマンド) rm (.+?)/, msg => {
		const obj = robot.brain.get(NAME) || {};
		const command = msg.match[2];
		if (obj[command]) {
			delete obj[command];
		}
		robot.brain.set('command', obj);
	});

	robot.hear(/^(command|コマンド) list$/i, msg => {
		const obj = robot.brain.get(NAME) || {};
		const str = Object.keys(obj)
			.map(key => `${key} ${obj[key]}`)
			.join('\n');
		msg.send(str);
	});
};
