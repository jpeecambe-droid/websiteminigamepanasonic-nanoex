const backbutton = document.querySelector('.backarrow');
const victoryadd = document.querySelector('.victoryadd');
const grandvictoryadd = document.querySelector('.grandvictoryadd');
const victorysub = document.querySelector('.victorysub');
const grandvictorysub = document.querySelector('.grandvictorysub');
const clearstoragebutton = document.querySelector('.clearstorage');
const cleartxt = document.querySelector('.clearstoragetxt')
const timesubbutton = document.querySelector('.timesub');
const timeaddbutton = document.querySelector('.timeadd');


backbutton.addEventListener('click',back);
victoryadd.addEventListener('click',victoryaddfunc);
grandvictoryadd.addEventListener('click',grandvictoryaddfunc);
victorysub.addEventListener('click',victorysubfunc);
grandvictorysub.addEventListener('click',grandvictorysubfunc);
clearstoragebutton.addEventListener('click',clearstoragefunc);
timesubbutton.addEventListener('click',timesubfunc);
timeaddbutton.addEventListener('click',timeaddfunc);

let grandvictoryscore = parseInt(localStorage.getItem('grandvictoryminscore')) || 300;
let victoryscore = parseInt(localStorage.getItem('victoryminscore')) || 200;
let grandvictoryminscore = localStorage.getItem('grandvictoryminscore')
let victoryminscore = localStorage.getItem('victoryminscore')
let timelimit = parseInt(localStorage.getItem('timemaxlimit')) || 50;
let timemaxlimit = localStorage.getItem('timemaxlimit')

document.getElementById('victoryscore').textContent = victoryscore;
document.getElementById('grandvictoryscore').textContent = grandvictoryscore;
document.getElementById('timelimit').textContent = timelimit;


function victoryaddfunc(){
    victoryscore += 10;
    document.getElementById('victoryscore').textContent = victoryscore;
    localStorage.setItem('victoryminscore', victoryscore);
    
}
function victorysubfunc(){
    victoryscore -= 10;
    document.getElementById('victoryscore').textContent = victoryscore;
    localStorage.setItem('victoryminscore', victoryscore);
}

function grandvictoryaddfunc(){
    grandvictoryscore += 10;
    document.getElementById('grandvictoryscore').textContent = grandvictoryscore;
    localStorage.setItem('grandvictoryminscore', grandvictoryscore);
}

function grandvictorysubfunc(){
    grandvictoryscore -= 10;
    document.getElementById('grandvictoryscore').textContent = grandvictoryscore;
    localStorage.setItem('grandvictoryminscore', grandvictoryscore);
    
}
function timeaddfunc(){
    timelimit += 5;
    document.getElementById('timelimit').textContent = timelimit;
    localStorage.setItem('timemaxlimit', timelimit);
}

function timesubfunc(){
    timelimit -= 5;
    document.getElementById('timelimit').textContent = timelimit;
    localStorage.setItem('timemaxlimit', timelimit);
}

const portland = document.querySelector('.orientation');
const OrientationLandscape = document.querySelector('.OrientationLandscape');
const OrientationPortrait = document.querySelector('.OrientationPortrait');

portland.addEventListener('click',orientationfunc);

function orientationfunc(){
    if (orientationsetting === 1){
        orientationsetting--;
        activeorientation = 'landscape';
        OrientationLandscape.style.display = 'flex';
        OrientationPortrait.style.display = 'none';
        localStorage.setItem('activeorientation', activeorientation);
    }else{
        orientationsetting++;
        activeorientation = 'portrait';
        OrientationLandscape.style.display = 'none';
        OrientationPortrait.style.display = 'flex';
        localStorage.setItem('activeorientation', activeorientation);
    }
}

let activeorientation = localStorage.getItem('activeorientation') || 'portrait';
if (activeorientation === 'landscape'){
    orientationsetting = 1;
    OrientationLandscape.style.display = 'flex';
    OrientationPortrait.style.display = 'none';
}else{
    orientationsetting = 0;
    OrientationLandscape.style.display = 'none';
    OrientationPortrait.style.display = 'flex';
}

function back(){  
    window.location.href = `./index.html`;
}

function clearstoragefunc(){
    localStorage.clear();
    cleartxt.style.display = 'flex'
    setTimeout(() => {
    cleartxt.style.display = 'none'
        }, 2000);
}
