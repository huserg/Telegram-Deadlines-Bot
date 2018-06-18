const List = require('./list');
const Add = require('./add');
const Delete = require('./delete');
const Admin = require('./admin');
const Merci = require('./merci');
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
    merci: function (ctx, admin) {
        Merci.merci(ctx, admin);
    },
    ask: function (ctx) {
        Ask.ask(ctx);
    }
};