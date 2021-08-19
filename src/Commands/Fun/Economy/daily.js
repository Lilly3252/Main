const { eco } = require("../../../Structures/Managers");

const Command = require("../../../Structures/Command");

module.exports = class extends (
  Command
) {
  constructor(...args) {
    super(...args, {
      aliases: ["daily"],
      description: "Get your 500coins / day !",
      category: "💰Economy",
      usage: "",
    });
  }
  async run(message) {
    message.channel.send("this command is not ready to use! this will be announced in Lilly's update once finished")
    /*let add = await eco.daily(message.author.id, false, 500);
    if (add.cooldown)
      return message.reply(
        `You already claimed your daily coins. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`
      );
    return message.reply(
      `you claimed ${add.amount} as your daily coins and now you have total ${add.money} coins.`
    );
    
    */}
};
