const startbutton = document.querySelector('.startbutton');
const settingsbutton = document.querySelector('.settings');

startbutton.addEventListener('click', start);
settingsbutton.addEventListener('click', settings);

function start(){  
    window.location.href = `./instruction.html`;
}

function settings(){  
    window.location.href = `./settingshtml.html`;
}

