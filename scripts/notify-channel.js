// Description:
//    notify create channel on Slack in #new_channels
//
module.exports = robot => {
	console.log(robot.adapter.client);
	if (!(robot.adapter.client && robot.adapter.client.rtm && robot.adapter.client.rtm.on)) {
		return;
	}
	robot.adapter.client.rtm.on('raw_messages', msg => {
		if (msg && msg.type === 'channel_created') {
			robot.send({root: 'random'}, `新しいチャンネル #${msg.channel.id}が作られたよ！`);
		}
	});
};
