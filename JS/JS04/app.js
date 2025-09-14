// let imgObj=document.getElementsByClassName("oldImg");
// for(let i=0;i<imgObj.length;i++){
//     imgObj[i].src="assets/spiderman_img.png";
//     console.dir(` value changed ${i} `);
// }

// console.dir(document.querySelector('p'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));
// console.dir(document.querySelectorAll('p'));

// console.dir(document.querySelectorAll('div a')[3]);

let links=document.querySelectorAll('.box a');
// for(let i=0;i<links.length;i++){
//     links[i].style.color="purple";
// }

for(link of links){
    link.style.color="green";
}

