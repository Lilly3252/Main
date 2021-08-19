const Event = require("../../Structures/Event"),
  config = require("../../config.json"),
  mongoose = require("mongoose"),
  Guild = require("../../Database/models/Guild"),
  { MessageEmbed } = require("discord.js");
module.exports = class extends Event {
  async run(a) {
    if (!a.guild || a.author.bot) return;
    const b = await Guild.findOne({ guildID: a.guild.id }, (b, c) => {
        if ((b && console.error(b), !c)) {
          const b = new Guild({
            _id: mongoose.Types.ObjectId(),
            guildID: a.guild.id,
            guildName: a.guild.name,
            prefix: config.prefix,
            moderatorRoleID: null,
            welcomechannelID: null,
            logchannelID: null,
            antiRaidMode: !1,
            messageBulkDeleteMode: !1,
            messageDeleteMode: !1,
            messageUpdateMode: !1,
            PersonalizedWelcomeMessage: null,
          });
          return (
            b
              .save()
              .then((a) => console.log(a))
              .catch((a) => console.error(a)),
            a.channel
              .send(
                "This server was not in our database! We have now added and you should be able to use bot commands."
              )
              .then((a) => a.delete({ timeout: 1e4 }))
          );
        }
      }),
      c = { ignoreEveryone: !0 };
    `<@!${a.guild.me.id}>` === a.content &&
      a.channel.send(`My prefix for ${a.guild.name} is \`${b.prefix}\`.`),
      a.mentions.has("768224275508887603", c) &&
        a.channel.send(`Role mentioned , what's up?`);
      /*a.mentions.has("165922734461812736", c) &&
        a.client.users.cache
          .get("165922734461812736")
          .send(
            `${a.member.user.tag} mentioned your name inside ${b.guildName}!\n Context: ${a.content}\n<${a.url}>`
          )*/
    const d = b.moderatorRoleID,
      e = b.logchannelID;
    if (
      a.mentions.has(d, c) &&
      (a.client.channels.cache.get(e).send(
        new MessageEmbed()
          .setTitle("Moderator Mentioned")
          .setThumbnail(a.guild.iconURL({ dynamic: !0 }))
          .setDescription([
            `**Person who mentioned**: ${a.member}`,
            `**Channel**: ${a.channel}`,
            `**Content**: ${a.content}`,
          ])
          .addField("\u200B", `[Click here to see the message](${a.url})`)
      ),
      !e && !d)
    )
      return;
    const f = b.prefix;
    if (!a.content.startsWith(f)) return;
    const [g, ...h] = a.content.slice(f.length).trim().split(/ +/g),
      i =
        this.client.commands.get(g.toLowerCase()) ||
        this.client.commands.get(this.client.aliases.get(g.toLowerCase()));
    if (i) {
      if (i.ownerOnly && !this.client.utils.checkOwner(a.author.id))
        return a.reply(
          "Sorry, this command can only be used by the bot owners."
        );
      if (i.guildOnly && !a.guild)
        return a.reply(
          "Sorry, this command can only be used in a discord server."
        );
      if (i.nsfw && !a.channel.nsfw)
        return a.reply(
          "Sorry, this command can only be ran in a NSFW marked channel."
        );
      if (i.args && !h.length)
        return a.reply(
          `Sorry, this command requires arguments to function. Usage: ${
            i.usage
              ? `${this.client.prefix + i.name} ${i.usage}`
              : "This command doesn't have a usage format"
          }`
        );
      if (a.guild) {
        const b = i.userPerms
          ? this.client.defaultPerms.add(i.userPerms)
          : this.client.defaultPerms;
        if (b) {
          const c = a.channel.permissionsFor(a.member).missing(b);
          if (c.length)
            return a.reply(
              `You are missing ${this.client.utils.formatArray(
                c.map(this.client.utils.formatPerms)
              )} permissions, you need them to use this command!`
            );
        }
        const c = i.botPerms
          ? this.client.defaultPerms.add(i.botPerms)
          : this.client.defaultPerms;
        if (c) {
          const b = a.channel.permissionsFor(this.client.user).missing(c);
          if (b.length)
            return a.reply(
              `I am missing ${this.client.utils.formatArray(
                b.map(this.client.utils.formatPerms)
              )} permissions, I need them to run this command!`
            );
        }
      }
      i.run(a, h);
    }
  }
};
