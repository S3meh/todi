require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const todi = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
todi.on('ready', () => {
    console.log(`${todi.user.tag} is online!`);
});
todi.on('messageCreate', (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content == 'hello'){
        msg.reply('hello');
    }
});

todi.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName == 'dare'){
        interaction.reply('I DARE U');
    }
    if(interaction.commandName == 'truth'){
        interaction.reply('SAY THE TRUTH');
    }
    if(interaction.commandName == 'random'){
        interaction.reply('TRUTH OR DARE NEVER KNOW');
    }
});

todi.login(process.env.TOKEN);

