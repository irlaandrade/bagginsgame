class GameOver {
  constructor(){
    this.x = width/2;
    this.y = height;
  }
  draw() {
    this._imagemGameOverFundo();
    this._botao(); 
    
  }
  _imagemGameOverFundo(){
    image(imagemGameOver, width/2 - 200, height/3);
  }
  _botao(){
    botaoGerenciadorGO.y = height / 7 * 5;
    botaoGerenciadorGO.draw();
  }  
}
