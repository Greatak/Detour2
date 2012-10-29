var a1 = {
text:function text(){ return "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> ================================================================<br> Initializing...<br> 12w42a<br> DETOUR 2<br> A Lame-Ass Game brought to you by Greatak"; },
one:"a2", onet:"Next",
two:-1, twot:"Next",
thr:-1,
fou:-1,
fiv:-1,
six:-1
};
var a2 = {
text:function text(){ return "================================================================<br> Your quaint appartment, nothing to see here.";},
one:"c1", onet:"<b>Fight!</b>",
two:-1,
thr:-1,
fou:-1,
fiv:-1,
six:-1,
exec:"enemy(1,1,[]);"
};
var c1 = { //Initiate combat
text:function text(){ return "You come across a " + enemyName(enemyID) + "!"; },
one:"c2", onet:"Attack",
two:"c3", twot:"Defend",
thr:-1,
fou:-1,
fiv:-1,
six:-1
};
var c2 = { //attack
text:function text(){ return heroAttack() + enemyAttack();},
one:"c2", onet:"Attack",
two:"c3", twot:"Defend",
thr:-1,
fou:-1,
fiv:-1,
six:-1,
exec:"if(enemyHP <= 0){execute('c5');return;}"
}
var c3 = { //defend
text:function text(){ return heroDefend() + enemyAttack();},
one:"c2", onet:"Attack",
two:"c3", twot:"Defend",
thr:-1,
fou:-1,
fiv:-1,
six:-1,
exec:"if(run){execute('c4');return;}"
}
var c4 = { //combat end by running
text:function text(){ return "The " + enemyName(enemyID) + " gives up the chase.";},
one:"a2", onet:"Next",
two:-1,
thr:-1,
fou:-1,
fiv:-1,
six:-1
}
var c5 = { //combat end by KO
text:function text(){ return "The " + enemyName(enemyID) + " falls limply to the ground and you leave quickly to avoid attention from the authorities or other foes.";},
one:"a2", onet:"Next",
two:-1,
thr:-1,
fou:-1,
fiv:-1,
six:-1
}
var c6 = { //combat end by hero death
	text:function text(){ return "You died.";}
}