// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b4, @m1, @m2, @m3, @m4

'use strict';

const b4 = [
	'EnomoT', 'yuto_otuska', 'yusuke', 'rone', 'Megumi_Kamimura',
	'seiyanakamura', 'YukiAdachi', 'izumiKeita', 'spawn', 'kotako',
	'masashi_nakazawa', 'hamajun', 'FJ', 'Kyota_Uchida', 'Haruki_Sakai',
	'umeboshi'
];

const m1 = ['sarise', 'hayashi', 'fjsmu', 'makky', 'atsuo'];

const m2 = ['adachi', 'kudo'];

const m3 = ['elzup', 'naoki', 'naoya', 'ninten', 'sukonbu'];

const m4 = [
	'kondo', 'kyosuke', 'misaki', 'mitsuha_suxee', 'shinji_cps',
	'shino', 'tk', 'tsuno', 'yone'
];

const activeStudent = b4.concat(m1).concat(m2);

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

	robot.hear(/@現役/i, msg => {
		msg.send(toMentionFormat(activeStudent));
	});
};
