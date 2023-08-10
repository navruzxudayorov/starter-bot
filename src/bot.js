const { Bot,session} = require('grammy');
const { config } = require('./config/config');
const command=require('./modules/command')
const bot = new Bot(config.bot_token);

bot.use(session({ initial: () => ({step: 'start' })}));
bot.use(command)
bot.start();
