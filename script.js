let image = document.getElementById('referent_image');
let info_hours = document.getElementById('info_hours');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

// Função para concatenar um 0 na frente dos minutos,
// caso tenha mais de duas caracteres a função corta (slice) os dois primeiros da esquerda
function zero(minute){
    return('0' + minute).slice(-2)
};

function reloadPage(){
    location.reload()
};

setInterval(reloadPage, 60000)

// Série de if else para mudar o estilo da página:

// Estilo da página para quando estiver de tarde, entre 12:00 e 17:00
if (hours > 11 && hours < 17){
    document.body.style.backgroundColor = 'rgb(43 146 249)';
    image.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
    info_hours.innerText = `Agora são exatamente ${hours}:${zero(minutes)} da Tarde`;
} 

// Estilo da página para quando estiver no final da tarde, entre 16:00 e 18:00
else if (hours > 15 && hours < 18){
    document.body.style.backgroundColor = '#FA9324';
    image.setAttribute('src', 'imagens/tree-gf48efb9fd_1280.jpg');
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