// Description:
//   コネクティブディオ！！！
// Commands:
//   name-call add <id> <name> - 追加
//   name-call rm <id> - 削除
//   name-call list - 一覧

'use strict';

const NAME = 'name-call';

module.exports = (robot) => {
  robot.brain.autoSave = true;

  robot.hear(/.+/, (msg) => {
    if (msg.message.user.name === 'cpsbot') {
      return;
    }

    const list = robot.brain.get(NAME) || [];
    const { text } = msg.message;
    for (const { id, name } of list) {
      const re = new RegExp(name);
      if (text.match(re)) {
        msg.send(`@${id} ↑ コールされました`);
      }
    }
  });

  robot.hear(/^name-call add (.+?) (.+)/i, (msg) => {
    const list = robot.brain.get(NAME) || [];
    const obj = {
      id: msg.match[1],
      name: msg.match[2],
    };
    list.push(obj);
    robot.brain.set(NAME, list);
  });

  robot.hear(/^name-call rm (.+)$/, (msg) => {
    const list = robot.brain.get(NAME) || [];
    const nextLogger = list.filter((mes) => mes && mes.id !== msg.match[1]);
    robot.brain.set(NAME, nextLogger);
  });

  robot.hear(/^name-call list$/i, (msg) => {
    const list = robot.brain.get(NAME) || [];
    msg.send(`${list.map((v) => `${v.id}: ${v.name}`).join('\n')}`);
  });
};
