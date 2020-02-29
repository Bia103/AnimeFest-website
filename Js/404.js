
window.onload=function(){
var x = setTimeout(function(){
  window.location = "http://localhost:7007/";
 },3000);
	var b = document.createElement("button");
	b.innerHTML = "STOP";
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(b);
	b.onclick= function(){
		clearTimeout(x);
	}
 }