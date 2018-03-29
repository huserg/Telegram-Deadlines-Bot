const List = require('./list');
const Add = require('./add');
const Admin = require('./admin');
const Merci = require('./merci');


exports.commands = {
    list: function (ctx) {
        List.list(ctx);
    },
    add: function (ctx) {
        Add.add(ctx);
    },
    admin: function (ctx, admin) {
        Admin.admin(ctx, admin);
    },
    merci: function (ctx, admin) {
        Merci.merci(ctx, admin);
    }
};