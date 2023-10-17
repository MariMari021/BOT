import{ Client, IntentsBitField, Message } from "discord.js";
import* as  dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready',() =>{
    console.log("No ar")
})

client.on('messageCreate', (message)=>{
    if(message.author.bot) return
    if(message.content == "oi"){
        message.reply("Merry Christmas !! HOO HOO")
    }
})

client.on('messageCreate', (message)=>{
    if(message.author.bot) return
    if(message.content == "Me recomende uma música."){
        message.reply("Ouça Payphone - Maroon 5!")
    }
})

client.on('messageCreate', (message)=>{
    if(message.author.bot) return
    if(message.content == "To cansada"){
        message.reply("Durma minha querida(o)!")
    }
})

client.login(process.env.TOKEN)