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
	var catch_heals = jf.readFileSync('C:/BlindWar/Databases/Items.json').catch_heals;
	
	
       User.state = 'shop_menu';
  
*************************************************************************************************************** 
       if (txt === 'КУПИТЬ ОРУЖИЕ') {
					User.state = 'buy_weapon';
					bot.sendMessage(chatId, 'Введите уровень оружия, которое желаете приобрести'); 
					}
	if ((txt === 'НАЗАД') && (User.state == 'buy_weapon'))  { User.state = 'shop_menu';}

	if (User.state == 'buy_weapon') {
		User.state = 'buy_weapon_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < weapons.length; i++) {
				Var s = "id: " + weapons[i].id + "\nУрон: " + weapons[i].damage + "\nПодзарядка: "  + weapons[i].cooldawn  + "\nНеобходимый уровень: " + weapons[i].needLevel + "lvl"  + "\nЦена: " + weapons[i].price ;
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
				Var s = "id: " + const_shields[i].id + "\nЗащита: " + const_shields[i].resist + "\nНеобходимый уровень: " + const_shields[i].needLevel + "lvl"  + "\nЦена: " + const_shields[i].price ;
				if (n == const_shields[i].needLevel) {
					bot.sendMessage(chatID, s);
					
				}

				else { 
					bot.sendMessage(chatID, "Перманентного щита введённого уровня нет"); 
					User.state = 'buy_const_shield';
				}
			}
			bot.sendMessage(chatID, "Чтобы купить щит, введите id щита");
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
				Var s = "id: " + shields[i].id + "\nЗащита: " + shields[i].resist + "\nКоличество отраженных атак: " + shields[i].attakN + "\nПерезарадка: " + shields[i].cooldawn + "\nНеобходимый уровень: " + shields[i].needLevel + "lvl"  + "\nЦена: " + shields[i].price ;
				if (n == shields[i].needLevel) {
					bot.sendMessage(chatID, s);
				}

				else { 
					bot.sendMessage(chatID, "Обыкновенного щита введённого уровня нет");
					User.state = 'buy_ordinary_shield'; 
				}
			}
			bot.sendMessage(chatID, "Чтобы купить щит, введите id щита");
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
		

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	if ((User.state == 'buy_equipment') && (txt === 'ЛЕЧЕНИЕ')) {
			User.state = 'buy_heal';
			bot.sendMessage(chatId, 'Лчение №1 или Лечение №2?');
	}

	if ((txt === 'НАЗАД') && (User.state == 'buy_heal')) { User.state = 'buy_equipment';}

	if ((User.state == 'buy_heal') && (txt === 'ЛЕЧЕНИЕ №1')) 

		{
			User.state = 'buy_heal_1';
			bot.sendMessage(chatId, 'Введите уровень лечения №1');
		}
	
	if ((txt === 'НАЗАД') && (User.state == 'buy_heal_1')) { User.state = 'buy_heal';}
	
	if (User.state == 'buy_heal_1') {
		User.state = 'buy_heal_1_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < heals.length; i++) {
				Var s = "id: " + heals[i].id + "\nЛечение: " + heals[i].heal + "\nДополнительный урон: " + heals[i].additionalDamage +"%" + "\nКоличество атак, которые будут усилены: " + heals[i].attackN + + "\nПерезарядка: " + heals[i].cooldawn + "\nНеобходимый уровень: " + heals[i].needLevel + "lvl"  + "\nЦена: " + heals[i].price ;
				if (n == heals[i].needLevel) {
					bot.sendMessage(chatID, s);
					
				}

				else { 
					bot.sendMessage(chatID, "Лечения №1 введённого уровня нет"); 
					User.state = 'buy_heal_1';
				}
			}
			bot.sendMessage(chatID, "Чтобы купить, введите id лечения");
		}
		else 
			{
			bot.sendMessage(chatID, "Необходимо ввести число");
			User.state = 'buy_heal_1';
		}
	
	}	
	if (User.state == 'buy_heal_1_id') {	
		User.state = 'buy_heal_1_id1';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < heals.length; i++) {
				if (heals[i].id = t) {
					var heal = heals[i].id;
				}
			}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == heal.id) {f=1}
			}

      			if ((user.money >= heal.price) && (user.robot.level >= heal.needLevel) && (f == 0)){		
				var insertData = my_funcs.InsertById(user.inventory, heal);
				user.inventory = insertData['user.inventory'];
				result['healN'] = insertData['healN'];
				result['heal'] = heal;
				user.money = user.money - heal.price;
			}
			else{
				if(user.money < heal.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов"); User.state = 'shop_menu';}
				if(user.robot.level >= heal.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень"); User.state = 'shop_menu';}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть это лечение"); User.state = 'shop_menu';}
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести id Лечения №1");
			User.state = 'buy_heal_1_id';
		}
	}







	if ((User.state == 'buy_heal') && (txt === 'ЛЕЧЕНИЕ №2')) 

		{
			User.state = 'buy_heal_2';
			bot.sendMessage(chatId, 'Введите уровень лечения №2');
		}
	
	if ((txt === 'НАЗАД') && (User.state == 'buy_heal_2')) { User.state = 'buy_heal';}
	
	if (User.state == 'buy_heal_2') {
		User.state = 'buy_heal_2_id';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < catch_heals.length; i++) {
				Var s = "id: " + catch_heals[i].id + "\nЛечение: " + catch_heals[i].heal + "\nВремя лечения: " + catch_heals[i].healTime+ + "\nПерезарядка: " + catch_heals[i].cooldawn + "\nНеобходимый уровень: " + catch_heals[i].needLevel + "lvl"  + "\nЦена: " + catch_heals[i].price ;
				if (n == catch_heals[i].needLevel) {
					bot.sendMessage(chatID, s);
					
				}

				else { 
					bot.sendMessage(chatID, "Лечения №2 введённого уровня нет"); 
					User.state = 'buy_heal_2';
				}
			}
			bot.sendMessage(chatID, "Чтобы купить, введите id лечения");
		}
		else 
			{
			bot.sendMessage(chatID, "Необходимо ввести число");
			User.state = 'buy_heal_2';
		}
	
	}	
	if (User.state == 'buy_heal_2_id') {	
		User.state = 'buy_heal_2_id1';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < catch_heals.length; i++) {
				if (catch_heals[i].id = t) {
					var catch_heal = catch_heals[i].id;
				}
			}
			var f=0;
			for (var i = 0; i < user.inventory.length; i++) {
				if (user.inventory[i] == catch_heal.id) {f=1}
			}

      			if ((user.money >= heal.price) && (user.robot.level >= catch_heal.needLevel) && (f == 0)){		
				var insertData = my_funcs.InsertById(user.inventory, catch_heal);
				user.inventory = insertData['user.inventory'];
				result['catch_healN'] = insertData['catch_healN'];
				result['catch_heal'] = catch_heal;
				user.money = user.money - catch_heal.price;
			}
			else{
				if(user.money < catch_heal.price) {bot.sendMessage(chatID, "У Вас недостаточно кредитов"); User.state = 'shop_menu';}
				if(user.robot.level >= catch_heal.needLevel) {bot.sendMessage(chatID, "У Вас недостаточный уровень"); User.state = 'shop_menu';}
				if(f == 1) {bot.sendMessage(chatID, "У Вас уже есть это лечение"); User.state = 'shop_menu';}
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести id Лечения №2");
			User.state = 'buy_heal_2_id';
		}
	}
