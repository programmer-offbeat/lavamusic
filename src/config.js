module.exports = {
    token: process.env.TOKEN || "",
    prefix: process.env.PREFIX || ",",
    ownerID: process.env.OWNERID || "477140449811890188",
    SpotifyID: process.env.SPOTIFYID || "",
    SpotifySecret: process.env.SPOTIFYSECRET || "",
    mongourl: process.env.MONGO_URI || "",
    embedColor: process.env.COlOR || "#303236",
    logs: process.env.LOGS || "", 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}
