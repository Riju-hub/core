let h2=document.querySelector('h2')
let inp=document.querySelector('input')

inp.addEventListener('input',function(){
    let filtered=inp.value.replace(/[^a-zA-Z]/g, ' ');
    h2.innerText=filtered;
})