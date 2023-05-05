let info_hours = document.getElementById('info_hours');
let img = document.getElementById('referent_img');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();


// Estilo da página para quando estiver de tarde, entre 12:00 e 17:00
if (hours > 11 && hours < 17){
    document.body.style.backgroundColor = 'rgb(43 146 249)';
    info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Tarde`;
    img.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
} 

// Estilo da página para quando estiver de noite, entre 16:00 e 0:00
else if (hours > 16){
    document.body.style.backgroundColor = '#0B0125';
    info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Noite`;
    img.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
} 

// Estilo da página para quando estiver de noite, entre 0:00 e 5:00
else if (hours > -1 && hours < 5){
    document.body.style.backgroundColor = '#0B0125';
    info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Madrugada`;
    img.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
} 

// Estilo da página para quando estiver de manha, entre 4:00 e 12:00
else if (hours > 4 && hours < 12){
    document.body.style.backgroundColor = '#FCFF24';
    info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Manha`;
    img.setAttribute('src', 'imagens/trees-gc0a5a8c23_1280.jpg');
}


/*

switch(hours){
    
    // Estilo da página para quando for de manha, entre 5:00 e 12:00
    case hours >= 5 && hours <= 12:
        document.body.style.backgroundColor = '#FCFF24';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Porra`;
        img.setAttribute('src', 'imagens/trees-gc0a5a8c23_1280.jpg');
    

    case hours >= 12 && hours <= 17: 
        document.body.style.backgroundColor = '#5BFFDF';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Tarde`;
        img.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
    

    case  hours >= 17 && hours <= 5:
        document.body.style.backgroundColor = '#0B0125';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Noite`;
        img.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
}

*/