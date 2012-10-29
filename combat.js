var heroHP = 1;
var heroMaxHP = heroHP;
var heroEquip = "fist";

var enemyID;
var enemyHP;
var enemyMaxHP;
var enemyInventory = new Array();
var enemyEquip;

var run;

function enemy(ID, HP, inventory){
	enemyID = ID;
	enemyMaxHP = HP;
	enemyHP = enemyMaxHP;
	enemyInventory = inventory;
	run = null;
}

function chooseWeapon(inv){
	var x = 0;
	while (!weapon[inv[x]]){
		if (x <= inv.length) {
			x++;
		} else {
			return "fists";
		}
	}
	return inv[x];
}

function enemyAttack(){
	if (enemyHP <= 0) {return "";}
	var output = "<br>";
	
	var want = chooseWeapon(enemyInventory);
	//if it isn't equipped, equip it!
	if (want != enemyEquip) {
		enemyEquip = want;
		output += "The " + enemyName(enemyID) + " readies his " + enemyEquip + ".";
		return output;
	}
	//otherwise go crazy
	else { 
		var x = Math.floor((Math.random()*3)+1);
		if (x == 1) {
			output += "The " + enemyName(enemyID) + " attacks viciously with his " + enemyEquip + ".";
			heroHP--;
			if (heroHP <= 0) {
				setDest('c6',-1,-1,-1,-1,-1,"Next");
			}
		} else {
			output += "The " + enemyName(enemyID) + " attacks but you manage to evade it.";
		}
		return output;
	}
}

function heroAttack(){
	var output;
	var x = Math.floor((Math.random()*10)+1);
	if (x == 1) {
		output = "Your " + heroEquip + " manages to wound the " + enemyName(enemyID) + ".";
		enemyHP--;
	} else {
		output = "Your attack was fruitless and missed the mark entirely.";
	}
	return output;
}
function heroDefend(){
	var output;
	var x = Math.floor((Math.random()*10)+1);
	if (x < 3) {
		output = "You turn and run for something to hide behind, putting some distance between you and your assailant.";
	} else if (x == 10) {
		output = "You high-tail it out of there, rounding the corner and disappearing into the crowd.";
		run = 1;
	} else {
		output = "You try to run, but don't get very far.";
	}
	return output;
}

var weapon = {
	knife:1
}