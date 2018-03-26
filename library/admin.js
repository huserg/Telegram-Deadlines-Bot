const D = require('./data');

exports.admin = function (ctx, admin) {

    D.data.setGroupAdmin(ctx, admin);
    ctx.reply(ctx.from.first_name + ' has set ' + admin + 'as admin.');


};