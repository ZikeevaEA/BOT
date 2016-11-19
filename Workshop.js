


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
	var heals = jf.readFileSync('C:/BlindWar/Databases/Items.json').heals;
	
	
       User.state = 'shop_menu';
  
*************************************************************************************************************** 
       if (txt === 'КУПИТЬ ОРУЖИЕ') {
					User.state = 'buy_weapon';
					bot.sendMessage(chatId, 'Введите уровень оружия, которое желаете приобрести'); 
					}
	if ((txt === 'НАЗАД') && (User.state = 'buy_weapon'))  { User.state = 'shop_menu';}

	if (User.state == 'buy_weapon') {
		User.state = 'buy_weapon_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < weapons.length; i++) {
				Var s = "id: " weapons[i].id + "\nУрон: " + weapons[i].damage + "\nПодзарядка: "  + weapons[i].cooldawn  + "\nНеобходимый уровень: " + weapons[i].needLevel + "lvl"  + "\nЦена: " + weapons[i].price ;
				if (n == weapons[i].needLevel) {
					bot.sendMessage(chatID, s);
				}

				else { 
					bot.sendMessage(chatID, "Оружия введённого уровня нет");
					User.state = 'buy_weapon';
					}
				bot.sendMessage(chatID, "Чтобы купить оружие, введите его id");
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести число.");
			User.state = 'buy_weapon';
			}
	}

	if ((txt === 'НАЗАД') && (User.state == 'buy_weapon_id'))  { User.state = 'buy_weapon';}	
	
	if (User.state == 'buy_weapon_id') {
		User.state = 'buy_weapon_id1';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < weapons.length; i++) {
				if (weapons[i].id = t) {
						var weapon = weapons[i].id;
				}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == weapon.id) {f=1}
				}
	
      			if ((user.money >= weapon.price) && (user.robot.level >= weapon.needLevel) && (f == 0)){		
				
				var insertData = my_funcs.InsertById(user.inventory, wreapon);
				user.inventory = insertData['user.inventory'];
				result['wreaponN'] = insertData['wreaponN'];
				result['wreapon'] = wreapon;
				user.money = user.money - weapon.price; 
			}
			else{
				if(user.money < weapon.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов"); User.state = 'shop_menu';}
				if(user.robot.level >= weapon.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень"); User.state = 'shop_menu';}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть это оружие"); User.state = 'shop_menu';}
			}
		}
		else{
			bot.sendMessage(chatID, "Необходимо ввести id оружия.");
			User.state = 'buy_weapon_id';
		}
	}
