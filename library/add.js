const D = require('./data');
const DateFormat = require('moment');

exports.add = function (ctx) {

    let admins = D.data.getInfos(ctx)['admins'];

    if (admins.indexOf(ctx.from.id) >= 0) {

        let command = ctx.message.text.split(';');
        let subject = command[0].split(/ (.+)/)[1];
        let date = command[1];
        let theme = command[2];
        let callback = command[3];
        let file = null;
        if (command[4])
            file = command[4];

        date = DateFormat(date, 'DD-MM-YYYY').format('L');

        if (typeof subject === 'undefined' || typeof date === 'undefined' || typeof theme === 'undefined' || typeof callback === 'undefined')
            return ctx.reply("Invalid format! The right format is : \r\n/add your subject;DD-MM-YYYY;your theme or topic;file?true|false;filename");

        if (isNaN(Date.parse(date)))
            return ctx.reply(date + " is not a valid format for a date.");

        D.data.addNewDeadline(ctx, subject, date, theme, callback, file);

        return ctx.reply("" +
            subject + " Deadline added ! \r\n");
    }
}

