const D = require('./data');

exports.add = function (ctx) {

    var str = ctx.from.first_name + " ";
    var admins = D.data.getInfos(ctx)['admins'];

    if (admins.indexOf(ctx.from.id) >= 0) {

        var command = ctx.message.text.split(';');
        var subject = command[0].split(/ (.+)/)[1];
        var date = command[1];
        var theme = command[2];

        date = new Date(date);

        if (typeof subject === 'undefined' || typeof date === 'undefined' || typeof theme === 'undefined')
            return ctx.reply("Unvalid format");

        D.data.addNewDeadline(ctx, subject, date, theme);

        return ctx.reply("New Deadline added ! \r\n\r\nSubject : " + subject + " \r\nDate : " + date + " \r\nTheme : " + theme);


    }
}