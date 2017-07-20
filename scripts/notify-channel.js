// Description:
//    notify create channel on Slack in #new_channels
//
module.exports = robot => {
	console.log(robot.adapter.client);
	robot.on('channelCreated', msg => {
		robot.send({root: 'random'}, `新しいチャンネル #${msg.channel.id}が作られたよ！`);
	});
};
