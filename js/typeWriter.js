
let i = 0;
let text1 = "Hi Babee, I love you so much";
let text2 = "I'm so happy becauseeee"
let speed = 100;

function typeWriter(text, para){
	if(ok == 3){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
		else if(ok == 3){
			typeWriter(text3, "txt3");
		}
	}, 100);
//};
