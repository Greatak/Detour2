var oneDest;
var twoDest;
var thrDest;
var fouDest;
var fivDest;
var sixDest;

function open1(text){
	var one = document.getElementById("one");
	one.style.width = "190px";
	one.style.marginLeft = "600px";
	one.style.visibility = "visible";
	one.innerHTML = text;
}
function close1(){
	var one = document.getElementById("one");
	one.style.width = "0px";
	one.style.marginLeft = "790px";
	one.style.visibility = "hidden";
}
function open2(text){
	var one = document.getElementById("two");
	one.style.width = "190px";
	one.style.marginLeft = "600px";
	one.style.visibility = "visible";
	one.innerHTML = text;
}
function close2(){
	var one = document.getElementById("two");
	one.style.width = "0px";
	one.style.marginLeft = "790px";
	one.style.visibility = "hidden";
}
function open3(text){
	var one = document.getElementById("thr");
	one.style.width = "190px";
	one.style.marginLeft = "400px";
	one.style.visibility = "visible";
	one.innerHTML = text
}
function close3(text){
	var one = document.getElementById("thr");
	one.style.width = "0px";
	one.style.marginLeft = "590px";
	one.style.visibility = "hidden";
}
function open4(text){
	var one = document.getElementById("fou");
	one.style.width = "190px";
	one.style.marginLeft = "400px";
	one.style.visibility = "visible";
	one.innerHTML = text;
}
function close4(){
	var one = document.getElementById("fou");
	one.style.width = "0px";
	one.style.marginLeft = "590px";
	one.style.visibility = "hidden";
}
function open5(text){
	var one = document.getElementById("fiv");
	one.style.width = "190px";
	one.style.marginLeft = "200px";
	one.style.visibility = "visible";
	one.innerHTML = text;
}
function close5(){
	var one = document.getElementById("fiv");
	one.style.width = "0px";
	one.style.marginLeft = "390px";
	one.style.visibility = "hidden";
}
function open6(text){
	var one = document.getElementById("six");
	one.style.width = "190px";
	one.style.marginLeft = "200px";
	one.style.visibility = "visible";
	one.innerHTML = text;
}
function close6(){
	var one = document.getElementById("six");
	one.style.width = "0px";
	one.style.marginLeft = "390px";
	one.style.visibility = "hidden";
}

function write(text){
	var window = document.getElementById("mainText");
	window.innerHTML = window.innerHTML + "<br><br>" + text;
	window.scrollTop = window.scrollHeight;
}
function setDest(one,two,thr,fou,fiv,six,onet,twot,thrt,fout,fivt,sixt){
	oneDest = one;
	twoDest = two;
	thrDest = thr;
	fouDest = fou;
	fivDest = fiv;
	sixDest = six;
	if (one == -1){ close1(); } else{ open1(onet); }
	if (two == -1){ close2(); } else{ open2(twot); }
	if (thr == -1){ close3(); } else{ open3(thrt); }
	if (fou == -1){ close4(); } else{ open4(fout); }
	if (fiv == -1){ close5(); } else{ open5(fivt); }
	if (six == -1){ close6(); } else{ open6(sixt); }
}

function select(button){
	switch(button){
		case 1: execute(oneDest); break;
		case 2: execute(twoDest); break;
		case 3: execute(thrDest); break;
		case 4: execute(fouDest); break;
		case 5: execute(fivDest); break;
		case 6: execute(sixDest); break;
	}
}
function execute(dest){
	var load = window[dest];
	setDest(load.one,load.two,load.thr,load.fou,load.fiv,load.six,load.onet,load.twot,load.thrt,load.fout,load.fivt,load.sixt);
	write(load.text());
	if (load.exec) { eval(load.exec); }
}