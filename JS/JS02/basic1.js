// const student={
//     name:"John",
//     age:20, 
//     marks: {
//         science:70,
//         maths:80
//     },
//     getAvg(){
//         console.log(this);
        
//         return (this.marks.science+this.marks.maths)/2;
//     }
// }
// // function getAvg(){
// //         console.log(this);
// //     }
// console.log(student.getAvg());
// console.log(this);


// console.log("hello");
// let a=5;
// try{
//     console.log(a);
// }catch(err){
//     console.log("error hai");
//     console.log(err);
// }
// console.log("bye");



// Arrow fnction
const sum=(a,b)=>{
    return a+b;
}
// console.log(sum(5,6));

const cube=n=>{
    return n*n*n;
}

// Inplicit return
const add=(x,y)=> (x+y);

// Set Timeout
// console.log("Hello");

// setTimeout(()=>{
//     console.log("Good Morning");
// },3000);
// console.log("bro");


// // Set Interval
// console.log("hello");
// let id=setInterval(()=>{
//     console.log("Good Morning");
// },2000);
// console.log("bro");
// console.log(id);


// const student={
//     name: "John",
//     age: 20,
//     marks:78,
//     property: this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this);
//             console.log(this.name);
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);
//             console.log(this.name);
//         },2000);
//     }
// }


let id=setInterval(()=>{
    console.log("Good Morning");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);
