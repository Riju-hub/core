// console.log("Hello World");
// let a = 10;
// let b = 20; 
// console.log("Sum is", a + b);
// let pencilPrice = 10;
// let penPrice = 20;  
// // let output="Total price is " + (pencilPrice + penPrice) + " Rs";
// // console.log(output);
// // console.log("Total Price is "+(pencilPrice + penPrice)+ " Rs");
// console.log(`Total Price is ${pencilPrice + penPrice} Rs`);
// let a=9
// let b=6
// console.log(a!=b);
// console.log(0=="");
// let age=49;
// if(age>=18){
//     console.log("You can vote");
// }
// else if(age==17) {
//     console.log("You can vote next year");
// }
// else{
//     console.log("You cannot vote");
// }

// let color="blue";
// switch(color){
//     case 'red':
//         console.log("Color is red");
//         break;
//     case 'yellow':
//         console.log("Color is yellow");
//         break;
//     case 'green':
//         console.log("Color is green");
//         break;
//     default:
//         console.log("Broken Light");
// }

// let day=8;
// switch(day){
//     case 1:
//     console.log("Sunday");
//     break;
//     case 2:
//     console.log("Monday");
//     break;
//     case 3: 
//     console.log("Tuesday");
//     break;
//     case 4:
//     console.log("Wednesday");
//     break;
//     case 5:
//     console.log("Thursday");
//     break;
//     case 6:
//     console.log("Friday");
//     break;
//     case 7:
//     console.log("Saturday");
//     break;
//     default:
//     console.log("Invalid Input");
// }

// alert("Hello World");
// console.log("simple message");
// console.error("this is an error message");
// console.warn("this is warning message");

// let name=prompt("Enter your name");
// // alert(`Hello ${name}, Welcome to JavaScript`);
// console.log(`Hello ${name}, Welcome to JavaScript`);

// let firstname=prompt("Enter your first name");
// let lastname=prompt("Enter your last name");
// console.log(`Hello ${firstname} ${lastname}, Welcome to JavaScript`);

// let num=prompt("Enter a number");
// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// console.log(`${name} is ${age} years old`);

// let quater=prompt("Enter quater number : ");
// switch(quater){
//     case '1':
//         console.log("Months in Quater 1 : January, February, March");
//         break;
//     case '2':
//         console.log("Months in Quater 2 : April, May, June");
//         break;
//     case '3':
//         console.log("Months in Quater 3 : July, August, September");
//         break;
//     case '4':
//         console.log("Months in Quater 4 : October, November, December");
//         break;
//     default:
//         console.log("Invalid Input");
// }

// let str=prompt("Enter a string : ");
// if((str[0]==='A' || str[0]==='a')&& str.length>5){
//     console.log("Golden String");
// }else{
//     console.log("Not a Golden String");
// }

// let num1=prompt("Enter first number : ");
// let num2=prompt("Enter second number : ");
// let num3=prompt("Enter third number : ");
// if(num1>=num2 && num1>=num3){
//     console.log(`${num1} is the largest number`);
// }
// else if(num2>=num1 && num2>=num3){
//     console.log(`${num2} is the largest number`);
// }
// else{
//     console.log(`num3 ${num3} is the largest number`);
// }

// let num1=prompt("Enter first number : ");
// let num2=prompt("Enter second number : ");
// // console.log(num1[num1.length-1]===num2[num2.length-1]);
//  console.log((num1%10)===(num2%10));

// 
// let str="Hello World";
// console.log(str.slice(0,5));

// let str="Hello World";
// console.log(str.replace("l","e"));

// 

// let students=["John","Alice","Bob"];
// console.log(students);
// console.log(typeof (students));

// let num=[10,20,30,40,50];
// console.log(num[1]);

// let fruits=["Apple","Banana","Orange"];
// fruits[1]="Mango";
// fruits[10]="Pineapple";
// console.log(fruits);

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// let n=prompt("Enter a num : ")
// for(let i=1;i<=10;i++){
//     console.log(`${n} X ${i} = ${5*i}`);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(`(${i},${j})`);
        
//     }
// }


// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5);
// console.log(i);


// let favmovie="avatar";
// let guess=prompt("Enter a movie name : ");
// while ((guess != favmovie)) {
//     if(guess=="quit"){
//         break;
//     }
//     guess=prompt("try again : ");
// }
// if(guess==favmovie){
//     console.log("You guessed it right");
// }else{
//     console.log("You quit the game");
// }

// let i=1;
// while(i<=5){
//     if(i==3){
//         // i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// for( num of arr){
//     console.log(num);
//     for(n of num){
//         console.log(n);
//     }
// }



// todo app
// let todos=[];
// let input=prompt("What would you like to do?");
// while(input!=="quit" && input!=="q"){
//     if(input==="list"){
//         console.log("**********");
//         for(let i=0;i<todos.length;i++){
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("**********");
//     }
//     else if(input==="new"){
//         let newTodo=prompt("Enter new todo");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`);
//     }
//     else if(input==="delete"){
//         let index=prompt("Enter index of todo to delete");
//         let deleted=todos.splice(index,1);
//         console.log(`Deleted todo: ${deleted[0]}`);
//     }
//     input=prompt("What would you like to do?");
// }


// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);