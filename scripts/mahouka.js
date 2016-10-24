// Description:
//   魔法科
'use strict';

const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

const BASE = 'http://mahouka.jp/special/s07.html';

module.exports = robot => {
	robot.hear(/魔法科|お兄様/i, msg => {
		got(BASE).then(res => {
			const $ = cheerio.load(res.body);
			const imgs = $('li > img').map((v, el) => {
				return $(el).attr('src');
			});
			msg.send(url.resolve(BASE, msg.random(imgs)));
		});
	});
};
