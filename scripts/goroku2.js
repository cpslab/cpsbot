// Description:
//   ユーザ語録
// Commands:
//   goroku2 add <name> <message> - 語録を追加
//   goroku2 rm <name> <message>  - 語録を削除
//   goroku2 random <name>        - 語録をランダム表示
//   goroku2 list <name>          - 語録一覧
//   goroku2 list-all             - 全ユーザ語録一覧

'use strict';

module.exports = robot => {
  robot.brain.autoSave = true;

  const addName = name => {
    const logger = robot.brain.get('gorokuNames') || [];
    if (logger.indexOf(name) >= 0) {
      return;
    }

    logger.push(name);
    robot.brain.set('gorokuNames', logger);
  };

  const loadLogger = name => {
    addName(name);
    return robot.brain.get(`goroku/${name}`) || [];
  };

  robot.hear(/^goroku2 add (.+) (.+)$/i, msg => {
    const name = msg.match[1];
    const m = msg.match[2];
    const logger = loadLogger(name);
    logger.push(m);
    robot.brain.set(`goroku/${name}`, logger);
    msg.send(`${name} ${m}`);
  });

  robot.hear(/^goroku2 rm (.+) (.+)$/, msg => {
    const name = msg.match[1];
    const m = msg.match[2];
    const logger = loadLogger(name);
    const nextLogger = logger.filter(mes => mes !== m);
    robot.brain.set(`goroku/${name}`, nextLogger);
  });

  robot.hear(/^goroku2 random (.+)$/i, msg => {
    const name = msg.match[1];
    const logger = loadLogger(name);
    const mes = logger[Math.floor(Math.random() * logger.length)];
    msg.send(`${name} ${mes}`);
  });

  robot.hear(/^goroku2 list (.+)$/i, msg => {
    const name = msg.match[1];
    const logger = loadLogger(name);
    msg.send(`${logger.map(v => `${name} ${v}`).join('\n')}`);
  });

  robot.hear(/^goroku2 list-all$/i, msg => {
    const names = robot.brain.get('gorokuNames') || [];
    const text = names
      .map(name =>
        loadLogger(name)
          .map(v => `${name} ${v}`)
          .join('\n'),
      )
      .join('\n');
    msg.send(text);
  });
};
