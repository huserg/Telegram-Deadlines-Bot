const Telegraf = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.API_KEY);

const c = require('./library/commands');



bot.telegram.getMe().then((bot_informations) => {
    bot.options.username = bot_informations.username;
console.log("Server has initialized bot nickname. Nick: "+bot_informations.username);
});


bot.start((ctx) => ctx.reply('Give me your class.'));

bot.command('list', (ctx) => c.commands.list(ctx));


bot.startPolling();
