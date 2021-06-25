//h1 tag
const h1 = document.createElement("h1")
document.body.appendChild(h1);
h1.innerHTML = "CatPhotoApp";

//creating p tag
const pTag = document.createElement("p")
document.body.appendChild( pTag);
pTag.innerHTML= "Click here to view more" + " ";

//creating a tag
const aTag= document.createElement("a");
aTag.setAttribute('href', "https://www.google.com/");
aTag.innerHTML = "cat photos.";

//putting a tag in p tag
pTag.appendChild(aTag);

//cat love  menu
const catLove = document.createElement('h3');
catLove.innerHTML = "Things cats love:";
document.body.appendChild(catLove);

//creating cat love list 
const catLoveList = document.createElement('ul');
document.body.appendChild(catLoveList);

///creating list 
var listitem1 = document. createElement("li");
listitem1.innerHTML = 'cat nip';
document.body.appendChild(listitem1);

var listitem2 = document. createElement("li");
listitem2.innerHTML = 'laser pointer';
document.body.appendChild(listitem2);

var listitem3 = document. createElement("li");
listitem3.innerHTML = 'lasagna';
document.body.appendChild(listitem3);

//adding li in ul
catLoveList.appendChild(listitem1);
catLoveList.appendChild(listitem2);
catLoveList.appendChild(listitem3);

//creating hate h3 tag
const catHateList = document.createElement('h3')
catHateList.innerHTML = "Top 3 things cats hate:";
document.body.appendChild(catHateList);

//creating cathate menu 
const catHateMenu = document.createElement('ol');
document.body.appendChild(catHateMenu);

var listitem4 = document. createElement("li");
listitem4.innerHTML = 'flea treatment';
document.body.appendChild(listitem4);

var listitem5 = document. createElement("li");
listitem5.innerHTML = 'thunder';
document.body.appendChild(listitem5);

var listitem6 = document. createElement("li");
listitem6.innerHTML = 'other cats';
document.body.appendChild(listitem6);

//adding li in ol
catHateMenu.appendChild(listitem4);
catHateMenu.appendChild(listitem5);
catHateMenu.appendChild(listitem6);







