const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');
//const diaDeRpg =  '28 March, 2021 03:00:00';

function contagem(){
    const dataAtual = new Date();
    //const dataDiaDeRpg = new Date(diaDeRpg);
    //const dataDiaDeRpg = new Date("24 Mar 2021");
    const dataDiaDeRpg = new Date("2021-03-28T18:00:00Z");


    const segundosTotais = ((dataDiaDeRpg  - dataAtual) / 1000);
    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(((segundosTotais / 3600) % 24));
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos =  Math.floor(segundosTotais) % 60;

    diasElement.innerHTML = dias;
    horasElement.innerHTML = horas;
    minutosElement.innerHTML = minutos;
    segundosElement.innerHTML = segundos;

    //console.log(dataDiaDeRpg - dataAtual);

}

contagem();

setInterval(contagem, 1000);
