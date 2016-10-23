module.exports = (robot) ->
	robot.brain.autoSave = true

	robot.hear /^logger add (.+)$/, (msg) ->
		logger = robot.brain.get("logger/#{msg.message.room}") || []
		logger.push(msg.match[1])
		robot.brain.set("logger/#{msg.message.room}", logger)

	robot.hear /^logger del (.+)$/, (msg) ->
		logger = robot.brain.get("logger/#{msg.message.room}") || []
		logger = logger.reduce (arr, user) ->
			arr.push user if user != msg.match[1]
			arr
		, []
		robot.brain.set("logger/#{msg.message.room}", logger)

	robot.hear /^logger random$/i, (msg) ->
		logger = robot.brain.get("logger/#{msg.message.room}") || []
		user = logger[Math.floor(Math.random()*logger.length)]
		msg.send ":point_right: Next logger is #{user}"

	robot.hear /^logger list$/i, (msg) ->
		logger = robot.brain.get("logger/#{msg.message.room}") || []
		msg.send ":point_right: Loggers: #{logger.join(" ")}"
