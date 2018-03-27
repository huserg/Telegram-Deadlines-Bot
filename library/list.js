const D = require('./data');

exports.list = function (ctx) {

    var str = '';

    var deadlines = D.data.getInfos(ctx)['deadlines'];

    for (var i = 0; i<deadlines.length; i++){
        str += "📆" + deadlines[i].date + " \r\n";
        str += "📋" + deadlines[i].subject + " \r\n";
        str += "📝" + deadlines[i].theme + " \r\n";
        str += "\r\n\r\n";
    }

    return ctx.reply(str);
}