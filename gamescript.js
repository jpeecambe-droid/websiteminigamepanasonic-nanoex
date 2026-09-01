const spawngamespace = document.querySelector('.gamespace');
const gamespace = document.getElementById('gamespace');
const homebutton = document.querySelector('.backarrow');
const SVGLine = 'http://www.w3.org/2000/svg';

const svg = document.createElementNS(SVGLine, 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
svg.setAttribute('style', 'position: absolute; top: 0; left: 0;');
spawngamespace.appendChild(svg);

let score = 0;
let userX = 0;
let userY = 0;
let generate = true;
let germInterval;




homebutton.addEventListener('click',homebuttonfunction);

function laserend(){
    if(!seconds) return;
    const clickrestriction = spawngamespace.getBoundingClientRect();
    const xaxis = userX - clickrestriction.left;
    const yaxis = userY - clickrestriction.top;
    const line = document.createElementNS(SVGLine,'line');
    line.setAttribute('x1', (clickrestriction.width/2));
    line.setAttribute('y1', 40);
    line.setAttribute('x2',xaxis);
    line.setAttribute('y2',yaxis);
    line.setAttribute('stroke-opacity',0.3)
    line.setAttribute('stroke','cyan');
    line.setAttribute('stroke-width','10');
    svg.appendChild(line);
    setTimeout(() => {
    svg.removeChild(line);
    }, 500);
}

function homebuttonfunction(){
    window.location.href = `./index.html`; 
}


function randomizeGermPosition(spawngerm) {
    const spacerestriction = spawngamespace.getBoundingClientRect();
    const germSize = 75;
    
    const maxX = spacerestriction.width - germSize;
    const maxY = spacerestriction.height - germSize - 100;

    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * (maxY)+60;
    
    spawngerm.style.left = randomX + 'px';
    spawngerm.style.top = randomY + 'px';
}

function generategerm(){
    if (!generate) return;
    const spawngerm = document.createElement("div");
    const randint = Math.floor(Math.random()*10);
    gamespace.appendChild(spawngerm);
    if (randint <= 5){
    spawngerm.classList.add('germ1');
    spawngerm.classList.add('score1');
    spawngerm.style.opacity = 1;
    spawngerm.style.transition = "opacity 3s";
    setTimeout(() => {
    spawngerm.style.opacity = 0;
        setTimeout(() => {
        gamespace.removeChild(spawngerm); 
        }, 6000);
    }, 3000);
    }else if (randint <= 8){
    spawngerm.classList.add('germ2');
    spawngerm.classList.add('score2');
    spawngerm.style.opacity = 1;
    spawngerm.style.transition = "opacity 3s";
    setTimeout(() => {
    spawngerm.style.opacity = 0;
        setTimeout(() => {
        gamespace.removeChild(spawngerm); 
        }, 6000);
    }, 3000);
    }else if (randint  <= 10){
    spawngerm.classList.add('germ3');
    spawngerm.classList.add('score3');
    spawngerm.style.opacity = 1;
    spawngerm.style.transition = "opacity 3s";
    setTimeout(() => {
    spawngerm.style.opacity = 0;
        setTimeout(() => {
        gamespace.removeChild(spawngerm); 
        }, 6000);
    }, 3000);
    }
    spawngerm.addEventListener('click',(event) => {
        userX = event.clientX;
        userY = event.clientY;
        killgerm.call(spawngerm);
        laserend();
    });
    randomizeGermPosition(spawngerm);
}

function killgerm(){
    if (this.classList.contains('germ3')){
    this.classList.replace('germ3','germ2');
    }else if(this.classList.contains('germ2')){
    this.classList.replace('germ2','germ1');
    }else if(this.classList.contains('germ1')){
        if (this.classList.contains('score3')){
            score += 25;
        }else if (this.classList.contains('score2')){
            score += 15;
        }else if (this.classList.contains('score1')){
            score += 5;
        }
    gamespace.removeChild(this);
    }
    document.getElementById('score').textContent = score;
}

let grandvictoryminscore = parseInt(localStorage.getItem('grandvictoryminscore')) || 300;
let victoryminscore = parseInt(localStorage.getItem('victoryminscore')) || 200;
let timemaxlimit = parseInt(localStorage.getItem('timemaxlimit')) || 50;
let seconds = timemaxlimit - 1;
document.getElementById('timer').textContent = timemaxlimit;

function updatetimer(){
    const timer = document.getElementById('timer')
    const secs = String(seconds %60).padStart(2,'0');
    timer.textContent=`${secs}`;
    if(seconds > 0){
        seconds --;
    }else{
        removeAllGermListeners();
        generate = false;
        if (score >= grandvictoryminscore){
            document.querySelector('.grandvictory').style.display = 'flex'
        }else if(score >=victoryminscore){
            document.querySelector('.victoryscreen').style.display = 'flex'
        }else{
            document.querySelector('.timesup').style.display = 'flex'
        }
        
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}

function removeAllGermListeners() {
    const allGerms = document.querySelectorAll('.germ1, .germ2, .germ3');
    allGerms.forEach(germ => {
        germ.removeEventListener('click', killgerm);
    });

}



function dynamicspawningrate(){
    clearInterval(germInterval);
    if (seconds >= 40){
        germInterval = setInterval(()=>{
            generategerm();
            generategerm();
        }, 900);
    }else if (seconds >= 30){
            germInterval = setInterval(()=>{
            generategerm();
            generategerm();

        }, 800);
    }else if (seconds >= 20){
        germInterval = setInterval(()=>{
            generategerm();
            generategerm();
        }, 600); 
    }else if (seconds >= 10){
        germInterval = setInterval(generategerm, 400);
    }else{
        germInterval = setInterval(generategerm, 300);
    }
    
}

    let activeorientation = localStorage.getItem('activeorientation');
    if (activeorientation === 'portrait'){
        document.documentElement.style.setProperty('--bgimg', 'url(assets/portrait.png)');
    }else if(activeorientation === 'landscape'){
        document.documentElement.style.setProperty('--bgimg', 'url(assets/landscape.jpg)');
    }

setInterval(dynamicspawningrate,1000)
setInterval(updatetimer,1000);
