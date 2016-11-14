
function workshop(msg, user, bot)
{
	//подключаем нужные модули
	var fs = require('fs');
	var jf = require('jsonfile');
	var my_funcs = require('./My_funcs.js');
	var my_classes = require('./My_classes.js');
	var menu = jf.readFileSync('C:/BlindWar/Databases/Menu.json').menu;
	var users = jf.readFileSync('C:/BlindWar/Databases/Users.json').users;
	var weapons = jf.readFileSync('C:/BlindWar/Databases/Items.json').weapons;
	
	
       User.state = 'shop_menu';
   
       if (txt === '/ÊÓÏÈÒÜ ÎÐÓÆÈÅ') {
					
		User.state = 'buy_weapon';
		bot.sendMessage(chatId, 'Введите уровень оружия, которое желаете приобрести');
		bot.on(n, function (msg) { 
			if (typeof n == 'integer') {
				for (var i = 0; i < weapons.length; i++) {
					Var s = "id: " weapons[i].id + "\nУрон: " + weapons[i].damage + "\nПодзарядка: "  + weapons[i].cooldawn  + "\nНеобходимый уровень: " + weapons[i].needLevel + "lvl"  + "\nЦена: " + weapons[i].price ;
					if (n == weapons[i].needLevel) {
						bot.sendMessage(chatID, s);
						User.state = 'buy';
					}
					else { bot.sendMessage(chatID, "Уружия введённого уровня нет"); }
				}
				bot.sendMessage(chatID, "Чтобы купить оружие, введите /'%id оружия'");
			}
			else 
				{bot.sendMessage(chatID, "Необходимо ввести число");}
		}
				
		bot.onText(/\/id (.+)/, function (msg, match) {
      						
      			var t = match[1];
			for (var i = 0; i < weapons.length; i++) {
				if (weapons[i].id = t) {
						var weapon = weapons[i].id;
				}
			}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == weapon.id) {f=1}
			}
	
      			if ((user.money > weapon.price) && (user.robot.level >= weapon.needLevel) && (f == 0)){		
				
				var insertData = my_funcs.InsertById(user.inventory, wreapon);
				user.inventory = insertData['user.inventory'];
				result['wreaponN'] = insertData['wreaponN'];
				result['wreapon'] = wreapon;
			}
			else{
				if(user.money < weapon.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов");}
				if(user.robot.level >= weapon.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень");}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть оружие");}
			}
		}
       }
}
				
			
			









