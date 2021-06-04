let btn = document.getElementById("bgChange");
console.log(btn);
let home = document.querySelector("body")
home.style.backgroundColor = "red";
btn.onclick = function(){
	if(home.style.backgroundColor == "red"){
		home.style.backgroundColor = "aqua";
	}
	else{
		home.style.backgroundColor = "red";
	}
}
