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

const dares = [
    "Do a handstand",
    "Sing a song in a public place",
    "Eat a spoonful of hot sauce",
    "Do a cartwheel",
    "Wear your clothes backwards for the rest of the day",
    "Do 10 pushups",
    "Tell a joke",
    "Do a dance",
    "Make a prank call",
    "Speak in a different accent for the rest of the day"
];

const truths = [
    "What is your biggest fear?",
    "What is your biggest regret?",
    "What is the most embarrassing thing you've ever done?",
    "What is the craziest thing you've ever done?",
    "What is the most illegal thing you've ever done?",
    "What is the most expensive thing you've ever stolen?",
    "What is the most embarrassing thing in your room?",
    "What is the most embarrassing thing in your search history?",
    "What is the most embarrassing thing in your camera roll?",
    "What is the most embarrassing thing you've ever said to your crush?"
];




todi.on('ready', () => {
    console.log(`${todi.user.tag} is online!`);
});
todi.on('messageCreate', (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content == 'hello todi'){
        msg.reply('hello,\n You can use my commands:\n /dare \n /truth \n /random \n /add');
    }
});

todi.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName == 'dare'){
        const randomIndex = Math.floor(Math.random() * dares.length);
        const randomDare = dares[randomIndex];
        interaction.reply(randomDare);
    }
    if(interaction.commandName == 'truth'){
        const randomIndex = Math.floor(Math.random() * truths.length);
        const randomTruth = truths[randomIndex];
        interaction.reply(randomTruth);
    }
    if(interaction.commandName == 'random'){
        const randomType = Math.floor(Math.random() * 2);
        if(randomType === 0) {
            const randomIndex = Math.floor(Math.random() * dares.length);
            const randomDare = dares[randomIndex];
            interaction.reply(randomDare);
        } else {
            const randomIndex = Math.floor(Math.random() * truths.length);
            const randomTruth = truths[randomIndex];
            interaction.reply(randomTruth);
        }
    }
});

todi.login(process.env.TOKEN);