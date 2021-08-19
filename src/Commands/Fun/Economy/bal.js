const { eco } = require("../../../Structures/Managers");

const Command = require("../../../Structures/Command");

module.exports = class extends (
  Command
) {
  constructor(...args) {
    super(...args, {
      aliases: ["bal"],
      description: "Shows the balance you have",
      category: "💰Economy",
      usage: "",
    });
  }
  async run(message) {
    message.channel.send("this command is not ready to use! this will be announced in Lilly's update once finished")
    /*let money = await eco.fetchMoney(message.author.id);
    return message.channel.send(`${message.author} has ${money} coins.`);*/
  }
};
