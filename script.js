console.log("Alert");

const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const saida = document.getElementById("saida");

let nivel = prompt("Me fale até que número você quer que gere um número aleatório: ");

let clicada = 0;
let numSecreto = Math.floor(Math.random() * nivel);

btn.addEventListener("click", function () {

    if (clicada > 3) {
        alert("Você é muito burro! Acabou suas chances.");
        document.getElementById('btn').disabled = true;

    } else if (entrada.value > numSecreto) {
        alert("O número secreto é menor.");

    } else if (entrada.value < numSecreto) {
        alert("O número secreto é maior.");

    } else {
        alert("Parabéns você acertou!!");
    }

    clicada++;
    console.log("errou");

});

