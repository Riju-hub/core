// let num=212165665;
// // console.log(num.toString().length);
// let str=num.toString();
// for(let i=0;i<str.length;i++){
//     console.log(str[i]+);
// }

// let student={
//     name:"John",
//     age:21,
//     marks:89,
//     isPassed:true,  
//     color:["red","blue","green"]
// }
// console.log(student);

// const obj={
//     1:"a",
//     2:"b", 
//     3:"c",
//     null:"d",
//     undefined:"e"
// };
// console.log(obj[null]);

// const obj={
//     name:"John",
//     age:21,
//     marks:89,
//     city:"kolkata"
// }

// 


// let max=prompt("Enter the max number");
// let random=Math.ceil(Math.random()*max);
// let guess=prompt("Enter your guess number");
// while(true){
//     if(guess=="quit"){
//         console.log("You quit the game");
//         break;
//     }else if(guess==random){
//         console.log("Congratulations! You guessed it right. guess number is "+random);
//         break;
//     }else if(guess<random){
//         guess=prompt("Too small ! Try again.");
//     }else{
//         guess=prompt("Too large ! Try again.");
//     }
// }

// function dice() {
//     let random = Math.ceil(Math.random() * 6);
//     console.log(random);
// }
// dice();

// function add(a, b) {
//      return a + b;
// }
// console.log(add(add(2, 3),5));
// console.log(add(10, 20));

// function printname(name) {
//     console.log("Hello " + name);
// }
// printname("John");
// printname("Alice");


// function avg(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(avg(2, 3, 4));

// function multiTable(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }
// multiTable(5);

// function sum(n){
//     if(n==1){
//         return 1;
//     }
//     return n+sum(n-1);
// }
// console.log(sum(5));

// let arr=["Hello","world","this","is","JavaScript"];
// function concatStr(arr){
//     let result="";
//     for(let i=0;i<arr.length;i++){
//         result+=arr[i]+" ";
//     }
//     return result.trim();
// }
// console.log(concatStr(arr));



// function outer(){
//     let x=34;
//     let y=37;
//     function inner(){
//         let a=56;
//         console.log(x);
//         console.log(y);
//     }
//     inner();
// }
// outer();


// let mul=function(x,y){
//     return x*y;
// }
// console.log(mul(4,5));


// function multiGreet(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("greet");
// }
// multiGreet(greet,4);

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
            
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2==0);
            
        }
    }else{
        console.log("wrong request");
        
    }
}
let func=oddEvenTest(request);
func(4);
func(5);