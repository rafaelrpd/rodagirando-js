const fps = 60; // quadros por segundo;
const mpf = 1000/fps; // mili segundos por frame(16,66);
var aceleracao = 5/Math.pow(mpf,2); // radianos/segundo^2;
var velocidadeFinal = 0; // radianos/segundo;
var graus = 0; // graus;
const timer = null;
// desenhar os objetos no canvas através do contexto.
function desenhar() {
    const canvas = document.querySelector("#canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const rectangleWidth = 100;
        const rectangleHeight = 100;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save(); 
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate(this.graus * (Math.PI / 180));
        ctx.fillStyle = "rgba(61, 165, 72, 0.4)";
        ctx.fillRect(0 - rectangleWidth / 2, 0 - rectangleHeight / 2, rectangleWidth, rectangleHeight);
        ctx.restore();
    }
}
// atualizar o canvas e chamar a recursividade
function atualizar() {
    // aqui eu tenho que passar os graus
    
    desenhar();
}
// iniciar o canvas para ativar o loop
function iniciar() {
    clearInterval(this.timer);
    this.timer = setInterval(atualizar, this.mpf);
}
// parar o loop
function parar() {
    clearInterval(this.timer);
    desenhar();
}
desenhar();