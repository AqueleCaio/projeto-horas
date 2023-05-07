let info_hours = document.getElementById('info_hours');
let image = document.getElementById('referent_image');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

const interval = 60 * 1000;

// Função para concatenar um 0 na frente dos minutos,
// caso tenha mais de duas caracteres a função corta (slice) os dois primeiros da esquerda
function zero(minute){
    return('0' + minute).slice(-2)
};

function reloadPage(){
    location.reload()
};

setInterval(reloadPage, interval)

// Estilo da página para quando estiver de tarde, entre 12:00 e 17:00
if (hours > 11 && hours < 17){
    document.body.style.backgroundColor = 'rgb(43 146 249)';
    image.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
    info_hours.innerText = `Agora são exatamente ${hours}:${zero(minutes)} da Tarde`;

} 

// Estilo da página para quando estiver de noite, entre 16:00 e 0:00
else if (hours > 16){
    document.body.style.backgroundColor = '#0B0125';
    image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
    info_hours.innerText = `Agora são exatamente ${hours}:${zero(minutes)} da Noite`;
} 

// Estilo da página para quando estiver de noite, entre 0:00 e 5:00
else if (hours > -1 && hours < 5){
    document.body.style.backgroundColor = '#0B0125';
    image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
    info_hours.innerText = `Agora são exatamente ${hours}:${zero(minutes)} da Madrugada`;
} 

// Estilo da página para quando estiver de manha, entre 4:00 e 12:00
else if (hours > 4 && hours < 12){
    document.body.style.backgroundColor = '#FCFF24';
    image.setAttribute('src', 'imagens/trees-gc0a5a8c23_1280.jpg');
    info_hours.innerText = `Agora são exatamente ${hours}:${zero(minutes)} da Manha`;
}


/*
--- Tentativa de usar o switch/case ----

switch(hours){
    
    // Estilo da página para quando for de manha, entre 5:00 e 12:00
    case hours > 4 && hours < 12:
        document.body.style.backgroundColor = '#FCFF24';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Porra`;
        image.setAttribute('src', 'imagens/trees-gc0a5a8c23_1280.jpg');
    break;

    case hours > 11 && hours < 17: 
        document.body.style.backgroundColor = '#5BFFDF';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Tarde`;
        image.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
    break;

    case hours > 16:
        document.body.style.backgroundColor = '#0B0125';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Noite`;
        image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
    break;

    case hours > -1 && hours < 5:
        document.body.style.backgroundColor = '#0B0125';
        info_hours.innerText = `Agora são exatamente ${hours}:${minutes} da Madrugada`;
        image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
    break;
}
*/

