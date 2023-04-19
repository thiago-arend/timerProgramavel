let segundosRestantes, horas, minutos, segundos;

const totalSegundos = prompt("Digite uma quantidade de tempo em segundos: "); // segundos digitados pelo usuario
horas = Math.floor(totalSegundos / 3600); // horas tem a divisao inteira (totalSegundos / 3600)
segundosRestantes = totalSegundos % 3600; // segundos do resto da divisao de horas
minutos = Math.floor(segundosRestantes / 60); // minutos tem a divisao inteira (segundosRestante / 60)
segundos = segundosRestantes % 60; // segundos tem o resto da divisão inteira

renderizaHora();

const idTimer = setInterval(() => {

    // parada do timer
    if(horas === 0 && minutos === 0 && segundos === 0){
        clearInterval(idTimer);
    }
    else if (segundos !== 0){ // segundos é zero, resto nao sei
        segundos--;

        if (segundos === 0 && (minutos !== 0 || horas !== 0)){
            segundos = 59;

            if (minutos === 0){
                minutos = 59;
                horas--;
            } else {
                minutos--;
            }
        }
    }
    else if (minutos !== 0){ // minutos nao é zero, segundos é zero, hora nao sei
        segundos = 59;
        minutos--;
    }
    else {
        horas--;
        minutos = 59;
        segundos = 59;
    }

    renderizaHora();
}, 1000);

function renderizaHora() {
    const h1 = document.querySelector("h1");

    let tHoras = "";
    let tMin = "";
    let tSeg = "";

    if (horas < 10){
        tHoras = "0";
    }
    if (minutos < 10){
        tMin = "0";
    }
    if (segundos < 10){
        tSeg = "0";
    }

    h1.innerHTML = `${tHoras}${horas}:${tMin}${minutos}:${tSeg}${segundos}`;
}