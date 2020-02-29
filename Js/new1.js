/*
function myMove() {
  var elem = document.getElementById("continut");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}*/
window.onload=function(){
	

	var body = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	var b = document.createElement("button");
	b.innerHTML = "Opreste";
	div.id = "info";
	 var newContent = document.createTextNode("Bine ati venit1!"); 
	 newContent.nodeValue = "Bine ati venit!"
  // add the text node to the newly created div
	div.appendChild(newContent); 
	  var currentDiv = document.getElementsByClassName("continut")[0]; 
	document.body.insertBefore(div, currentDiv); 
	document.body.insertBefore(b, currentDiv); 
	myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 2000);
	b.onclick = function(){
		clearInterval(myVar);
	}
	var b2 = document.createElement("button");
	b2.innerHTML = "Inchide";
	document.body.insertBefore(b2, div.nextSibling);
	b2.onclick = function(){
		div.style.display = "none";
	}
	body.removeChild(body.childNodes[0]);
	body.onkeypress = function(event){
		var x = event.key;
		if( x == "x")
		{
			alert("x");
			//var c = document.getElementById("date").childNodes;
			 var y, i;
		y = document.querySelectorAll("input");
  for (i = 0; i < y.length; i++) {
    y[i].value = "";
  }
  y[i-1].value= "Submit";
		}
		
	}
	//document.body.insertBefore(div, body.firstChild); 
	body.firstChild.style.color="white";
}

var x = 0;
function alertFunc(param1, param2) {
	if(x == 0)
	{ document.getElementById("info").innerHTML = "Cumparati-va bilete cat timp mai sunt. "; x = 1;}
	else{ document.getElementById("info").innerHTML = "2070 e aproape. ";x = 0;}
 
}
