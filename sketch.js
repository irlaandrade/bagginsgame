function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
  
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

function reset() {
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  cenas = {
    telaInicial,
    jogo,
    gameOver
  };
  
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  botaoGerenciadorGO = new BotaoGerenciador('Reiniciar', width / 2, height / 2);
}