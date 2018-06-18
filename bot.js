global.__basedir = __dirname;

const Telegraf = require('telegraf');
const config = require('./config');
const bot = new Telegraf(config.API_KEY);
const c = require('./library/commands');


console.log(__basedir);

/*
 *  Console output Bot Username
 */
bot.telegram.getMe().then((bot_informations) => {
    bot.options.username = bot_informations.username;
console.log("Server has initialized bot nickname. Nick: "+bot_informations.username);
});


/*
 * on start command (/start@bot)
 */
bot.start((ctx) => c.commands.admin(ctx, false));


/*
 * Bot commands
 */
bot.command('admin', (ctx) => c.commands.admin(ctx, true));
bot.command('list', (ctx) => c.commands.list(ctx));
bot.command('add', (ctx) => c.commands.add(ctx));
bot.command('merci', (ctx) => c.commands.merci(ctx));
bot.command('delete', (ctx) => c.commands.delete(ctx));
bot.command('ask', (ctx) => c.commands.ask(ctx));

bot.startPolling();

