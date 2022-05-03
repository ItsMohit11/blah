const boss = new Discord.WebhookClient({ url: process.env.boss });
const db = require("quick.db");

db.set("boss.health", 58000);

module.exports = async function boss(msg) {
  if (msg.channel.id !== "866175533364805672") return;

  if (msg.content.toLowerCase() == "punch") {
  }
};
