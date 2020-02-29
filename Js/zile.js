
//var myLink = document.getElementById('mylink');


function mouseOver() {
  document.getElementById("para").style.color = "red";
}

/*function mouseOut() {
  document.getElementById("para").style.color = "black";
}*/

/*document.getElementById("para").onmouseover()=function() {
			
			//var div3 = document.createElement("div");
			//div3.innerHTML="Pisici";
			mouseIn();
			//f.appendChild(div3);
		};*/
//document.getElementById("demo").onmouseout = function() {mouseOut()};
window.onload=function(){
	var d = document.createElement("centrat");
	//d.style.backgroundColor = "white";
	var b = document.createElement("button");
	b.innerHTML = "Apasa aici pentru a cumpara bilete";
	var body = document.getElementsByTagName("body")[0];
	d.appendChild(b);
	body.appendChild(d);
	b.style.backgroundColor = "#AEA4BF";
	b.style.width = "1000px";
	b.style.height = "50px";
	b.style.fontSize= "1em";
	b.style.position = "relative";
	b.style.top = "100px";
	b.style.color = "white";
	b.style.left = "250px";
	b.style.boxShadow="0 6px 6px -6px #FEEAFA";
	b.style.border= "1px solid #ccc";
	b.style.borderRadius= "4px";
	//b.style.font-family = "'Kalam', cursive;" ;
	b.onclick=function(){
		b.style.display = "none";

		var f = document.createElement("form");
		f.setAttribute('method',"post");
		f.setAttribute('action',"/zile");
		f.style.backgroundColor = "white";
		f.style.borderRadius="50px";

		var l = document.createElement("label");
		l.innerHTML="Nume si prenume :"
		f.appendChild(l);
		
		var i = document.createElement("input"); //input element, text
		i.setAttribute('type',"text");
		i.setAttribute('name',"username");
		
		
		
		
		
	
	
	
		var s = document.createElement("input"); //input element, Submit button
		s.setAttribute('type',"submit");
		s.setAttribute('value',"Submit");
		
		var check1 = document.createElement("input"); //input element, Submit button
		check1.setAttribute('type',"checkbox");
		//s.setAttribute('value',"Submit");
		var check2 = document.createElement("input"); //input element, Submit button
		check2.setAttribute('type',"checkbox");
		var check3 = document.createElement("input"); //input element, Submit button
		check3.setAttribute('type',"checkbox");

		f.appendChild(i);
		
		
		
		
		
		cumpar_bilete_text = document.createElement("p");
		cumpar_bilete_text.innerHTML = "Pentru ce zile doriti achizitionarea biletelor?";
		f.appendChild(cumpar_bilete_text);
		
		var l3 = document.createElement("label");
		l3.innerHTML="Vineri";
		f.appendChild(check1);
		f.appendChild(l3);
		
		
		var range1 = document.createElement("INPUT");
		range1.setAttribute("type", "range");
		range1.max = 10;
		range1.min = 0;
		range1.value = 1;
		p1 = document.createElement("p");
		p1.innerHTML = range1.value;
		var l2 = document.createElement("label");
		l2.innerHTML="Numar de bilete :";
		f.appendChild(l2);
		f.appendChild(range1);
		l2.style.display = "none";
		f.appendChild(p1);
		p1.style.display="none";
		range1.style.display="none";
		
		check1.onclick = function(){
		if (check1.checked == true){
			l2.style.display = "block";
			p1.style.display="block";
			range1.style.display="block";
		} else {
			l2.style.display = "none";
			//f.appendChild(p);
			p1.style.display="none";
			range1.style.display="none"
		}
		}
		range1.oninput=function() {
		//r.info(range.value);
		
		p1.innerHTML = this.value;
		
		}
		
		
		
		var l5 = document.createElement("label");
		l5.innerHTML="Sambata";
		f.appendChild(check2);
		f.appendChild(l5);
		var range2 = document.createElement("INPUT");
		range2.setAttribute("type", "range");
		range2.max = 10;
		range2.min = 0;
		range2.value = 1;
		p2 = document.createElement("p");
		p2.innerHTML = range1.value;
		var l4 = document.createElement("label");
		l4.innerHTML="Numar de bilete :";
		f.appendChild(l4);
		f.appendChild(range2);
		l4.style.display = "none";
		f.appendChild(p2);
		p2.style.display="none";
		range2.style.display="none";
		
		check2.onclick = function(){
		if (check2.checked == true){
			l4.style.display = "block";
			p2.style.display="block";
			range2.style.display="block";
		} else {
			l4.style.display = "none";
			//f.appendChild(p);
			p2.style.display="none";
			range2.style.display="none"
		}
		}
		range2.oninput=function() {
		//r.info(range.value);
		
		p2.innerHTML = this.value;
		
		}
		
		/**/
	
		
		var l3 = document.createElement("label");
		l3.innerHTML="Duminica";
		f.appendChild(check3);
		f.appendChild(l3);
		var range3 = document.createElement("INPUT");
		range3.setAttribute("type", "range");
		range3.max = 10;
		range3.min = 0;
		range3.value = 1;
		p3 = document.createElement("p");
		p3.innerHTML = range3.value;
		var l7 = document.createElement("label");
		l7.innerHTML="Numar de bilete :";
		f.appendChild(l7);
		f.appendChild(range3);
		l7.style.display = "none";
		f.appendChild(p3);
		p3.style.display="none";
		range3.style.display="none";
		
		check3.onclick = function(){
		if (check3.checked == true){
			l7.style.display = "block";
			p3.style.display="block";
			range3.style.display="block";
		} else {
			l7.style.display = "none";
			//f.appendChild(p);
			p3.style.display="none";
			range3.style.display="none"
		}
		}
		range3.oninput=function() {
		//r.info(range.value);
		
		p3.innerHTML = this.value;
		
		}
		/*window.onkeypress(event)=function(){
			if(event=="X")
				i.innerHTML="";
			
		}*/
		
		var di = document.createElement("cen");
		var radioButton1 = document.createElement("INPUT");
		radioButton1.setAttribute("type", "radio");
		radioButton1.name = "radioo";
		//radioButton1.checked = true;
		var radioButton2 = document.createElement("INPUT");
		radioButton2.setAttribute("type", "radio");
		
		radioButton2.name = "radioo";
	
		//radioButton2.checked = true;
	/*	radioButton1.onclick = function(){
		if (this.checked == true){
			this.checked = false;
		} else {
			this.checked = checked;
		}
		}*/
		//var bRadio = document.createElement("button");
		//bRadio.innerHTML = "Apasa aici pentru a deselecta butoanele radio";
		//bRadio,name = "rb";
		/*document.getElementById("rb").onclick = function(){
			radioButton1.checked = false;
			radioButton2.checked = false;
		}
		*/
		var p4 = document.createElement("p");
		p4.innerHTML="Doriti tiparirea facturii?";
		f.appendChild(p4);
		
		var l9 = document.createElement("label");
		l9.innerHTML="Da";
		f.appendChild(l9);
		f.appendChild(radioButton1);
		
		var l10 = document.createElement("label");
		l10.innerHTML="Nu";
		f.appendChild(l10);
		f.appendChild(radioButton2);
		
		var p5 = document.createElement("p");
		p5.innerHTML="Selectati modul de plata:";
		f.appendChild(p5);
		var array = ["Card","Cash","PayPal","Alta metoda"];

//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "mySelect";
		f.appendChild(selectList);
		
		for (var i = 0; i < array.length; i++) {
				var option = document.createElement("option");
				option.value = array[i];
				option.text = array[i];
				selectList.appendChild(option);
		}
		
		/*selectList.onchange=function(){
			var p11 = document.createElement("p");
			f.appendChild(p11);
			p11.innerHTML="Ati selectat"+this.value;
		}*/
		//f.appendChild(bRadio);
		
		var textArea = document.createElement("input"); //input element, Submit button
		textArea.setAttribute('type',"textArea");
		//textArea.setAttribute('value',"Submit");
		
		var p6 = document.createElement("p");
		p6.innerHTML="Ati dori sa ne mai spuneti ceva?";
		f.appendChild(p6);
		f.appendChild(textArea);
		textArea.style.width = "500px";
		p6.id="para";
		
		
		f.appendChild(s);
//and some more input elements here
//and dont forget to add a submit button
		f.style.position = "relative";
		f.style.top = "100px";
		f.style.width = "500px";
		f.style.left = "550px";
		document.getElementsByTagName('body')[0].appendChild(f);
	//alert(f.style.position);
		
	}
	
	

	
}
