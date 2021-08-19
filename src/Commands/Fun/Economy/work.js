const { MessageEmbed } = require("discord.js");
const { eco } = require("../../../Structures/Managers");
const Command = require("../../../Structures/Command");

module.exports = class extends (
  Command
) {
  constructor(...args) {
    super(...args, {
      aliases: ["Work"],
      description: "Work",
      category: "💰Economy",
      usage: "",
    });
  }
  async run(message) {
    message.channel.send("this command is not ready to use! this will be announced in Lilly's update once finished")
    /*const money = Math.floor(Math.random() * 200) + 1
    let add = await eco.addMoney(message.author.id, false, money);

    message.reply()
  */}}