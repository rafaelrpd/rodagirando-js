// definir os frames por segundo de atualização da tela
const fps = 60;
// milisegundos por frame
const mpf = 1000/fps;
// aceleração constante
var aceleracao = Math.pow(5/mpf, 2);
// velocidade inicial
var velocidadeInicial = 0;
// velocidade final
var velocidadeFinal = 0;
// inicialização e declaração da constante que controlará a passagem de tempo
const timer = null;
// desenhar os objetos no canvas através do contexto.
function desenhar() {
    // selecionar o canvas do html
    const canvas = document.querySelector("#canvas");
    if (canvas.getContext) {
        // selecionar o contexto 2d do canvas
        const ctx = canvas.getContext("2d");
        // atribuir as medidas do canvas para constantes
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        // atribuir medidas para a criação de retângulos
        const rectangleWidth = 100;
        const rectangleHeight = 100;
        // limpar o canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // salvar estado inicial do canvas
        ctx.save(); 
        // translate o canvas, mudando as coordenadas (0,0) para o centro do canvas
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        // rotate o canvas, mudando a diposição em radianos da movimentação
        ctx.rotate(this.velocidadeFinal * (Math.PI / 180));
        console.log(this.velocidadeFinal);
        // definir a cor do retângulo que será criado, bem como deixá-lo transparente
        ctx.fillStyle = "rgba(61, 165, 72, 0.4)";
        // criar o retângulo e deixá-lo centrado
        ctx.fillRect(0 - rectangleWidth / 2, 0 - rectangleHeight / 2, rectangleWidth, rectangleHeight);
        // restaurar o ponto inicial do canvas que foi salvo anteriormente. Isso diz respeito ao translate e ao rotate.
        ctx.restore();
    }
}
// atualizar o canvas e chamar a recursividade
function atualizar() {
    // mudar o ângulo inicial (aceleração em radianos/segundo^2)
    this.velocidadeFinal += this.aceleracao;
    // desenhar o objeto com o novo ângulo e iniciar a recursividade
    desenhar();
}
// iniciar o canvas para ativar o loop
function iniciar() {
    // parar o timer para não perder frames
    clearInterval(this.timer);
    // iniciar o timer, passando a função de atualizar, bem como informar a taxa de atualização da função atualizar
    this.timer = setInterval(atualizar, this.mpf);
}
// parar o loop
function parar() {
    // parar o timer
    clearInterval(this.timer);
    // desenhar o último objeto no canvas sem atualizar o ângulo
    desenhar();
}
// desenhar o primeiro objeto 2d
desenhar();