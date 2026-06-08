// ==========================
// MODO ESCURO
// ==========================

const themeButton = document.getElementById("themeButton");

if(localStorage.getItem("tema") === "escuro"){
document.body.classList.add("dark");
themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("tema", "escuro");
    themeButton.textContent = "☀️";
}else{
    localStorage.setItem("tema", "claro");
    themeButton.textContent = "🌙";
}

});

// ==========================
// SIMULADOR DE FAZENDA
// ==========================

let producao = 50;
let ambiente = 50;

const producaoElemento =
document.getElementById("producao");

const ambienteElemento =
document.getElementById("ambiente");

const statusElemento =
document.getElementById("status");

function atualizarPainel(){

producaoElemento.textContent = producao;
ambienteElemento.textContent = ambiente;

if(producao > ambiente + 30){

    statusElemento.textContent =
    "⚠️ Atenção! A produção está crescendo mais rápido que a preservação ambiental.";

}else if(ambiente > producao){

    statusElemento.textContent =
    "🌳 Excelente! Sua fazenda está priorizando sustentabilidade.";

}else{

    statusElemento.textContent =
    "✅ Produção e meio ambiente estão equilibrados.";

}

}

document
.getElementById("btnProducao")
.addEventListener("click", () => {

producao += 10;
ambiente -= 5;

if(ambiente < 0){
    ambiente = 0;
}

atualizarPainel();

});

document
.getElementById("btnArvores")
.addEventListener("click", () => {

ambiente += 10;

if(ambiente > 100){
    ambiente = 100;
}

atualizarPainel();

});

document
.getElementById("btnAgua")
.addEventListener("click", () => {

ambiente += 5;
producao += 5;

if(ambiente > 100){
    ambiente = 100;
}

if(producao > 100){
    producao = 100;
}

atualizarPainel();

});

document
.getElementById("btnSolar")
.addEventListener("click", () => {

ambiente += 8;
producao += 3;

if(ambiente > 100){
    ambiente = 100;
}

if(producao > 100){
    producao = 100;
}

atualizarPainel();

});

atualizarPainel();

// ==========================
// QUIZ
// ==========================

const quizOptions =
document.querySelectorAll(".quiz-option");

const quizResult =
document.getElementById("quizResult");

quizOptions.forEach(botao => {

botao.addEventListener("click", () => {

    if(botao.classList.contains("correct")){

        quizResult.textContent =
        "✅ Correto! Energia solar é uma fonte renovável.";

        quizResult.style.color = "green";

    }else{

        quizResult.textContent =
        "❌ Resposta incorreta. Tente novamente.";

        quizResult.style.color = "red";

    }

});

});

// ==========================
// FORMULÁRIO
// ==========================

const form =
document.getElementById("contactForm");

const formMessage =
document.getElementById("formMessage");

form.addEventListener("submit", (evento) => {

evento.preventDefault();

const nome =
document.getElementById("nome").value.trim();

const email =
document.getElementById("email").value.trim();

const mensagem =
document.getElementById("mensagem").value.trim();

if(nome === ""){

    formMessage.textContent =
    "Digite seu nome.";

    formMessage.style.color = "red";

    return;
}

if(email === ""){

    formMessage.textContent =
    "Digite seu e-mail.";

    formMessage.style.color = "red";

    return;
}

if(!email.includes("@")){

    formMessage.textContent =
    "Digite um e-mail válido.";

    formMessage.style.color = "red";

    return;
}

if(mensagem.length < 10){

    formMessage.textContent =
    "A mensagem deve ter pelo menos 10 caracteres.";

    formMessage.style.color = "red";

    return;
}

formMessage.textContent =
"✅ Mensagem enviada com sucesso!";

formMessage.style.color = "green";

form.reset();

});

// ==========================
// ANIMAÇÃO AO ROLAR
// ==========================

const elementos =
document.querySelectorAll(
".card, .indicador, .quiz-box, form"
);

const observador =
new IntersectionObserver((entradas) => {

entradas.forEach((entrada) => {

    if(entrada.isIntersecting){

        entrada.target.style.opacity = "1";
        entrada.target.style.transform =
        "translateY(0)";

    }

});

});

elementos.forEach((elemento) => {

elemento.style.opacity = "0";
elemento.style.transform =
"translateY(40px)";
elemento.style.transition =
"all 0.8s ease";

observador.observe(elemento);
});
