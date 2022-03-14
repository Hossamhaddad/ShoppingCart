'use strict'
let img=document.getElementsByClassName('shopItems_Img');

fetch("cakes.json")
  .then(response => response.json())
  .then(json => {return json.body})
  .then(json=>{
   

let container=document.getElementsByClassName('shopItems_section')[0];
for(let i=0;i<json.length;i++){
let name=document.createElement('h5');
let price=document.createElement('h5');

let shopItmes=document.createElement('div');
let card=document.createElement('div');
let shopItems_Img=document.createElement('div');
let shopItems_Des=document.createElement('div');

let nameText=document.createTextNode(`${json[i].name}`);
let priceText=document.createTextNode(`${json[i].price}`)
name.appendChild(nameText);
price.appendChild(priceText);
shopItmes.classList.add('shopItems');
card.classList.add('card');
shopItems_Des.appendChild(name);
shopItems_Des.appendChild(price);
shopItems_Img.classList.add('shopItems_Img');
shopItems_Des.classList.add('shopItems_Des');
container.appendChild(shopItmes);
shopItmes.appendChild(card);
card.appendChild(shopItems_Img);
card.appendChild(shopItems_Des);


shopItems_Img.style.backgroundImage=`url('${json[i].image}')`;


//  img[0].style.backgroundImage=`url('${json[i].image}')`;



}
     
  })
 

