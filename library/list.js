const D = require('./data');
const DateFormat = require('moment');

exports.list = function (ctx) {

    let str = '';

    let deadlines = D.data.getInfos(ctx)['deadlines'];

    deadlines.sort(function (a,b){
        a = new Date(a.date);
        b = new Date(b.date);
        return a>b ? 1 : a<b ? -1 : 0;
    });

    for (let i = 0; i<deadlines.length; i++) {
        str += "📆" + DateFormat(deadlines[i].date, 'L').format('DD-MM-YYYY') + " \r\n";
        str += "📋" + deadlines[i].subject + " \r\n";
        str += "📝" + deadlines[i].theme + " \r\n";
        str += "\r\n";
    }

    if (str == ''){
        str = 'Aucune deadline à venir!';
    }

    return ctx.reply(str);
}