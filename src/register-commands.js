require('dotenv').config();
const{ REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'dare',
        description: 'I DARE U',
    },
    {
        name: 'truth',
        description: 'SAY THE TRUTH',
    },
    {
        name: 'random',
        description: 'TRUTH OR DARE NEVER KNOW',
    },
    {
        name: 'add',
        description: 'add a name',
        options:[
            {
                name: 'name',
                description: 'name to add',
                type: ApplicationCommandOptionType.STRING,
                required: true
            },
        ],
    },
];
console.log('Bot Token:', process.env.TOKEN);
const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
                ),
            { body: commands}
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.log('the error was : ' + error.message);
    }
})();