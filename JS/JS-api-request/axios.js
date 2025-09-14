// let btn=document.querySelector('button');
// btn.addEventListener('click',async ()=> {
//     let fact=await getRes();
//     console.log(fact);
    
//     let p=document.querySelector('p');
//     p.innerText=fact;
// })


// let url='https://catfact.ninja/fact';
// async function getRes() {
//     try{
//         let res1=await axios.get(url);
//         return res1.data.fact;
//         // let res2=await axios.get(url);
//         // console.log(res2.data.fact);
//     }
//     catch(e){
//         console.log("Error : ",e)
//     }
//     return 'No Fact Found';
// }



// let btn=document.querySelector('button');
// btn.addEventListener('click',async ()=> {
//     let link=await getRes();
//     console.log(link);
//     let img=document.querySelector('img');
//     img.setAttribute('src',link)
// })


// let url='https://dog.ceo/api/breeds/image/random';
// async function getRes() {
//     try{
//         let res=await axios.get(url);
//         return res.data.message;
//     }
//     catch(e){
//         console.log("Error : ",e)
//         return 'No Fact Found';
//     }
// }
    

// let url="https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         let config={headers:{Accept:'text/plain'}};
//         let res=await axios.get(url,config);
//         console.log(res.data);
//     } catch (error) {
//        console.log(error);
//     }
// }
// getJokes();

let url='http://universities.hipolabs.com/search?name=India&state-province=';
let btn=document.querySelector('button');
btn.addEventListener('click',async()=>{
    let country=document.querySelector('input').value;
    console.log(country);
    
    let colArr=await getCollages(country);
    console.log(colArr);
    Show(colArr);
})
function Show(colArr) {
    let list=document.querySelector('#list');
    list.innerText='';
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement('li');
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getCollages(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
       console.log(e);
       return [];
    }
}