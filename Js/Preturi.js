
window.onload=function(){
	var d = document.createElement("d");
	var p = document.createElement("p");
	p.innerHTML = "Sub acest rand se regasesc actorii ce vor participa la Animefest";
	d.appendChild(p);
	d.style.position= "relative";
	d.style.display="none";
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(d);
	//body.insertBefore(d, body.childNodes[5]);
	document.getElementById("Actor").onmousemove=function(event){
		d.style.display="block";
		d.style.top=event.clientY - 900 +'px';;
		d.style.left=event.clientX +'px';;
	}
	
	document.getElementById("Actor").onmouseout=function(){
		document.getElementById("Actor").style.color="white";
		d.style.display="none";
	}
	
	

	
}

/*

<div class="centru">
<div class="bilet">
  <form>
    <label for="nume">Nume</label>
    <input type="text" id="nume" name="nume" placeholder="Nume">

    <label for="prenume">Prenume</label>
    <input type="text" id="prenume" name="prenume" placeholder="Prenume">

    <label for="actor">Actor</label>
    <select id="actor" name="actor">
      <option value="Jonny Depp">Jonny Depp</option>
      <option value="Angelina Jolie">Angelina Jolie</option>
      <option value="Kyubey">Kyubey</option>
    </select>
	<label for="Bilet">Tip Bilet</label>
    <select id="Bilet" name="Bilet">
      <option value="p">Poza</option>
      <option value="a">Autograf</option>
      <option value="pa">Poza+autograf</option>
    </select>
  
    <input type="submit" value="Trimite">
  </form>
</div></div>

*/