// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b4, @m1, @m2, @m3, @m4, @現役
//
// UserID は以下のURLからCSVをダウンロードすることで確認できる https://iwailab.slack.com/admin
// または以下のAPIをたたく https://api.slack.com/methods/users.list/test

'use strict';

const b3 = [
  "UA0BM185P", "UBDRCAW5A", "UDA9CPXL0", "UDB2E282U", "UDB7753B7",
  "UDC01L52P", "UDC3YKWTB", "UDC4MJV89", "UDCBK7N1L", "UDCGHQ283",
  "UDCJG2Y9H", "UDCR4C8LF", "UDD8RU8UW", "UDDP55JMD", "UDVJUV4UE",
]

const b4 = [
	'U7H2PMXUG', 'U7HKLS07M', 'U6PRRGQNM', 'U7HMT51QS', 'U7HMTSGF4',
	'U2YSAEPB8', 'U7HRXNX3P', 'U7JQD1U2K', 'U7H2N5W8Y', 'U7HPDU30U',
	'U7HKLK1EF', 'U7HKLPV35', 'U7H6LB68H', 'U7JJFGB9U', 'U7H6LTT7T',
	'U7LS7T6GN'
];

const m1 = ['U2LGU5T8U', 'U2LH9MMCH', 'U2LH8H9JB', 'U2LH9NX1D', 'U2LGYNFEC'];

const m2 = ['U0C9WJNBB', 'U0C9Y8LD6'];

const m3 = ['U03SLKJUG', 'U0B0NMR0F', 'U03SKD7DK', 'U03S83PKH', 'U04V44F9N'];

const m4 = [
	'U0CG81S3D', 'U0BQTBZK5', 'U0CBHUZLG', 'U039Y8JPW', 'U0CDFKR6K',
	'U02TM45R1', 'U0BQVNU3G', 'U0CDKC98E', 'U0C5RUZNK'
];

const activeStudent = b4.concat(m1).concat(m2);

const toMentionFormat = array => array.reduce(
	(a, x) => `${a} <@${x}>`, ''
).trim();

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/@b3/i, msg => {
		msg.send(toMentionFormat(b3));
	});

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
