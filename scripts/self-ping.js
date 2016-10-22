'use strict';
require('heroku-self-ping')('https://cpsbot-bot.herokuapp.com/');

module.exports = () => {
	console.log('load heroku-self-ping');
};
