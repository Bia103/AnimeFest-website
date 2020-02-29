window.onload = function(){
	
	var div1 = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(div1);
	div1.style.width = "100px";
	div1.style.height = "100px";
	div1.style.backgroundColor = "purple";
	div1.style.borderRadius = "15px";
	div1.innerHTML = "Fug de pe pagina";
	var btn = document.createElement("button");
	btn.innerHTML = "Apasa";
	body.appendChild(btn);
	btn.onclick = function (){
		var pos = -200;
		var zbor = setInterval(f,5);
		function f() {
			if(pos == 10000)
					clearInterval(zbor);
			else {
				pos++;
				div1.style.marginLeft = pos + "px";
			}
		}
	}
}