********************************************************************************************************************
    if (txt === 'КУПИТЬ ЭКИПЕРОВКУ') {
					
		User.state = 'buy_equipment';
		bot.sendMessage(chatId, 'Вы хотите приобрести щит или лечение?');
    	}
	if ((txt === 'НАЗАД') && (User.state == 'buy_equipment')) { User.state = 'shop_menu';}
	
	if ((User.state == 'buy_equipment') && (txt === 'ЩИТ')) {
			User.state = 'buy_shield';
			bot.sendMessage(chatId, 'Перманентный или обыкновенный щит?');
	}

	if ((txt === 'НАЗАД') && (User.state == 'buy_shield')) { User.state = 'buy_equipment';}

	if ((User.state == 'buy_shield') && (txt === 'ПЕРМАНЕНТНЫЙ')) 

		{
			User.state = 'buy_const_shield';
			bot.sendMessage(chatId, 'Введите уровень перманентного щита');
		}
	
	if ((txt === 'НАЗАД') && (User.state == 'buy_const_shield')) { User.state = 'buy_shield';}
	
	if (User.state == 'buy_const_shield') {
		User.state = 'buy_const_shield_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < const_shields.length; i++) {
				Var s = "id: " const_shields[i].id + "\nЗащита: " + const_shields[i].resist + "\nНеобходимый уровень: " + const_shields[i].needLevel + "lvl"  + "\nЦена: " + const_shields[i].price ;
				if (n == const_shields[i].needLevel) {
					bot.sendMessage(chatID, s);
					
				}

				else { 
					bot.sendMessage(chatID, "Перманентного щита введённого уровня нет"); 
					User.state = 'buy_const_shield';
				}
			}
			bot.sendMessage(chatID, "Чтобы купить щит, введите команду /'%id щита'");
		}
		else 
			{
			bot.sendMessage(chatID, "Необходимо ввести число");
			User.state = 'buy_const_shield';
		}
	
	}	
	if (User.state == 'buy_const_shield_id') {	
		User.state = 'buy_const_shield_id1';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < const_shields.length; i++) {
				if (const_shields[i].id = t) {
					var const_shield = const_shields[i].id;
				}
			}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == const_shield.id) {f=1}
			}

      			if ((user.money >= const_shield.price) && (user.robot.level >= const_shield.needLevel) && (f == 0)){		
				var insertData = my_funcs.InsertById(user.inventory, const_shield);
				user.inventory = insertData['user.inventory'];
				result['const_shieldN'] = insertData['const_shieldN'];
				result['const_shield'] = const_shield;
				user.money = user.money - const_shield.price;
			}
			else{
				if(user.money < const_shield.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов"); User.state = 'shop_menu';}
				if(user.robot.level >= const_shield.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень"); User.state = 'shop_menu';}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть этот щит"); User.state = 'shop_menu';}
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести id перманентного щита");
			User.state = 'buy_const_shield_id';
		}
	}







	if ((User.state == 'buy_shield') && (txt === 'ОБЫКНОВЕННЫЙ')) 

		{
			User.state = 'buy_ordinary_shield';
			bot.sendMessage(chatId, 'Введите уровень обыкновенного щита');
		}

	if ((txt === 'НАЗАД') && (User.state == 'buy_ordinary_shield')) { User.state = 'buy_shield';}

	if (User.state == 'buy_ordinary_shield') {
		User.state = 'buy_ordinary_shield_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < shields.length; i++) {
				Var s = "id: " shields[i].id + "\nЗащита: " + shields[i].resist + "\nКоличество отраженных атак: " + shields[i].attakN + "\nПерезарадка: " + shields[i].cooldawn + "\nНеобходимый уровень: " + shields[i].needLevel + "lvl"  + "\nЦена: " + shields[i].price ;
				if (n == shields[i].needLevel) {
					bot.sendMessage(chatID, s);
				}

				else { 
					bot.sendMessage(chatID, "Обыкновенного щита введённого уровня нет");
					User.state = 'buy_ordinary_shield'; 
				}
			}
			bot.sendMessage(chatID, "Чтобы купить щит, введите команду /'%id щита'");
		}
		else 
			{
			bot.sendMessage(chatID, "Необходимо ввести число");
			User.state = 'buy_ordinary_shield'; 
		}	
	}
	if (User.state == 'buy_ordinary_shield_id') {
		User.state = 'buy_ordinary_shield_id1';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < shields.length; i++) {
				if (shields[i].id = t) {
					var shield = shields[i].id;
				}
			}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == shield.id) {f=1}
			}
		
      			if ((user.money >= shield.price) && (user.robot.level >= shield.needLevel) && (f == 0)){		
				var insertData = my_funcs.InsertById(user.inventory, shield);
				ser.inventory = insertData['user.inventory'];
				result['shieldN'] = insertData['shieldN'];
				result['shield'] = shield;
				user.money = user.money - shield.price;
			}
			else{
				if(user.money < shield.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов"); User.state = 'shop_menu';}
				if(user.robot.level >= shield.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень"); User.state = 'shop_menu';}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть этот щит"); User.state = 'shop_menu';}
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести id обыкновенного щита");
			User.state = 'buy_ordinary_shield_id';
		}
	}
		
