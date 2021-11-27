const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("i suck")
    .setStyle("LINK")
    .setURL("https://discord.gg/trades),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/trades")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('LavaMusic', 'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setThumbnail('https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setColor('#303236')
            .addField('Creator', '[offbeat](https://offbeat-s.carrd.co)', true)
            //.addField('Organization', '[Blacky](https://github.com/brblacky)', true)
            .addField('fuck you', 'ah shit', true)
            .addField('\u200b',
                `to make aesthetic`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
