var timer=null;
var tim=null;
gk.onmouseover=function(){
	clearTimeout(timer);
	gka.style.display='block'
}
gk.onmouseout=function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		gka.style.display='none'
	},50)
	
}
gg.onmouseover=function(){
	clearTimeout(tim);
	gga.style.display='block'
}
gg.onmouseout=function(){
	clearTimeout(tim);
	tim=setTimeout(function(){
		gga.style.display='none'
	},50)
}

//鼠标移动到上面的时候改变

var oli=main_ltu.getElementsByTagName('li');
var odiv=main_ltu.getElementsByTagName('div');
for(var i=0;i<oli.length;i++){
	oli[i].index=i;
	oli[i].onmouseover=function(){
		for(var i=0;i<odiv.length;i++){
		
	}
}
}
