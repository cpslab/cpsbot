'use strict';

module.exports = robot => {
  robot.hear(/^tgif$/i, msg => {
    msg.send(
      'https://files.slack.com/files-pri/T02TM1NQZ-F2SAJQFE1/slack_for_ios_upload.jpg',
    );
  });

  robot.hear(/^最高かよ$/i, msg => {
    msg.send('https://files.slack.com/files-pri/T02TM1NQZ-F2SB6JLN5/2958.jpg');
  });

  robot.hear(/^randomB3Pair$/i, msg => {
    const array = [
      '遠藤',
      '伊東',
      '宇野',
      '音部',
      '川東',
      '粂田',
      '武井',
      '増田',
      '安武',
      '和田',
      '永田',
      '安齋',
      '立野',
      '野口',
      '吉田',
    ];
    const shuffled = array.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);
    msg.send(selected.toString());
  });
};
