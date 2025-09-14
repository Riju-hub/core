let form=document.querySelector('form');
// let btn=document.querySelector('button');

form.addEventListener('submit',function(event){
    event.preventDefault();
    // console.dir(form.elements);
    // let user=this.elements[0];
    // let pass=this.elements[1];
    // console.log('user: ',user.value);
    // console.log('pass: ',pass.value);

});
let user=document.querySelector('#user');
user.addEventListener('change',function(){
    console.log("input changed");
    console.log('changed value: ',user.value);  
})
user.addEventListener('input',function(){
    console.log("input changed");
    console.log('changed value: ',user.value);  
})