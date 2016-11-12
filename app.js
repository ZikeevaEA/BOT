var TelegramBot = require('node-telegram-bot-api');
var token = '222264574:AAFDAvqlCxQk4G7wBd1BT5PNWTduWuPQFmI';
var bot = new TelegramBot(token, {polling: true});


//функция on подписывает функцию которая передаётся в аргументе на определённое событие, ключ которого передаётся первым аргументом 
bot.on('message', function (msg) { 
//msg - это объект содержащий всебе сообщение и все данные о нём 
var userId = msg.from.id; 
var username = msg.from.first_name; 
var userLastName = msg.from.last_name; 
console.log(msg);//вывод в консоль 
bot.sendMessage(userId, userId);//оправка сообщения 
bot.sendMessage(userId, username); 
bot.sendMessage(userId, userLastName); 
bot.sendMessage(userId, "Hello! What you do?");
});