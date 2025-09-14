let input=document.createElement('input');
let btn=document.createElement('button');
btn.innerHTML='click me!';
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

btn.style.backgroundColor='#00f';
btn.style.color='#fff';
let h1=document.createElement('h1');
h1.innerHTML='<u>Dom Practice</u>';

h1.style.color="#f0f";
let p=document.createElement('p');
p.innerHTML="apna colledge <b>delta</b> practice";
let body=document.querySelector('body');
body.append(input);
body.append(btn);
console.dir(document.querySelector('#btn'))
body.append(h1);
body.append(p)