const express = require("express")
const Discord = require("discord.js")
const client = new Discord.Client()
client.login("OTYwNTAwNjI4NjkyNTQ1NjQ3.Gs4tXG.hpzZPMyhl_mXCSh-_rVvKrREI36M__uvT7Umg8")
const prefix = "+"//اكتب برفكس
const app = express()
const port = 3000
app.get("/", (req, res) => {
  res.send(
    '<center><button><a href="https://discord.com/invite/developer-support" id="idk">developer-support</a></button></center><center><button><a href="https://discord.com/channels/800447810864152596/892172584785960990/892175035895275530" id="idk2">Need help? press me</a></button></center><style>#idk {text-decoration: none; } #idk2 {text-decoration: none;}</style>'
  )
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity(`${prefix}help`, { type: "STREAMING" }) //WATCHING, STREAMING, PLAYING, etc..

  client.user.setPresence("idle") //online, dnd, etc..
})



client.on('ready', async message => {
  await client.user.setStatus('idle');
	await client.user.setActivity(`Onis $`, { type: 'PLAYING' , url: "https://www.twitch.tv/amrhany73" });
  await console.log(`Bot Logging With : ${client.user.tag}`);
  client.channels.cache.get("").send('0')
});



setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);



//////////اخفاء واظهار 

  client.on('message', hie => {
      if(hie.content.startsWith(prefix + "hide")) {
      if(!hie.channel.guild) return;
      if(!hie.member.hasPermission('ADMINISTRATOR')) return hie.reply('You Dont Have Permission \`ADMINISTRATOR\` :x:');
             hie.channel.createOverwrite(hie.guild.id, {
             VIEW_CHANNEL: false
  }) 
  hie.channel.send(new Discord.MessageEmbed()
  .setDescription("**Channel is hidden🔴**")
  .setColor('RED'))
      }
  });
   
   
  client.on('message', hie => {
      if(hie.content.startsWith(prefix + "show")) {
      if(!hie.channel.guild) return;
      if(!hie.member.hasPermission('ADMINISTRATOR')) return hie.reply('You Dont Have Permission \`ADMINISTRATOR\` :x:');
             hie.channel.createOverwrite(hie.guild.id, {
             VIEW_CHANNEL: true
  })
  hie.channel.send(new Discord.MessageEmbed()
     .setDescription("**Channel has been unhiden🟢**")
     .setColor('GREEN'))  
  }
  }); 

////////////////// 


client.on("channelCreate", channel => {
  if (channel.name.startsWith('〢੭・')) {
    setTimeout(() => {
      channel.send(`+Rule ${channel}`)
    }, 2000)
  }
})


