let msg = "Mensagem que sera enviada para os usuarios";
let token = "Token";

var colors = require('colors');
const { Client } = require("discord.js");
const client = new Client({ fetchAllMembers: true, intents: [32767] })

client.login(token);

client.on('ready', async() => {
   await client.users.cache.map(async x => {
      if(x.bot === false) {
          x.send(msg)
          .then(k => console.log(`[✅] - O ${x.username} recebeu a mensagem!`.green))
          .catch(e => {console.log(`[❌] - O ${x.username} não recebeu a mensagem!`.red)})
      }
   })
})