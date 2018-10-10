'use strict';
const fs = require('fs');
const request = require('request').defaults({encoding: null});
const momentTz = require('moment-timezone');
const sharp = require('sharp');

const map = 'image/map100.jpg';
const msk = 'image/msk100.png';
const result = 'image/amesh.png';
const regionTokyo = {left: 1440, top: 680, width: 780, height: 480};

const ameshFilename = () => {
	const now = momentTz().tz('Asia/Tokyo').format('YYYYMMDDHHmm');
	return now - (now % 5);
};

const fetchImage = url => new Promise((resolve, reject) => {
	request(url, (err, res, body) => {
		if (err || res.statusCode !== 200) {
			reject(err);
		}
		resolve(body);
	});
});

module.exports = robot => {
	robot.hear(/amesh/, async msg => {
		const base = await sharp(map).toBuffer();
		const mesh = await fetchImage(`http://tokyo-ame.jwa.or.jp/mesh/100/${ameshFilename()}.gif`);
		const amesh = await [mesh, msk].reduce(async (input, overlay) =>
			sharp(await input)
				.overlayWith(overlay)
				.toBuffer(), base);

		await sharp(amesh).extract(regionTokyo).toFile(result);

		const data = {file: fs.createReadStream(result), channels: msg.message.item.channel};
		robot.adapter.client.web.files.upload('amesh.png', data);
	});
};
