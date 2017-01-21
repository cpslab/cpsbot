// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b3, @b4, @m1, @m2

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/@b3/i, msg => {
		msg.send(`@atsuo @fjsmu @hashikazu @hayashi @jazzmas0531 @kodama_sakana @makky @naoki @sarise @seiyanakamura @wada`);
	});

	robot.hear(/@b4/i, msg => {
		msg.send(`@adachi @akameco @hiwatashi @iwamoto @kudo @morosawa @muni @shimada @tsukada @yuu`);
	});

	robot.hear(/@m1/i, msg => {
		msg.send(`@elzup @naoki @naoya @ninten @sukonbu`);
	});

	robot.hear(/@m2/i, msg => {
		msg.send(`@kondo @kyosuke @misaki @mitsuha_suxee @shinji_cps @shino @tk @tsuno @yone`);
	});
};
