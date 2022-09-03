'use strict';
const adventar = require('adventar');

const id = '3974';

module.exports = (robot) => {
  robot.hear(/アドベントカレンダー list/, (msg) => {
    adventar(id).then((res) => {
      const urls = res.map((v) => `${v.date} ${v.user} ${v.url}`).join('\n');
      msg.send(`http://www.adventar.org/calendars/1536\n${urls}`);
    });
  });

  robot.hear(/今日のアドベントカレンダー/, (msg) => {
    const d = new Date().getDate();
    adventar(id).then((res) => {
      const { user, url } = res[d - 1];
      const mes = url ? url : `まだ記事がないようです担当は${user}です`;
      msg.send(mes);
    });
  });

  robot.hear(/昨日のアドベントカレンダー/, (msg) => {
    const d = new Date().getDate();
    adventar(id).then((res) => {
      const { url, user } = res[d - 2];
      const mes = url ? url : `まだ記事がないようです担当は${user}です`;
      msg.send(mes);
    });
  });
};
