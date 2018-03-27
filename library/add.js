const D = require('./data');
const DateFormat = require('moment');

exports.add = function (ctx) {

    let admins = D.data.getInfos(ctx)['admins'];

    if (admins.indexOf(ctx.from.id) >= 0) {

        let command = ctx.message.text.split(';');
        let subject = command[0].split(/ (.+)/)[1];
        let date = command[1];
        let theme = command[2];

        date = DateFormat(date, 'DD-MM-YYYY').format('L');

        if (typeof subject === 'undefined' || typeof date === 'undefined' || typeof theme === 'undefined')
            return ctx.reply("Invalid format! The right format is : \r\n/add your subject;DD-MM-YYYY;your theme or topic");

        if (isNaN(Date.parse(date)))
            return ctx.reply(date + " is not a valid format for a date.");

        D.data.addNewDeadline(ctx, subject, date, theme);

        return ctx.reply("" +
            "New Deadline added ! \r\n\r\n" +
            "Subject : " + subject + " \r\n" +
            "Date : " + DateFormat(date, 'L').format('DD-MM-YYYY') + " \r\n" +
            "Theme : " + theme);

    }
}

