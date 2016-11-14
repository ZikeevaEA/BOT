

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
	var const_shields = jf.readFileSync('C:/BlindWar/Databases/Items.json').const_shields;
	var shields = jf.readFileSync('C:/BlindWar/Databases/Items.json').shields;
	
	
       User.state = 'shop_menu';
  
*************************************************************************************************************** 
       if (txt === '/КУПИТЬ ОРУЖИЕ') {
					
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

					else { bot.sendMessage(chatID, "Оружия введённого уровня нет"); }
					bot.sendMessage(chatID, "Чтобы купить оружие, введите команду /'%id оружия'");
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
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть это оружие");}
			}
		}
	}
********************************************************************************************************************
    if (txt === '/КУПИТЬ ЭКИПЕРОВКУ') {
					
		User.state = 'buy_equipment';
		bot.sendMessage(chatId, 'Вы хотите приобрести щит или лечение?');
		if (txt === '/ЩИТ'){
			bot.sendMessage(chatId, 'Перманентный или обыкновенный щит?');
			if (txt === '/ПЕРМАНЕНТНЫЙ'){
				bot.sendMessage(chatId, 'Введите уровень перманентного щита');
				bot.on(n, function (msg) { 
					if (typeof n == 'integer') {
						for (var i = 0; i < const_shields.length; i++) {
							Var s = "id: " const_shields[i].id + "\nЗащита: " + const_shields[i].resist + "\nНеобходимый уровень: " + const_shields[i].needLevel + "lvl"  + "\nЦена: " + const_shields[i].price ;
							if (n == const_shields[i].needLevel) {
								bot.sendMessage(chatID, s);
								User.state = 'buy';
							}

							else { bot.sendMessage(chatID, "Перманентного щита введённого уровня нет"); }
						}
						bot.sendMessage(chatID, "Чтобы купить щит, введите команду /'%id щита'");
					}
					else 
						{bot.sendMessage(chatID, "Необходимо ввести число");}
				}	
				
				bot.onText(/\/id (.+)/, function (msg, match) {			
      				var t = match[1];
				for (var i = 0; i < const_shields.length; i++) {
					if (const_shields[i].id = t) {
						var const_shield = const_shields[i].id;
					}
				}
				var f=0;
				for (var i = 0; i < user.inventory.length; i++) {
					if (user.inventory[i] == const_shield.id) {f=1}
					}
				}
      				if ((user.money > const_shield.price) && (user.robot.level >= const_shield.needLevel) && (f == 0)){		
					var insertData = my_funcs.InsertById(user.inventory, const_shield);
					user.inventory = insertData['user.inventory'];
					result['const_shieldN'] = insertData['const_shieldN'];
					result['const_shield'] = const_shield;
				}
				else{
					if(user.money < const_shield.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов");}
					if(user.robot.level >= const_shield.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень");}
					if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть этот щит");}
				}
			}


			if (txt === '/ОБЫКНОВЕННЫЙ'){
				bot.sendMessage(chatId, 'Введите уровень обыкновенного щита');
				bot.on(n, function (msg) { 
					if (typeof n == 'integer') {
						for (var i = 0; i < shields.length; i++) {
							Var s = "id: " shields[i].id + "\nЗащита: " + shields[i].resist + "\nКоличество отраженных атак: " + shields[i].attakN + "\nПерезарадка: " + shields[i].cooldawn + "\nНеобходимый уровень: " + shields[i].needLevel + "lvl"  + "\nЦена: " + shields[i].price ;
							if (n == shields[i].needLevel) {
								bot.sendMessage(chatID, s);
								User.state = 'buy';
							}

							else { bot.sendMessage(chatID, "Обыкновенного щита введённого уровня нет"); }
						}
						bot.sendMessage(chatID, "Чтобы купить щит, введите команду /'%id щита'");
					}
					else 
						{bot.sendMessage(chatID, "Необходимо ввести число");}
				}	
				
				bot.onText(/\/id (.+)/, function (msg, match) {			
      				var t = match[1];
				for (var i = 0; i < shields.length; i++) {
					if (shields[i].id = t) {
						var shield = shields[i].id;
					}
				}
				var f=0;
				for (var i = 0; i < user.inventory.length; i++) {
					if (user.inventory[i] == shield.id) {f=1}
					}
				}
      				if ((user.money > shield.price) && (user.robot.level >= shield.needLevel) && (f == 0)){		
					var insertData = my_funcs.InsertById(user.inventory, shield);
					user.inventory = insertData['user.inventory'];
					result['shieldN'] = insertData['shieldN'];
					result['shield'] = shield;
				}
				else{
					if(user.money < shield.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов");}
					if(user.robot.level >= shield.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень");}
					if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть этот щит");}
				}
			}









