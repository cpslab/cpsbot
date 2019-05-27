// Description:
//    notify create channel on Slack in #new_channels
//
module.exports = robot => {
  if (!robot.adapter.client || !robot.adapter.client.on) {
    return;
  }

  robot.adapter.client.on('raw_message', msg => {
    if (msg.type === 'channel_created') {
      robot.send(
        { root: 'random' },
        `新しいチャンネル #${msg.channel.id}が作られたよ！`,
      );
    }
  });
};
