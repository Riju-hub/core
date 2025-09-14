let btn=document.querySelector('button');
// btn.addEventListener('click',function(event){
//     console.log(event);
//     console.log("para clicked");
// })
// btn.addEventListener('dblclick',function(event){
//     console.log(event);
//     console.log("para clicked");
// })
let inp=document.querySelector('input');

inp.addEventListener('keydown',function(event){
    // console.log('key was pressed');
    
    console.log(event.key);
    console.log(event.code);
    // if (event.code=="Arrow") {
        
    // }
    
});
// inp.addEventListener('keyup',function(event){
//     console.log('key was released');
    
//     console.log(event.key);
//     console.log(event.code);
// });

// let div=document.querySelector(".box");
// div.addEventListener('mouseenter',function(){
//     console.log("enter mouse");
// })

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");

// btn.addEventListener("click",color);
// h1.addEventListener("click",color);
// h3.addEventListener("click",color);
// p.addEventListener("click",color);

// function color(){
//     console.log(this.innerText);
//     this.style.backgroundColor='pink';
// }