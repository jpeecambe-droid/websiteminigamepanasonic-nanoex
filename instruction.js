const backbuttons = document.querySelectorAll('.frontarrow');
const frontbuttons = document.querySelectorAll('.backarrow');
let seconds = 2;

backbuttons.forEach(button => button.addEventListener('click', start));
frontbuttons.forEach(button => button.addEventListener('click', back));


let grandvictoryminscore = parseInt(localStorage.getItem('grandvictoryminscore')) || 300;
let victoryminscore = parseInt(localStorage.getItem('victoryminscore')) || 200;
let timemaxlimit = parseInt(localStorage.getItem('timemaxlimit')) || 50;

document.getElementById('victoryscore').textContent = victoryminscore;
document.getElementById('grandvictoryscore').textContent = grandvictoryminscore;
document.getElementById('timelimit').textContent = timemaxlimit;


function countdown(){
    const timer = document.getElementById('countdowntimer');
    const secs = String(seconds %60).padStart(2,'0');
    timer.textContent=` ${secs}`;
        if(seconds > 0){
        seconds --;
    }
}

function start(){  
    document.querySelector(".backarrow").style.display = "none";
    document.querySelector(".frontarrow").style.display = "none";
    document.querySelector(".instruction").style.display = "none";
    document.querySelector(".countdown").style.display = "flex";

     
    setTimeout(() => {
    window.location.href = `./game.html`;
    }, 3000);

    setInterval(countdown,1000);

}

function back(){  
    window.location.href = `./index.html`;
}
