# Description:
#   > 突然の死 <
#
# Dependencies:
#   "eastasianwidth": "~0.1.0"
#
# Configuration:
#   None
#
# Commands:
#   hubot >< <message> - Ascii art generator for sudden death.
#

eastasianwidth = require 'eastasianwidth'

strpad = (str, count) ->
  new Array(count + 1).join str

module.exports = (robot) ->
  robot.respond />< (.*)$/i, (msg) ->
    message = msg.match[1].replace /^\s+|\s+$/g, ''
    return until message.length

    length = Math.floor eastasianwidth.length(message) / 2

    suddendeath = [
      "＿#{strpad '人', length + 2}＿"
      "＞　#{message}　＜"
      "￣Y#{strpad '^Y', length}￣"
    ]
    msg.send suddendeath.join "\n"
