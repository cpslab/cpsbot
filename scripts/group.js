// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b4, @m1, @m2, @現役
//
// UserID は以下のURLからCSVをダウンロードすることで確認できる https://iwailab.slack.com/admin
// または以下のAPIをたたく https://api.slack.com/methods/users.list/test
// また、基本的に発表スケジュールの欄にSlack ID をいれて管理している。 2019発表スケジュール: https://docs.google.com/spreadsheets/d/1TzGpyJmyKFodQu4hc1-JLsa9CDlapN72GEDs8S1fpJo/edit#gid=0

'use strict';
const b3 = [
  'U01DFPZNBK3',
  'U01BUF4LH4L',
  'U01CWQMC9DL',
  'U01CNCZUEA3',
  'U01CD5YB5KN',
  'U01CWDBPP7Y',
  'U01BRU2T35X',
  'U01CNCZTX7Z',
  'U01DDJJC874',
  'U01D0D23EG1',
  'UPV0U28KG',
  'U01CNCZRQ31',
];

const b4 = [
  'UP3D0AU8H',
  'UPBMGFG0P',
  'UNX2T1DCJ',
  'UPC2DU67Q',
  'UPC2DUD3Q',
  'UP3CYQ741',
  'UHSEF95UL',
  'UP9RUE2RK',
  'UP9RWPYV6',
  'UP9RWQ6AU',
  'UMAGTA799',
  'UDC4MJV89',
];

const m1 = ['UA0BM185P', 'UDCJG2Y9H', 'UDC01L52P', 'UDA9CPXL0', 'UDCR4C8LF'];

const m2 = ['U7HMT51QS', 'U7H2PMXUG'];

const ob = [
  'U0C9WJNBB',
  'U0C9Y8LD6',
  'U03SLKJUG',
  'U0B0NMR0F',
  'U03SKD7DK',
  'U03S83PKH',
  'U04V44F9N',
  'U0CG81S3D',
  'U0BQTBZK5',
  'U0CBHUZLG',
  'U039Y8JPW',
  'U0CDFKR6K',
  'U02TM45R1',
  'U0BQVNU3G',
  'U0CDKC98E',
  'U0C5RUZNK',
  'U7HKLS07M',
  'U6PRRGQNM',
  'U7HMTSGF4',
  'U2YSAEPB8',
  'U7HRXNX3P',
  'U7JQD1U2K',
  'U7H2N5W8Y',
  'U7HPDU30U',
  'U7HKLK1EF',
  'U7HKLPV35',
  'U7H6LB68H',
  'U7JJFGB9U',
  'U7H6LTT7T',
  'U7LS7T6GN',
  'U2LGU5T8U',
  'U2LH9MMCH',
  'U2LH8H9JB',
  'U2LH9NX1D',
  'U2LGYNFEC',
  'UA0BM185P',
  'UBDRCAW5A',
  'UDB2E282U',
  'UDB7753B7',
  'UDC3YKWTB',
  'UDC4MJV89',
  'UDCBK7N1L',
  'UDCGHQ283',
  'UDD8RU8UW',
  'UDDP55JMD',
  'UDVJUV4UE',
];

// 現役
const activeStudent = b3
  .concat(b4)
  .concat(m1)
  .concat(m2);

const toMentionFormat = array =>
  array.reduce((a, x) => `${a} <@${x}>`, '').trim();

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

  robot.hear(/@ob/i, msg => {
    msg.send(toMentionFormat(ob));
  });

  robot.hear(/@現役/i, msg => {
    msg.send(toMentionFormat(activeStudent));
  });
};
