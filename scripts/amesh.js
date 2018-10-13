// Description:
//   東京アメッシュ(http://tokyo-ame.jwa.or.jp/)から雨雲画像を取得して送る
// Commands:
//   amesh - amesh tokyo を実行
//   amesh <region> - 指定された地域の雨雲画像を表示

'use strict';
const fs = require('fs');
const request = require('request').defaults({encoding: null});
const {WebClient, RTMClient} = require('@slack/client');
const momentTz = require('moment-timezone');
const sharp = require('sharp');

const map = 'image/map100.jpg';
const msk = 'image/msk100.png';
const result = 'image/amesh.png';

const tokyo = {left: 1150, top: 570, width: 1280, height: 768};
const kanto = {left: 0, top: 0, width: 3080, height: 1920};
const region = {tokyo, kanto};

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
	robot.hear(/amesh(.*)/, async msg => {
		const rtm = new RTMClient(robot.adapter.options.token);
		rtm.start();
		rtm.sendTyping(msg.message.room);

		const targetRegion = region[msg.match[1].trim()] || tokyo;
		const base = await sharp(map).toBuffer();
		const mesh = await fetchImage(`http://tokyo-ame.jwa.or.jp/mesh/100/${ameshFilename()}.gif`);
		const amesh = await [mesh, msk].reduce(async (input, overlay) =>
			sharp(await input)
				.overlayWith(overlay)
				.toBuffer(), base);

		sharp(amesh).extract(targetRegion).toFile(result).then(() => {
			const data = {file: fs.createReadStream(result), channels: msg.message.room};
			new WebClient(robot.adapter.options.token).files.upload(data);
		});
		rtm.disconnect();
	});
};
