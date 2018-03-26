const jsonfile = require('jsonfile');

exports.data = {
    DATA_FILE: './data/data.json',
    DATA: {},

    __read: function(){
        this.DATA = jsonfile.readFileSync(this.DATA_FILE);
    },
    
    __write: function () {
        jsonfile.writeFile(this.DATA_FILE, this.DATA, {spaces: 2}, function (err) {
            console.error(err)
        });
    },

    getInfos: function (ctx) {
        this.__read();
        if(!this.DATA.hasOwnProperty(ctx.chat.id)){
            this.setGroup(ctx, {
                admins: {},
                deadlines: {}
            });
        }
        return this.DATA[ctx.chat.id];
    },

    setGroup: function (ctx, data) {
        this.DATA[ctx.chat.id] = data;
        this.__write();
    },

    clearGroup: function(ctx){

        this.DATA[ctx.chat.id] = undefined;
        this.__write();
    },

    setGroupAdmin: function(ctx, admin){

        if(typeof this.DATA[ctx.chat.id] === 'undefined'){
            this.DATA[ctx.chat.id] = {
                admins: {}
            };
        }

        this.DATA[ctx.chat.id]['person'][ctx.from.id] = {
            id: ctx.from.id,
            admins: admin
        };
        this.__write();
    }
};