const { MessageEmbed } = require("discord.js");
const { eco } = require("../../../Structures/Managers");
const Command = require("../../../Structures/Command");

module.exports = class extends (
  Command
) {
  constructor(...args) {
    super(...args, {
      aliases: ["give"],
      description: "Give money to someone. Come'on .. just be kindful for once..",
      category: "💰Economy",
      usage: "",
    });
  }
  async run(message,args) {
    message.channel.send("this command is not ready to use! this will be announced in Lilly's update once finished")
    /*let userID = args[0];
    if(!userID) message.channel.send("an error occurred! please try again")
    const money = Math.floor(Math.random() * 200) + 1
    let add = await eco.addMoney(userID, false, money);
    let mentionedMemberMoney = await eco.fetchMoney(userID,false)
    
    message.reply(`Thank you for your donation! ${userID} has now ${mentionedMemberMoney}`)
  */}}