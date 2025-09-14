// p
let p=document.createElement('p');
p.innerText="Hey i'am red";
p.style.color='#f00';
// h3
let h3=document.createElement('h3');
h3.innerText="I'am blue h3 ";
h3.style.color='#00f';
// div  h1  p
let div=document.createElement('div');
div.style.border='1 px solid #000';
div.style.backgroundColor='#f0f';

let h1=document.createElement('h1');
h1.innerText="I'am a div";
// div.insertAdjacentElement('afterbegin',h1);
div.append(h1);

let p1=document.createElement('p');
p1.innerText='Me Too!';
// div.insertAdjacentElement('afterbegin',p1);
div.append(p1);

let body=document.querySelector('body');
body.append(p);
body.append(h3);
body.append(div);
// console.dir(body);