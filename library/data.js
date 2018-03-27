const jsonfile = require('jsonfile');

exports.data = {
    DATA_FILE: './data/data.json',
    DATA: {},

    __read: function(){
        this.DATA = jsonfile.readFileSync(this.DATA_FILE);
    },
    
    __write: function () {
        jsonfile.writeFile(this.DATA_FILE, this.DATA, {spaces: 2}, function (err) {
            if (err != null) console.error("Error: " + err)
        });
    },

    getInfos: function (ctx) {
        this.__read();
        if(!this.DATA.hasOwnProperty(ctx.chat.id)){
            this.setGroup(ctx, {
                admins: [],
                deadlines: []
            });
        }
        return this.DATA[ctx.chat.id];
    },

    setGroup: function (ctx, data) {
        this.DATA[ctx.chat.id] = data;
        this.__write();
    },


    setGroupAdmin: function(ctx, admins){
        if(typeof this.DATA[ctx.chat.id] === 'undefined'){
            this.DATA[ctx.chat.id] = {
                admins: [],
                deadlines: []
            };
        }
        this.DATA[ctx.chat.id]['admins'] = admins;
        this.__write();
    },

    addNewDeadline: function(ctx, subject, date, theme){

        var deadlines = this.getInfos(ctx)['deadlines'];
        deadlines.push({"subject": subject, "date": date, "theme": theme});
        this.DATA[ctx.chat.id]['deadlines'] = deadlines;
        this.__write();
    }


};