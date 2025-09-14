// // // methods

// // const calculaor={
// //     add: function(a,b){
// //         return a+b;
// //     },
// //     sub: function(a,b){
// //         return a-b;
// //     },
// //     mul: function(a,b){
// //         return a*b;
// //     },
// //     div: function(a,b){
// //         return a/b;
// //     }
// // };

// // methods

// // const calculaor={
// //     add(a,b){
// //         return a+b;
// //     },
// //     sub(a,b){
// //         return a-b;
// //     },
// //     mul(a,b){
// //         return a*b;
// //     },
// //     div(a,b){
// //         return a/b;
// //     }
// // };  


// // WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber
//     let arr=[1,2,3,4,5,6,7,8,9,10];
//     function largerThan(num){
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>num){
//                 console.log(arr[i]);
//             }
//         }
//     }
//     largerThan(5);


// //  WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”
     
//     let str="abcdabcdefgggh";
//     let ans="";
//     function uniqueChar(str){
//         for(let i=0;i<str.length;i++){
//             if(!ans.includes(str[i])){
//                 ans+=str[i];
//             }
//         }   
//         return ans;
//     }
//     console.log(uniqueChar(str));
//     // let ans="abcdefgh";

// //  Qs3.WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.Example:country=["Australia",    "Germany",            "UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"

//     let country=["Australia","Germany","UnitedStatesofAmerica"];
//     function longestCountry(country){
//         let currLen=country[0].length;
//         let ansLen=0;
//         for(let i=0;i<country.length;i++){
//             if(country[i].length>ansLen){
//                 currLen=country[i].length;
//                 ansLen=i;
//             }
//         }
//         return country[ansLen];
//     }
//     console.log(longestCountry(country));

// //  Qs4.WriteaJavaScriptfunctiontocountthenumberofvowelsinaStringargument.

//     let str1="abcdabcdefgggh";
//     let count=0;
//     function countVowels(str1){
//         for(let i=0;i<str1.length;i++){
//             if(str1[i]=='a'||str1[i]=='e'||str1[i]=='i'||str1[i]=='o'||str1[i]=='u'){
//                 count++;
//             }
//         }
//         return count;
//     }
//     console.log(countVowels(str1));
// //  Qs5.WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end).riju79624@gmail.com

//     function randomNum(start,end){
//         return Math.ceil(Math.random()*(end-start))+start;
//     }
//     console.log(randomNum(5,20));