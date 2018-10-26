# cpsbot [![Build Status](https://travis-ci.org/cpslab/cpsbot.svg?branch=master)](https://travis-ci.org/cpslab/cpsbot)

## スクリプトの追加

`scripts`以下に新しいスクリプトを配置するとhubotから読み込まれます。
masterにpushすればherokuへ自動デプロイされるます。

また、3行程度の短いスクリプトの場合は、`misc.js`に追加するといいでしょう。
スクリプトの書き方は、`example.coffee`を参考にしてください。

## システム構成
![aaa](https://raw.githubusercontent.com/wiki/cpslab/cpsbot/cpslab_system.png)

Hubot というNode.js のボットフレームワークを使っている。
Heroku の中にHubot サーバーと、Redisというインメモリ Key/Value DB を繋げている。 

## 管理者
@akameco -> 現在 @macinjoke (牧野)
開発に興味があったり、質問があったらお気軽にどうぞ。