*****************************************************************************************************************************************************

	 if (txt === 'ПОСМОТРЕТЬ ИНВЕНТАРЬ') {
					User.state = 'bag';
					bot.sendMessage(chatId, 'Введите уровень ивентаря'); 
					}
	if ((txt === 'НАЗАД') && (User.state == 'bag'))  { User.state = 'shop_menu';}

	if (User.state == 'bag') {
		User.state = 'bag_1';
		var n = parseInt('txt');
		if (typeof n == 'integer') {
			for (var i = 0; i < User.inventory.length; i++) {

				if (User.inventory[i].type == Weapon) {
					Var s = "id: " + User.inventory[i].id + "\nУрон: " + User.inventory[i].damage + "\nПодзарядка: "  + User.inventory[i].cooldawn  + "\nНеобходимый уровень: " + User.inventory[i].needLevel + "lvl"  + "\nЦена: " + User.inventory[i].price ;
				}
				if (User.inventory[i].type == ConstShield) {
					Var s = "id: " + User.inventory[i].id + "\nЗащита: " + User.inventory[i].resist + "\nНеобходимый уровень: " + User.inventory[i].needLevel + "lvl"  + "\nЦена: " + User.inventory[i].price ;
				}
				if (User.inventory[i].type == Shield) {
					Var s = "id: " + User.inventory[i].id + "\nЗащита: " + User.inventory[i].resist + "\nКоличество отраженных атак: " + User.inventory[i].attakN + "\nПерезарадка: " + User.inventory[i].cooldawn + "\nНеобходимый уровень: " + User.inventory[i].needLevel + "lvl"  + "\nЦена: " + User.inventory[i].price ;
				}
				if (User.inventory[i].type == Heal) {
					Var s = "id: " + User.inventory[i].id + "\nЛечение: " + User.inventory[i].heal + "\nДополнительный урон: " + User.inventory[i].additionalDamage +"%" + "\nКоличество атак, которые будут усилены: " + User.inventory[i].attackN + + "\nПерезарядка: " + User.inventory[i].cooldawn + "\nНеобходимый уровень: " + User.inventory[i].needLevel + "lvl"  + "\nЦена: " + User.inventory[i].price ;
				}
				if (User.inventory[i].type == CatchHeal) {
					Var s = "id: " + User.inventory[i].id + "\nЛечение: " + User.inventory[i].heal + "\nВремя лечения: " + User.inventory[i].healTime+ + "\nПерезарядка: " + User.inventory[i].cooldawn + "\nНеобходимый уровень: " + User.inventory[i].needLevel + "lvl"  + "\nЦена: " + User.inventory[i].price ;
				}


				if (n == User.inventory[i].needLevel) {
					bot.sendMessage(chatID, s);
				}

				else { 
					bot.sendMessage(chatID, "Инвентаря введённого уровня нет");
					User.state = 'bag';
					}
				bot.sendMessage(chatID, "Поменять оружие или экипировку\ посмотреть что надето?");
			}
		}
		else {
			bot.sendMessage(chatID, "Необходимо ввести число.");
			User.state = 'bag';
			}
	}	
	
	if (User.state == 'bag_1') (txt = 'ОРУЖИЕ') { User.state = 'choose_slot_w'; bot.sendMessage(chatId, 'Введите id оружия');}

	if ((txt === 'НАЗАД') && (User.state == 'choose_slot_w'))  { User.state = 'bag'; bot.sendMessage(chatId, 'Введите уровень ивентаря'); }

	if (User.state == 'choose_slot_w') 
	{
		User.state = 'choose_slot_w_id';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < User.inventory.length; i++) {
				if (User.inventory[i].id = t) {
						var  invSlot = User.robot.weapon2; 
						User.robot.weapon2 = User.robot.weapon1;
						User.robot.weapon1 = User.inventory[i].id;
						User.inventory[i].id = invSlot;
				}
			}
		}
		else{
			bot.sendMessage(chatID, "Необходимо ввести id оружия.");
			User.state = ''choose_slot_w';
		}
	}


	if (User.state == 'bag_1') (txt = 'ЭКИПИРОВКА') { User.state = 'choose_slot_e'; bot.sendMessage(chatId, 'Введите id экипировки');}

	if ((txt === 'НАЗАД') && (User.state == 'choose_slot_e'))  { User.state = 'bag'; bot.sendMessage(chatId, 'Введите уровень ивентаря'); }

	if (User.state == 'choose_slot_e') {
		User.state = 'choose_slot_e_id';
		var t = parseInt('txt');
		if (typeof t == 'integer') {
			for (var i = 0; i < User.inventory.length; i++) {
				if (User.inventory[i].id = t) {
						var  invSlot = User.robot.equip2; 
						User.robot.equip2 = User.robot.equip1;
						User.robot.equip1 = User.inventory[i].id;
						User.inventory[i].id = invSlot;
				}
			}
			
		}
		else{
			bot.sendMessage(chatID, "Необходимо ввести id экипировки.");
			User.state = ''choose_slot_w';
		}
	}


	if (User.state == 'bag_1') (txt = 'ПОСМОТРЕТЬ ЧТО НАДЕТО') { User.state = 'wearing'; bot.sendMessage(chatId, 'Введите id экипировки');}

	if ((txt === 'НАЗАД') && (User.state == 'wearing'))  { User.state = 'bag'; bot.sendMessage(chatId, 'Введите уровень ивентаря'); }

	if (User.state == 'wearing') {
		var w1 = User.robot.weapon1;
		var w2 = User.robot.weapon2;
		var e1 = User.robot.equip1;
		var e2 = User.robot.equip2;	
		var s = 'ОРУЖИЕ №1: ' + w1 + '\nОРУЖИЕ №2: ' + w2  + '\nЭКИПИРОВКА №1: ' + e1  + '\nЭКИПИРОВКА №2: ' + e2;
		bot.sendMessage(chatId, s);
	}
				
exports.workshop = workshop(user);
		
