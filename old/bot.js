const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on("ready", ()=>{
    console.log("logado")
})

cliente.on('message', (message) =>{
    if(message.content === "oi"){
        message.reply("Oi marimari")
    }
})

cliente.login('MTE2MzgzMTgxOTIwNTA4NzMzNQ.G9sf0T.W9rgP9lxzLwGADLsnRZUyrFg5aGymyMtdUzZbg')