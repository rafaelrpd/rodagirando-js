const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
// canvas tamanho
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
// retângulo tamanho
const rectangleWidth = 100;
const rectangleHeight = 100;
// graus
let graus = 45;

// fundo - desenhar e pintar
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

// desenhar retângulo
ctx.fillStyle = "rgba(61, 0, 72, 0.4)";
ctx.fillRect(canvasWidth/2 - rectangleWidth/2, canvasHeight/2 - rectangleHeight/2, rectangleWidth, rectangleHeight);

// Salvar estado inicial do canvas
ctx.save();

// translate e rotate, criando um retângulo.
ctx.translate(canvasWidth/2, canvasHeight/2);
ctx.rotate(graus * (Math.PI / 180));
ctx.fillStyle = "rgba(61, 165, 72, 0.4)";
ctx.fillRect(0 - rectangleWidth/2, 0 - rectangleHeight/2, rectangleWidth, rectangleHeight);

ctx.restore();