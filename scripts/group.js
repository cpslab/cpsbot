// Description:
//   メンバーグループ呼び出し
// Commands:
//   @b3, @b4, @m1, @m2

'use strict';

module.exports = robot => {
	robot.brain.autoSave = true;

	robot.hear(/@b4/i, msg => {
		msg.send(`@Enomoto Yasunori @yuto_otuska @yusuke @rone @Megumi Kamimura @seiyanakamura @YukiAdachi @izumi keita @spawn @kotako @masashi nakazawa @hamajun @FJ @Kyota Uchida @Haruki Sakai @umeboshi`);
	});

	robot.hear(/@m1/i, msg => {
		msg.send(`@sarise @hayashi @fjsmu @makky @atsuo`);
	});

	robot.hear(/@m2/i, msg => {
		msg.send(`@adachi @kudo`);
	});

	robot.hear(/@m3/i, msg => {
		msg.send(`@elzup @naoki @naoya @ninten @sukonbu`);
	});

	robot.hear(/@m4/i, msg => {
		msg.send(`@kondo @kyosuke @misaki @mitsuha_suxee @shinji_cps @shino @tk @tsuno @yone`);
	});
};
