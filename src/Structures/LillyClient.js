const { Client, Collection, Permissions, Intents } = require("discord.js"),
  Util = require("./Util.js");
module.exports = class extends Client {
  constructor(a = {}) {
    super({
      disableMentions: "everyone",
      partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD_MEMBER"],
      ws: { intents: Intents.ALL },
    }),
      this.validate(a),
      (this.commands = new Collection()),
      (this.aliases = new Collection()),
      (this.events = new Collection()),
      (this.queue = new Map()),
      (this.utils = new Util(this)),
      (this.owners = a.owners);
  }
  validate(a) {
    if ("object" != typeof a)
      throw new TypeError("Options should be a type of Object.");
    if (!a.token) throw new Error("You must pass the token for the client.");
    if (((this.token = a.token), !a.prefix))
      throw new Error("You must pass a prefix for the client.");
    if ("string" != typeof a.prefix)
      throw new TypeError("Prefix should be a type of String.");
    if (((this.prefix = a.prefix), !a.defaultPerms))
      throw new Error("You must pass default perm(s) for the Client.");
    this.defaultPerms = new Permissions(a.defaultPerms).freeze();
  }
  async start(a = this.token) {
    this.utils.loadCommands(), this.utils.loadEvents(), await super.login(a);
  }
};
