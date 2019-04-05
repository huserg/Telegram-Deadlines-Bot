const List = require('./list');
const Add = require('./add');
const Delete = require('./delete');
const Admin = require('./admin');
const Ask = require('./ask');

exports.commands = {
    list: function (ctx) {
        List.list(ctx);
    },
    add: function (ctx) {
        Add.add(ctx);
    },
    delete: function (ctx) {
        Delete.delete(ctx);
    },
    admin: function (ctx, admin) {
        Admin.admin(ctx, admin);
    },
    ask: function (ctx) {
        Ask.ask(ctx);
    },
    list_callback: function (ctx) {
        Ask.callback(ctx);
    }
};