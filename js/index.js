// Sélection des elements HTML "page"
var body = document.querySelector('body');
var arrowleft = document.querySelector('.left');
var arrowright = document.querySelector('.right');
var arrowbtn = document.querySelector('.btn');
var pageun = document.querySelector('.un');
var pagedeux = document.querySelector('.deux');
var pagetrois = document.querySelector('.trois');
var myDiv = document.createElement('div');
var myH1 = document.createElement('h1');
var myH2 = document.createElement('h2');
var myP = document.createElement('p');
var myH2 = document.createElement('h2');
var slider = document.querySelector('.slider');
var slide = document.querySelectorAll('.slide');
var myfirstProject = document.createElement('div');
var myfirstProjectDiv = document.createElement('div');
var myfirstProjectTitle = document.createElement('h2');
var myfirstProjectDescription = document.createElement('p');

// Scroll (click + scroll)
// à remplir
// arrowbtn.addEventListener('click',function(body){
// 		body.style.transform = "translateX(100vh)";
// 		console.log('tomate');
// 	};
// });


// Slider (clicks + effet de slide)
// à remplir
// var currentslide = 1;
// arrowright.addEventListener('click',function(e){
// 	e.preventDefault();
// 	// currentslide += e.deltaY;
// 	currentslide = currentslide + 1;
//
// 	// if (currentslide < 1) currentslide = 1;
// 	// if (currentslide > 3) currentslide = 3;
// 	while(currentslide < 3){
// 		console.log('currentslide = ' + currentslide);
// 		slider.style.transform = "translateX(-100vw)";
// 	};
// });
//
// arrowleft.addEventListener('click',function(e){
// 	e.preventDefault();
//
// 	// currentslide += e.deltaY;
// 	currentslide = currentslide - 1;
//
// 	// if (currentslide < 1) currentslide = 1;
// 	// if (currentslide > 3) currentslide = 3;
// 	while(currentslide > 1){
// 		console.log('currentslide = ' + currentslide);
// 		slider.style.transform = "translateX(-100vw)";
// 	};
// });

arrowright.addEventListener("click", function(){
	for(var i=0 ; i< 3; i++){
		console.log(i);
		slider.style.transform = "translateX(-100vw)";
	};
});



// Chargment des données et création des pages (fetch + appel de fonctions)
fetch('https://dev.drangies.fr/exam').then(function(res) {
	return res.json().then(function(data) {
		createPageUn(data);
		createPageDeux(data);
		createPageTrois(data);
	});
});

// page 1
var createPageUn = function(data) {

	myH1.textContent = 'Bonjour, je suis '+ data.identite.prenom +' '+ data.identite.nom;
	myH2.textContent = data.identite.profession +' de '+ data.identite.age + ' ans';
	myP.textContent = 'Je suis passionnée de '+ data.identite.loisirs[0] +', '+ data.identite.loisirs[1] +', '+ data.identite.loisirs[2] +'.';

	pageun.appendChild(myDiv);
	myDiv.appendChild(myH1);
	myDiv.appendChild(myH2);
	myDiv.appendChild(myP);

};

// page 2
var createPageDeux = function(data) {
//Projet 1


	myfirstProject.classList.add('slide');
	myfirstProject.style.backgroundImage = "url('https://dev.drangies.fr/exam/projet-1.jpg')";

	myfirstProjectTitle.textContent = data.projets[0].titre;
	myfirstProjectDescription.textContent = data.projets[0].description;

	pagedeux.appendChild(slider);
	slider.appendChild(myfirstProject);
	myfirstProject.appendChild(myfirstProjectDiv);
	myfirstProjectDiv.appendChild(myfirstProjectTitle);
	myfirstProjectDiv.appendChild(myfirstProjectDescription);

// Projet 2

	var mysecondProject = document.createElement('div');
	var mysecondProjectDiv = document.createElement('div');
	var mysecondProjectTitle = document.createElement('h2');
	var mysecondProjectDescription = document.createElement('p');

	mysecondProject.classList.add('slide');
	mysecondProject.style.backgroundImage = "url('https://dev.drangies.fr/exam/projet-2.jpg')";

	mysecondProjectTitle.textContent = data.projets[1].titre;
	mysecondProjectDescription.textContent = data.projets[1].description;

	pagedeux.appendChild(slider);
	slider.appendChild(mysecondProject);
	mysecondProject.appendChild(mysecondProjectDiv);
	mysecondProjectDiv.appendChild(mysecondProjectTitle);
	mysecondProjectDiv.appendChild(mysecondProjectDescription);

// Projet 3

	var mythirdProject = document.createElement('div');
	var mythirdProjectDiv = document.createElement('div');
	var mythirdProjectTitle = document.createElement('h2');
	var mythirdProjectDescription = document.createElement('p');

	mythirdProject.classList.add('slide');
	mythirdProject.style.backgroundImage = "url('https://dev.drangies.fr/exam/projet-3.jpg')";


	mythirdProjectTitle.textContent = data.projets[1].titre;
	mythirdProjectDescription.textContent = data.projets[1].description;

	pagedeux.appendChild(slider);
	slider.appendChild(mythirdProject);
	mythirdProject.appendChild(mythirdProjectDiv);
	mythirdProjectDiv.appendChild(mythirdProjectTitle);
	mythirdProjectDiv.appendChild(mythirdProjectDescription);

};

// page 3
var createPageTrois = function(data) {
	var myH2Contact = document.createElement('h2');
	var myDivContact = document.createElement('div');
	var myDivContactList = document.createElement('div');
	var myDivTw = document.createElement('div');
	var twH3 = document.createElement('h3');
	var twp = document.createElement('p');
	var myDivInsta = document.createElement('div');
	var instaH3 = document.createElement('h3');
	var instap = document.createElement('p');
	var myDivMail = document.createElement('div');
	var mailH3 = document.createElement('h3');
	var mailp = document.createElement('p');

	myDivContact.classList.add('contacts');
	myDivContactList.classList.add('contactsList');

	myH2Contact.textContent = 'Contactez-moi !';
	twH3.textContent = data.identite.contacts[0].reseau;
	twp.textContent = data.identite.contacts[0].id;

	instaH3.textContent = data.identite.contacts[1].reseau;
	instap.textContent = data.identite.contacts[1].id;

	mailH3.textContent = 'mail';
	mailp.textContent = data.identite.contacts[2].mail;

	pagetrois.appendChild(myDivContact);
	myDivContact.appendChild(myH2Contact);
	myDivContact.appendChild(myDivContactList);
	myDivContactList.appendChild(myDivTw);
	myDivContactList.appendChild(myDivInsta);
	myDivContactList.appendChild(myDivMail);
	myDivTw.appendChild(twH3);
	myDivTw.appendChild(twp);
	myDivInsta.appendChild(instaH3);
	myDivInsta.appendChild(instap);
	myDivMail.appendChild(mailH3);
	myDivMail.appendChild(mailp);
};
