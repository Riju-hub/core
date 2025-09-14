// function sum(...args){
//     return args.reduce((res,el)=>res+el);
// }
// function min(...args){
//     return args.reduce((min,el)=>min>el?el:min);
// }
// let names=["tony","dds","rg","afes","rgs","tyu"];
// let [a,b,...others]=names;
//  let students={
//     name:"dj",
//     username: "@dj",
//     password:"dvs"
//  }
//  let {username:user,password:secret}=students;


// 1.Square and sum the array elements using the arrow function and then find the average of the array

// let arr=[1,2,3,4,5,6,7,8,9,10];
// // let square=arr.map(el=>el*el);
// // console.log(square);
// // let sum=arr.reduce((res,el)=>res+el)
// // console.log(sum);
// // let avg=sum/arr.length;
// // console.log(avg);

// let newArr=arr.map(el=>{return el+5})
// console.log(newArr);

// let arr1=["adam","bob","catlyn","donald","eve"];
// let newArr=arr1.map(string=>string.toUpperCase);
// console.log(newArr);

// const originalArray = ["hello", "world", "javascript"];
// function upparCase(words){
//     return words.map(word=> word.toUpperCase());
// }
// console.log(upparCase(originalArray));

// function toUpperCaseArray(words) {
//   return words.map(word => word.toUpperCase());
// }

// // Example usage:
// const originalArray = ["hello", "world", "javascript"];
// const uppercasedArray = toUpperCaseArray(originalArray);

// console.log(uppercasedArray); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]

// const doubleAndReturnArgs=(arr,...args)=>([...arr,...args.map(v=> v*2)]);
// doubleAndReturnArgs([1,2,3],5,6,7);

  
// let =({a:1,b:2},{c:3,d:4});
// const obj={...arr1,...arr2};
// console.log(obj);

const mergedObj=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergedObj({1:2,4:6},{5:4,7:9}));


