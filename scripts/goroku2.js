// Description:
//   ユーザ語録
// Commands:
//   goroku2 <name> add <message> - 語録を追加
//   goroku2 <name> del <message> - 語録を削除
//   goroku2 <name> random <message> - 語録をランダム表示
//   goroku2 <name> list <message> - 語録一覧

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	const addName = name => {
		const logger = robot.brain.get('gorokuNames') || [];
		if (logger.contains(name)) {
			return;
		}
		logger.push(name);
		robot.brain.set('gorokuNames', logger);
	};

	const loadLogger = name => {
		addName(name);
		return robot.brain.get(`goroku_${name}`) || [];
	};

	robot.hear(/^goroku2 add (.+) (.+)/i, msg => {
		const [name, m] = msg.match;
		const logger = loadLogger(name);
		logger.push(m);
		robot.brain.set(`goroku_${name}`, logger);
		msg.send(`${name} ${m}`);
	});

	robot.hear(/^goroku2 del (.+) (.+)$/, msg => {
		const [name, m] = msg.match;
		const logger = loadLogger(name);
		const nextLogger = logger.filter(mes => mes !== m);
		robot.brain.set(`goroku_${name}`, nextLogger);
	});

	robot.hear(/^goroku2 random (.+)$/i, msg => {
		const name = msg.match;
		const logger = loadLogger(name);
		const mes = logger[Math.floor(Math.random() * logger.length)];
		msg.send(`${name} ${mes}`);
	});

	robot.hear(/^goroku2 list (.+)$/i, msg => {
		const name = msg.match;
		const logger = loadLogger(name);
		msg.send(`${logger.map(v => `${name} ${v}`).join('\n')}`);
	});
};
