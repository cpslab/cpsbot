// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b4, @m1, @m2, @m3, @m4

'use strict';

const b4 = [
	'Enomoto Yasunori', 'yuto_otuska', 'yusuke', 'rone', 'Megumi Kamimura',
	'seiyanakamura', 'YukiAdachi', 'izumi keita', 'spawn', 'kotako',
	'masashi nakazawa', 'hamajun', 'FJ', 'Kyota Uchida', 'Haruki Sakai',
	'umeboshi'
];

const m1 = ['sarise', 'hayashi', 'fjsmu', 'makky', 'atsuo'];

const m2 = ['adachi', 'kudo'];

const m3 = ['elzup', 'naoki', 'naoya', 'ninten', 'sukonbu'];

const m4 = [
	'kondo', 'kyosuke', 'misaki', 'mitsuha_suxee', 'shinji_cps',
	'shino', 'tk', 'tsuno', 'yone'
];

const toMentionFormat = array => array.reduce(
	(a, x) => `${a} @${x}`, ''
).trim();

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/@b4/i, msg => {
		msg.send(toMentionFormat(b4));
	});

	robot.hear(/@m1/i, msg => {
		msg.send(toMentionFormat(m1));
	});

	robot.hear(/@m2/i, msg => {
		msg.send(toMentionFormat(m2));
	});

	robot.hear(/@m3/i, msg => {
		msg.send(toMentionFormat(m3));
	});

	robot.hear(/@m4/i, msg => {
		msg.send(toMentionFormat(m4));
	});
};
