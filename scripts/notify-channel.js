// Description:
//    notify create channel on Slack in #new_channels
//
module.exports = robot => {
  const slack = robot.adapter.client

  slack.on('raw_messages', msg => {
    if (msg && msg.type === 'channel_created') {
      robot.send({ root: 'random' }, `新しいチャンネル #${msg.channel.id}が作られたよ！`)
    }
  })
}
