let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','blue']

let started=false;
let level=0;

let h2=document.querySelector('h2');


let highScore = localStorage.getItem('highScore') || 0;

document.addEventListener('keypress',function(){
    if (started==false) {
        console.log('game started');
        started=true;
        levelUp();
    }
    
    
})
function gameFlash(btn){
    btn.classList.add('gameflash');
    setTimeout(() => {
        btn.classList.remove('gameflash');
    }, 200);
}
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove('userflash');
    }, 200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*3);
    let randCol=btns[randInx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(level > highScore){
    highScore = level;
    localStorage.setItem('highScore', highScore);
    }

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }        
    }else{    
        h2.innerHTML=`game Over!.<br> Your score is <b>${level}</b> <br>Highest score: <b>${highScore}</b> <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor='#fff';
        },150);
        reset();
    };
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute('id')
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}