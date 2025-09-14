// let arr=[1,2,3,4,5];
// // // let print=function(el){
// // //     console.log(el);
// // // }
// // // arr.forEach(print);
// // arr.forEach(function(el){
// //     console.log(el);
// // });
// arr.forEach(el=>console.log(el));   

// let arr=[
//     {name:"A",age:23},
//     {name:"B",age:24},
//     {name:"C",age:25}
// ];
// arr.forEach(student => console.log(student.age));.

// let arr=[1,2,3,4,5];
// let newArr=arr.map(el=> { return el*2});
// console.log(newArr);

// let students=[
//     {name:"A",age:23,marks:80},
//     {name:"B",age:24,marks:90},
//     {name:"C",age:25,marks:85}
// ];
// let gpa=students.map(el => {return el.marks/10});
// console.log(gpa);

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let even=nums.filter(el=>el>5);
// console.log(even);

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let num=nums.every(el=> el<=10);
// console.log(num);

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let num=nums.some(el=> el%2!=0);
// console.log(num);

// let nums=[1,2,3,4,5];
// let finalVAl=nums.reduce((res,el)=>{console.log(res); return res+el});
// // console.log(finalVAl);

// let nums=[1,2,3,4,5,6,7,8,45,9,10];
// let maxNum=nums.reduce((max,el)=> el>max?el:max);
// console.log(maxNum);

// let nums=[10,20,30,40,50];
// let ans=nums.every(el=> el%10==0);
// console.log(ans);

// let nums=[2,3,4,5,6,7,1,8,45,9,-43,10];
// function getmin(nums){
//     let maxNum=nums.reduce((min,el)=> el<min?el:min);
//     return maxNum;
// }

// console.log(getmin(nums));

// function sum(a=5,b){
//     return a+b;
// }
// console.log(sum(3,4));
// console.log(sum(3));

// //spread
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(...arr3);
// console.log(Math.max(...arr3));
// console.log(Math.min(...arr3));
// console.log(..."hello world");

// let arr1=[1,2,3];
// console.log([...arr1]);

// console.log([..."hello"]);
// let arr1=[1,3,5,7,9];
// let arr2=[2,4,6,8,10];
// let merged=[...arr1,...arr2];
// console.log(merged);
// let sorted=merged.sort((a,b)=>a-b);
// console.log(sorted);
// let arr=[1,2,3];


// const data={
//     name:"A",
//     age:23,
//     marks:80
// };
// console.log(data);

// let ans={...data,city:"Delhi"};
// console.log(ans);

let arr=[1,2,3,4,5];
let copy={...arr};
console.log(copy);

let str="hello";
let strcopy=[...str];
console.log(strcopy);