var TelegramBot = require('node-telegram-bot-api');
var token = '222264574:AAFDAvqlCxQk4G7wBd1BT5PNWTduWuPQFmI';
var bot = new TelegramBot(token, {polling: true});


//������� on ����������� ������� ������� ��������� � ��������� �� ����������� �������, ���� �������� ��������� ������ ���������� 
bot.on('message', function (msg) { 
//msg - ��� ������ ���������� ����� ��������� � ��� ������ � �� 
var userId = msg.from.id; 
var username = msg.from.first_name; 
var userLastName = msg.from.last_name; 
console.log(msg);//����� � ������� 
bot.sendMessage(userId, userId);//������� ��������� 
bot.sendMessage(userId, username); 
bot.sendMessage(userId, userLastName); 
bot.sendMessage(userId, "Hello! What you do?");
});