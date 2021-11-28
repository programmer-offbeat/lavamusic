const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            //.setColor(message.client.embedColor)
	      .setColor('##7ba3cf')
            .setThumbnail(message.client.user.displayAvatarURL())
	    .setTitle(`<a:HD_arrow:914341825639251968> Bot status ;;`)
            .setDescription(`
**⇢ __Statistics__ :-**
> <:Blue_Dash:914341403193118750> Servers : \`${scount}\`
> <:Blue_Dash:914341403193118750> Channels : \`${ccount}\`
> <:Blue_Dash:914341403193118750> Users : \`${mcount}\`
> <:Blue_Dash:914341403193118750>• Uptime : \`${duration1}\`
**⇢ __System__ :-**
> <:Blue_Dash:914341403193118750> Platfrom : \`${os.type}\`
> <:Blue_Dash:914341403193118750> Discord.js : \`v${version}\`
> <:Blue_Dash:914341403193118750> Node : \`${process.version}\`
**⇢ __CPU__ :-**
> <:Blue_Dash:914341403193118750> Cores : \`${cpu.cores}\`
> <:Blue_Dash:914341403193118750> Model : \`${os.cpus()[0].model}\` 
> <:Blue_Dash:914341403193118750> Speed : \`${os.cpus()[0].speed} MHz\`
**⇢ __Memory__ :-**
> <:Blue_Dash:914341403193118750> Total Memory : \`${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps\`
> <:Blue_Dash:914341403193118750> Free Memory : \`${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps\`
> <:Blue_Dash:914341403193118750> Heap Total : \`${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps\`
> <:Blue_Dash:914341403193118750> Heap Usage : \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps\`
`);
         message.reply({embeds: [embed]});
    }
	}
