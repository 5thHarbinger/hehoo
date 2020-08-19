const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (/^(heho+)$/i.test(msg.content)) {
    msg.channel.send(new Discord.MessageAttachment("./heho.jpg"));
  }
});

client.login(process.env.TOKEN);