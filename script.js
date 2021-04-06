const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const diasDeDomingo = [new Date("2021-04-11T18:00:00Z"),
                       new Date("2021-04-18T18:00:00Z"),
                       new Date("2021-04-25T18:00:00Z"),
                       new Date("2021-05-02T18:00:00Z"),
                       new Date("2021-05-09T18:00:00Z"),
                       new Date("2021-05-16T18:00:00Z"),
                       new Date("2021-05-23T18:00:00Z"),
];
                 
function contagem(){
    const dataAtual = new Date();
    const dataDiaDeRpg = diasDeDomingo[0];


    const segundosTotais = ((dataDiaDeRpg  - dataAtual) / 1000);
    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(((segundosTotais / 3600) % 24));
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos =  Math.floor(segundosTotais) % 60;

    diasElement.innerHTML = (dias > 0) ? dias : 0;
    horasElement.innerHTML = (horas > 0) ? horas : 0;
    minutosElement.innerHTML = (minutos > 0) ? minutos : 0;
    segundosElement.innerHTML = (segundos > 0) ? segundos : 0;

    aoVivo(dataAtual, dataDiaDeRpg);
}

function aoVivo(dataAtual, dataInicioSessao){
    const dataFimSessao = dataInicioSessao.getTime() + 12600000;

    if((dataAtual >= dataInicioSessao) && (dataAtual < dataFimSessao)){
        document.getElementById("time-box").style.display= "none";
        document.getElementById("time-box").style.opacity="0";
        document.getElementById("message").innerHTML = "Estamos ao vivo!"
        document.getElementById("twitch-embed").style.display="";
        document.getElementById("container-id").style.width='95%';
        document.getElementById("twChannel").style.display="none";
    }
    else{
        document.getElementById("twitch-embed").style.display="none";
        document.getElementById("time-box").style.opacity="1";
        document.getElementById("time-box").style.display= "flex";
        document.getElementById("message").innerHTML = "Até a próxima sessão de Donos de Phandalim"
    }
    if(dataAtual > dataFimSessao){
        diasDeDomingo.shift();
    }
    return true;
}
contagem();

setInterval(contagem, 1000);

