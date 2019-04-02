# Telegram-Deadlines-Bot
A node.JS bot based on telegraph to manage deadlines


## How to launch

Install node dependencies with
```
npm install
```

then create `config.js` file at the root of the project and add :
```
module.exports = {API_KEY: 'YOUR BOT API KEY HERE'};
```

finally launch the bot with `telegram-deadline-bot.js` file

## How to use it

All commands are done in Telegram

### Admin part

When you add the bot in a group, you have to claim your rights by typing

    /admin 

Then this command will display the list of admins

Add a Telegram user ID to add it to the admin list 

    /admin <telegram_user_id>

### Adding a deadline

    /add your subject;DD-MM-YYYY;your theme or topic;file?true|false;filename
    
### Listing deadlines

    /list
    
### Delete a deadline

    /delete <deadline_number>
    
### Asking a file to the bot 

    /ask <filename>