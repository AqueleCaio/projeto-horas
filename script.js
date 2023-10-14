let image = document.getElementById('referent_image');
let info_hours = document.getElementById('info_hours');

// Função para concatenar um 0 na frente dos minutos,
// caso tenha mais de duas caracteres a função corta (slice) os dois primeiros da esquerda
function zero(minute){
    return('0' + minute).slice(-2)
};

function updatePage(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    displayMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    displayHours = hours < 10 ? "0" + hours.toString() : hours;

    // Série de if else para mudar o estilo da página:
    if (hours > 11 && hours < 17){
        document.body.style.backgroundColor = 'rgb(43 146 249)';
        image.setAttribute('src', 'imagens/railway-gea24f6fdf_1280.jpg');
        info_hours.innerText = `Agora são exatamente ${displayHours}:${zero(displayMinutes)} da Tarde`;
    } 
    else if (hours > 15 && hours < 18){
        document.body.style.backgroundColor = '#FA9324';
        image.setAttribute('src', 'imagens/tree-gf48efb9fd_1280.jpg');
        info_hours.innerText = `Agora são exatamente ${displayHours}:${zero(displayMinutes)} da Tarde`;
    } 
    else if (hours > 16){
        document.body.style.backgroundColor = '#0B0125';
        image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
        info_hours.innerText = `Agora são exatamente ${displayHours}:${zero(displayMinutes)} da Noite`;
    } 
    else if (hours > -1 && hours < 5){
        document.body.style.backgroundColor = '#0B0125';
        image.setAttribute('src', 'imagens/sky-g7c9547511_1280.jpg');
        info_hours.innerText = `Agora são exatamente ${displayHours}:${zero(displayMinutes)} da Madrugada`;
    } 
    else if (hours > 4 && hours < 12){
        document.body.style.backgroundColor = '#FCFF24';
        image.setAttribute('src', 'imagens/trees-gc0a5a8c23_1280.jpg');
        info_hours.innerText = `Agora são exatamente ${displayHours}:${zero(displayMinutes)} da Manha`;
    }
}

// Chama a função updatePage a cada minuto
setInterval(updatePage, 60000)

// Chama a função updatePage imediatamente ao carregar a página
updatePage();
