const fs = require('fs');
const tg = require('telegraf');
const askDir = __basedir + '/data/ask/';

exports.ask = function (ctx) {

    let filename = ctx.message.text.split(' ')[1];

    let file = askDir + filename;

    if (fs.existsSync(file))
        return ctx.replyWithPhoto({ source: fs.createReadStream(file) });
    else
        return ctx.reply("Désolé aucun fichier ne correspond à : " + filename);
};

exports.callback = function(ctx){
    return ctx.replyWithPhoto({ source: fs.createReadStream(askDir + ctx.callbackQuery.data) });
};