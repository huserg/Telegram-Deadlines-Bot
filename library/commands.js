const List = require('./list');
const Add = require('./add');
const Admin = require('./admin');


exports.commands = {
    list: function (ctx) {
        List.list(ctx);
    },
    add: function (ctx) {
        Add.add(ctx);
    },
    admin: function (ctx, admin) {
        Admin.admin(ctx, admin);
    }
};