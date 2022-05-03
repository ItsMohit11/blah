const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => res.send("hello hello!"));

app.listen(3000, () => console.log("SUSSY BALAK"));

global.Discord = require("discord.js");
global.client = new Discord.Client({ intents: 32767 });

client.prefix = "n."
client.commands = new Disocrd.Collection();
const commands = fs
  .readdirSync("./Commands")
  .filter((file) => file.endsWith(".js"));
for (file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./Command/${commandName}`);
  client.commands.set(commandName, command);
}

client.on("messageCreate", (message) => {
  require("boss")(message);
  if (message.content === "ping") {
    messahe.channel.send("pong");
  }
});

client.login(process.env.token);
