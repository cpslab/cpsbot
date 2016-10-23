// Description:
//   語録
// Commands:
//   goroku add <message> - 語録を追加
//   goroku del <message> - 語録を削除
//   goroku random <message> - 語録を追加
//   goroku list <message> - 語録を追加

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/^goroku add (.+)/i, msg => {
		const logger = robot.brain.get('goroku') || [];
		const m = msg.match[1];
		logger.push(m);
		robot.brain.set('goroku', logger);
		robot.send(`:iwi: ${m}`);
	});

	robot.hear(/^goroku del (.+)$/, msg => {
		const logger = robot.brain.get('goroku') || [];
		const nextLogger = logger.filter(mes => mes !== msg.match[1]);
		robot.brain.set('goroku', nextLogger);
	});

	robot.hear(/^goroku random$/i, msg => {
		const logger = robot.brain.get('goroku') || [];
		const mes = logger[Math.floor(Math.random() * logger.length)];
		msg.send(`:iwi: ${mes}`);
	});

	robot.hear(/^goroku list$/i, msg => {
		const logger = robot.brain.get('goroku') || [];
		msg.send(`:iwi: \n${logger.join('\n')}`);
	});
};
