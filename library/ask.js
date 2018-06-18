const fs = require('fs');

exports.ask = function (ctx) {

    let filename = ctx.message.text.split(' ')[1];

    let file = __basedir + "/data/ask/" + filename;

    if (fs.existsSync(file))
        return ctx.replyWithPhoto({ source: fs.createReadStream(file) });
    else
        return ctx.reply("Désolé aucun fichier ne correspond à : " + filename);
};