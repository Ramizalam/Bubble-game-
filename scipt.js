
var hitrn = 0;
var timerint =60;
function makebubble(){
    var clutter = " ";
    for(var i = 1; i<= 216; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
        document.querySelector('#pnlbtm').innerHTML= clutter;
    }
    
}

function timer(){
    var time =  setInterval(
        function(){
            if(timerint>0){
                timerint--;
                document.querySelector("#timer").textContent = timerint;
            }
            else{
                document.querySelector('#pnlbtm').innerHTML =`<h1>Game over</h1>`
                clearInterval(time);
            
             }
        }
          ,1000)
}
 function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
 }

function score(){
    var score = 0;
    var a = document.querySelector('#pnlbtm');
    a.addEventListener('click',function(details){
       var clickednum = Number(details.target.textContent)
       if(clickednum==hitrn){
        score+=10;
        document.querySelector("#score").textContent = score;
        hit();
        makebubble();
       }
       else{    
        document.querySelector('#pnlbtm').innerHTML=`<h1>Game over</h1>`
       }
    })
}
timer();
makebubble();
hit();
score();