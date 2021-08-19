const { DiscordBattleShip } = require("discord-battleship");
const BattleShip = new DiscordBattleShip({prefix: "-"})

exports.BattleShip = BattleShip

const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    noNegative: true,
    adapter: 'mongo',
    adapterOptions: {
        collection: 'money', // => Collection Name
        uri: 'mongodb+srv://Lilly-dev:V0TFU0jowTxpIvyd@lillybot.43rtj.mongodb.net/Lilly' // => Mongodb uri
    }
});

exports.eco = eco