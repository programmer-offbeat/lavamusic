const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "247",
  aliases: ["24h", "24/7", "24*7"],
  category: "Music",
  description: "Toggle 24/7 in voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {


    const player = message.client.manager.players.get(message.guild.id);
    if (player.twentyFourSeven) {
      player.twentyFourSeven = false;
      const embed = new MessageEmbed()
       .setColor('#FF0000')
       .setTitle(`<:dt_arrowpink:914341737877631007> 24x7 mode`)
       .setDescription(`24/7 mode is now turned off.`)
      return message.reply({embeds: [embed]});
    }
    else {
      player.twentyFourSeven = true;
      const embed = new MessageEmbed()
       .setTitle(`<:dt_arrowpink:914341737877631007> 24x7 mode`)
       //.setColor(client.embedColor)
       .setColor('#8acc98')
       .setDescription(`24/7 mode is now on.\nThe bot will not leave the VC now!`)
      
      return message.reply({embeds: [embed]});
    }
  }
};
