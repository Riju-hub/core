// async function greet(){
// //    throw 'some random error';
// abc.abc();
//     return 'greet';
// }
// greet()
// .then((result)=>{
//     console.log("promiss was resolved");
//     console.log("result is:",result);
    
// })
// .catch((err)=>{
//     console.log("promiss was rejected with err:",err);
    
// })

// let demo=async()=>{return 6};
// console.log(demo)

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }
// async function demo(){
//    await getNum();
//     getNum();
//    getNum();
// }

let h1=document.querySelector('h1');
function changeColor(color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>4){
                reject("promise rejected");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}`);        
            resolve("color changed");
        },1000);
    })
}
async function color() {
    try{
        await changeColor('red')
        await changeColor('orange')
        await changeColor('blue')
        await changeColor('green')
    }
    catch(error){
        console.log("error caught");
        console.log(error);
    }
    let c=4;
    console.log(c+3);
}
color();