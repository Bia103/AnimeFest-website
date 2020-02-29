var express = require('express');
var path=require("path");
var app=express();
const session = require('express-session');
//const formidable = require('formidable');
const fs = require('fs');
const util = require('util');
const nodemailer = require("nodemailer");
const crypto = require('crypto');
var bodyParser = require("body-parser");

// initializari socket.io
//const http=require('http')
app.set('view engine','ejs');

//app.use("/Cssprincipal",express.static(path.join(__dirname,'Cssprincipal')));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/Cssprincipal",express.static(path.join(__dirname, 'Cssprincipal')));
app.use("/Js",express.static(path.join(__dirname, 'Js')));


app.use(session({
  secret: 'abcdefg',//folosit de express session pentru criptarea id-ului de sesiune
  resave: true,
  saveUninitialized: false
}));

app.get('/', function(req, res)
{
	console.log("ceva");
	res.render('new1',{username: req.session.username});
});
app.get('/zile', function(req, res)
{
	res.render('zile',{username: req.session.username});
	//res.render('zile',{username: req.session.username});
});

app.get('/Preturi', function(req, res)
{
	res.render('Preturi',{username: req.session.username});
});
app.get('/Anime', function(req, res)
{
	res.render('Anime',{username: req.session.username});
});
app.get('/log', function(req, res)
{
	res.render('log',{username: req.session.username});
});
app.get('/Localizare', function(req, res)
{
	res.render('Localizare',{username: req.session.username});
});
app.get('/Evenimente', function(req, res)
{
	res.render('Evenimente',{username: req.session.username});
});
app.get('/Istoric', function(req, res)
{
	res.render('Istoric',{username: req.session.username});
});
app.get('/cosplay', function(req, res)
{
	res.render('cosplay',{username: req.session.username});
});

/*app.post('/zile', function(req, res) {
	//var form = new formidable.IncomingForm();
});*/
function Crypt(pass)
{
	var cipher = crypto.createCipher('aes128','pisici');
	let password = pass;
	var encrypted = cipher.update(password,'utf8','hex');
	 encrypted = encrypted + cipher.final('hex');
	return encrypted;
}

app.post('/', (req, res) => {
	console.log(req.body);
	let users=fs.readFileSync('Json.JSON');
	let usersObj=JSON.parse(users);
	let crypt_pass=Crypt(req.body.pass);
	let name=JSON.stringify(req.body.nume);
	let zi = JSON.stringify(req.body.zi);
	let nr = JSON.stringify(req.body.numar);
	
	var u = {"nume":req.body.nume,"zi":req.body.zi,"numar":req.body.numar,"password": crypt_pass};
	usersObj.bilete.push(u);
	console.log(u);
	
	let o = JSON.stringify(usersObj);
	fs.writeFileSync('Json.JSON',o);
	res.redirect('/');
	
	
	
	
	
	/*var form = new formidable.IncomingForm();// obiect de tip form cu care parsez datele venite de la utilizator
	form.parse(req, function(err, fields, files) {
      //parsarea datelor
	  
      /*console.log('file uploaded : ' + files.poza.path);//verific calea buna in consola
	  var calePoza=(files.poza && files.poza.name!="")?files.poza.name:""; //verific daca exista poza (poza este numele campului din form
 let rawdata = fs.readFileSync('Json.json');//citesc fisierul si pun tot textul in rawdata
		let jsfis = JSON.parse(rawdata);//parsez textul si obtin obiectul asocita JSON-ului
		jsfis.bilete.push({id:jsfis.lastId, nume:fields.nume, zi:fields.zi, numar: fields.numar});//adaug elementul nou
		jsfis.lastId++;//incrementez id-ul ca sa nu am doi studenti cu acelasi id
		
		saveJson(jsfis,'Json.json')
		res.render('/', {user: req.session.username, rsstatus:"ok"});
    });

	form.on('fileBegin', function (name, file){
		//if(file && file.size){
			file.path = __dirname + '/uploads/' + file.name;//inainte de upload setez calea la care va fi uploadat
			console.log("cale:"+ file.path);
		//}
    });

    form.on('file', function (name, file){
		if(file && file.size){
			console.log('Uploadat ' + file.name);//la finalul uploadului afisez un mesaj
		}
    });
	
	*/
	
});

app.post('/login', function(req, res)
{
	
	let u = fs.readFileSync('Json.JSON');
	let uO = JSON.parse(u);
	for(let i = 0;i< uO.bilete.length;i++)
	{
		if(uO.bilete[i]["nume"] == req.body.nume)
		{
			var password = Crypt(req.body.pass);
			if(password!=uO.bilete[i]["password"])
				res.render('log.ejs', {pass:'wrong'});
			else {
				req.session.username=uO.bilete[i]["nume"];
				res.redirect('/');
				
			}
				
			
		}
	}
	
	
	
	
	
	
});

app.get('/festival', function(req, res) {
	
	let rawdata = fs.readFileSync('Json.json');
	let jsfis = JSON.parse(rawdata);
	res.render('festival',{bilete:jsfis.bilete/*,user: req.session.username*/});
});

/*
app.post('/', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        ...procesare date login...
    });

});

if(fields.username=="user" && fields.parola="parola123") {
    //proceseaza login
}
*/
app.get('/logout', function(req, res) {

	
    req.session.destroy();//distrug sesiunea cand se intra pe pagina de logout
	res.render('new1');
	
	
	
	
});
app.use(function(req,res){
    res.status(404).render('404');
});
app.listen(7007);
