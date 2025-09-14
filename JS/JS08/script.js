// let h1=document.querySelector('h1');
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColorChange) nextColorChange();
//     },delay);
// }


let h1=document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed1")
        },delay);
    })
}
changeColor('red',1000)
.then(()=>{
    console.log("red color completed");
    return changeColor('orange',1000);
})
.then(()=>{
    console.log("orange color completed");
    return changeColor('blue',1000);
})
.then(()=>{
    console.log("blue color completed");
})

// changeColor('red',1000,()=>{
//     changeColor('orange',1000,()=>{
//         changeColor('green',1000);
//     });
// });

// function saveToDb(data,success,faliure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4) {
//         success();        
//     }else{
//         faliure();        
//     }
// }


// saveToDb('dj',()=>{
//     console.log("succes: data saved");
//     saveToDb("alok",()=>{
//         console.log("succes2: data saved"); 
//         saveToDb('aamdf',()=>{
//             console.log("succes3: data saved"); 
//         },()=>{
//             console.log("faliure3 : weak connection");
//         })       
//     },()=>{
//         console.log("faliure2 : weak connection");
//     })
// },()=>{
//     console.log("faliure : weak connection");
// });






// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4) {
//             resolve("success: data was saved");        
//         }else{
//             reject("faliure: weak connection");        
//         }
//     });  
// }




// saveToDb("alok")
//     .then(()=>{
//         console.log("promise was resolved");        
//     })
//     .catch(()=>{
//         console.log("promise was reject");
//     });






// saveToDb("alok")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("result of promise:",result);
        
//         return saveToDb("axis")            
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise:",result);
        
//         return saveToDb("delete")
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise:",result);
        
//     })
//     .catch((error)=>{
//         console.log("promise was reject");
//         console.log("error of promise:",error);
        
//     });
