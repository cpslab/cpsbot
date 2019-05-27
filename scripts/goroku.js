// Description:
//   語録
// Commands:
//   goroku add <message> - 語録を追加
//   goroku rm <message> - 語録を削除
//   goroku random <message> - 語録をランダム表示
//   goroku list <message> - 語録一覧

'use strict';

module.exports = robot => {
  robot.brain.autoSave = true;

  robot.hear(/^goroku add (.+)/i, msg => {
    const logger = robot.brain.get('goroku') || [];
    const m = msg.match[1];
    logger.push(m);
    robot.brain.set('goroku', logger);
    msg.send(`:iwi: ${m}`);
  });

  robot.hear(/^goroku rm (.+)$/, msg => {
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
    msg.send(`${logger.map(v => `:iwi: ${v}`).join('\n')}`);
  });
};
