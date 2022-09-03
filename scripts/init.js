// Description:
//	herokuへpingを送り続けるスクリプト

'use strict';
const herokuUrl = 'https://cpsbot-bot.herokuapp.com/';

require('heroku-self-ping')(herokuUrl);

module.exports = (robot) => {
  const chanel = 'test';
  const msg = 'そして次の残留が始まるのです';

  setTimeout(() => {
    robot.send(chanel, msg);
  }, 5000);
};
