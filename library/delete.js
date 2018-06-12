const D = require('./data');
const DateFormat = require('moment');

exports.delete = function (ctx) {

    let admins = D.data.getInfos(ctx)['admins'];

    if (admins.indexOf(ctx.from.id) >= 0) {
        let command = ctx.message.text.split(' ');
        D.data.deleteDeadline(ctx, command[1]);
        return ctx.reply("Entry number " + command[1] + " deleted!");
    }
    else
        return ctx.reply("Insufficient permissions are insufficient!");
}
